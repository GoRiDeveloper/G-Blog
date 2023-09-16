import express, { type Express } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./api_service/error/error.handler.middleware";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", router);

app.use(globalErrorHandler);
