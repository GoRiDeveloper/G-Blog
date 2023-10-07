import express, { type Express } from "express";
import cors from "cors";
import { router } from "./routes";
import { globalErrorHandler } from "./api_service/error/error.handler.middleware";

export const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./upload"));

app.use("/api/v1", router);

app.use(globalErrorHandler);
