import type { Repository, InsertResult } from "typeorm";
import { AppError } from "../../utils/app.error";
import { HTTP_ERROR_CODES } from "../../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export class EntityFactory {
  private readonly entityRepository: Repository<any>;

  constructor(repository: Repository<any>) {
    this.entityRepository = repository;
  }

  private async save(data: any): Promise<InsertResult> {
    return await this.entityRepository.insert(data);
  }

  private async saveOrUpdate(data: any, listeners: boolean): Promise<any> {
    return await this.entityRepository.save(data, { listeners });
  }

  async create(data: any, listeners: boolean): Promise<InsertResult | object> {
    const created = this.entityRepository.create(data);
    if (listeners) return await this.saveOrUpdate(data, true);
    return await this.save(created);
  }

  async findAndCountAll(
    filters: object,
    attrs: object | false,
    relationAttrs: object | false
  ): Promise<[any[], number]> {
    return await this.entityRepository.findAndCount({
      where: filters,
      ...(attrs && {
        select: attrs,
      }),
      ...(relationAttrs && {
        relations: relationAttrs,
      }),
    });
  }

  async findOne(
    filters: object,
    attrs: object | false,
    relationAttrs: object | false,
    extras: object | false,
    error: boolean,
    errorMsg: string | false
  ): Promise<object | null> {
    const entity = await this.entityRepository.findOne({
      where: filters,
      ...(attrs && {
        select: attrs,
      }),
      ...(relationAttrs && {
        relations: relationAttrs,
      })
      ...(extras && extras)
    });

    if (error && !entity)
      throw new AppError(
        errorMsg || ERROR_MESSAGES.NOT_FOUND_GENERIC,
        HTTP_ERROR_CODES.NOT_FOUND
      );

    return entity;
  }

  async update(dataToUpdate: any, listeners: boolean): Promise<any> {
    return await this.saveOrUpdate(dataToUpdate, listeners);
  }
}
