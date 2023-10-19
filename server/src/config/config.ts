import { config } from "dotenv";

config();

const ENV = process.env;

export const mode = ENV.NODE_ENV;
export const port = Number(ENV.PORT);
export const salt = Number(ENV.SALT);

export const modes = Object.freeze({
  dev: "development",
  prod: "production",
});
export const jwtConfig = Object.freeze({
  secret: ENV.JWT_SECRET as string,
  expiresIn: ENV.JWT_EXPIRES_IN,
});
export const dbConfig = Object.freeze({
  type: ENV.DB_TYPE as any,
  host: ENV.DB_HOST,
  port: Number(ENV.DB_PORT),
  username: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  logging: false,
  synchronize: true,
  // ...(mode === modes.prod && {
  //   ssl: {
  //     ca: ENV.SSL_CERT,
  //     rejectUnauthorized: false,
  //   },
  // }),
});
export const firebaseConfig = Object.freeze({
  apiKey: ENV.FIREBASE_API_KEY,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  appId: ENV.FIREBASE_API_ID,
});
