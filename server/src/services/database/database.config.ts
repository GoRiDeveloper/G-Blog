import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbConfig } from "../../config/config";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const AppDataSrc = new DataSource(dbConfig);

export const initDatabase = async () => {
  try {
    await AppDataSrc.initialize();
  } catch (e) {
    throw new Error(`${ERROR_MESSAGES.DB_GENERIC} ${e}`);
  }
};
