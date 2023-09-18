import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbConfig } from "../../config/config";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const AppDataSrc: DataSource = new DataSource(dbConfig);

export const initDatabase = async () => {
  try {
    await AppDataSrc.initialize();
  } catch (e) {
    console.log(e);
    throw new Error(`${ERROR_MESSAGES.DB_GENERIC} ${e}`);
  }
};
