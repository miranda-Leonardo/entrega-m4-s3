import express from "express";
import { categoriesRoutes } from "./routers/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

export default app;
