import type { Repository, InsertResult } from "typeorm";
import type { EntityInterface } from "../../types/global.types";
import { AppError } from "../../utils/app.error";
import { HTTP_ERROR_CODES } from "../../constants/http.codes.constants";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export class EntityFactory implements EntityInterface {
  private readonly entityRepository: Repository<any>;

  constructor(repository: Repository<any>) {
    this.entityRepository = repository;
  }
  // Función privada para insertar con una query rápida a una tabla.
  private async save(data: any): Promise<InsertResult> {
    return await this.entityRepository.insert(data);
  }
  // Función privada para escuchar, actualizar y/o insertar una entidad.
  private async saveOrUpdate(data: any, listeners: boolean): Promise<any> {
    return await this.entityRepository.save(data, { listeners });
  }
  // Función para crear en una entidad, con o sin escuchadores (listeners).
  async create(data: any, listeners: boolean): Promise<InsertResult | object> {
    const created = this.entityRepository.create(data);
    if (listeners) return await this.saveOrUpdate(created, true);
    return await this.save(created);
  }
  // Función para encontrar todas las coincidencias en una tabla, en la cual filters
  // hace referencia a la opción where de TypeORM, attrs hace referencia a select,
  // relations hace referencia a relations y los extras son opciones extras que podemos
  // colocar.
  async findAndCountAll(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object
  ): Promise<[any[], number]> {
    return await this.entityRepository.findAndCount({
      where: filters,
      ...(attrs && {
        select: attrs,
      }),
      ...(relations && {
        relations,
      }),
      ...extras,
    });
  }
  // Función para encontrar la primer coincidencia en una tabla, en la cual filters
  // hace referencia a la opción where de TypeORM, attrs hace referencia a select,
  // relations hace referencia a relations, extras son opciones extras que podemos
  // colocar, error es un booleano para indicar si queremos un error al no encontrar
  // la entidad que va acompañada de errorMsg que es el mensaje dinámico de ese error.
  async findOne(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object | false,
    error?: boolean,
    errorMsg?: string | false
  ): Promise<object | null> {
    const entity = await this.entityRepository.findOne({
      where: filters,
      ...(attrs && {
        select: attrs,
      }),
      ...(relations && {
        relations,
      }),
      ...(extras && extras),
    });

    if (error && !entity)
      throw new AppError(
        errorMsg || ERROR_MESSAGES.NOT_FOUND_GENERIC,
        HTTP_ERROR_CODES.NOT_FOUND
      );

    return entity;
  }
  // Función para actualizar una entidad.
  async update(dataToUpdate: any, listeners: boolean): Promise<any> {
    return await this.saveOrUpdate(dataToUpdate, listeners);
  }
}
