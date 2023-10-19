import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbConfig } from "../../config/config";
import { Comment, Post, PostImg, User, Error as ErrorEntity } from "../../entities";
import { ERROR_MESSAGES } from "../../constants/error.constants";

export const AppDataSrc: DataSource = new DataSource({
  ...dbConfig,
  entities: [ErrorEntity, User, Post, Comment, PostImg],
});

export const initDatabase = async () => {
  try {
    await AppDataSrc.initialize();
  } catch (e) {
    console.error(e);
    throw new Error(`${ERROR_MESSAGES.DB_GENERIC} ${e}`);
  }
};
