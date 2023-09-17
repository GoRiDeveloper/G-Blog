import { InsertResult } from "typeorm";

export enum GlobalStatus {
  available = "available",
  disabled = "disabled",
}

export interface EntityInterface {
  create(data: any, listeners: boolean): Promise<InsertResult | object>;
  findAndCountAll(
    filters: object,
    attrs?: object | false,
    relation?: object | false,
    extras?: object
  ): Promise<[any[], number]>;
  findOne(
    filters: object,
    attrs?: object | false,
    relations?: object | false,
    extras?: object | false,
    error?: boolean,
    errorMsg?: string | false
  ): Promise<object | null>;
  update(dataToUpdate: any, listeners: boolean): Promise<any>;
}
