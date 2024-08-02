import express from "express";
import { medsRoutes } from "./routes/meds.routes";

export const routes = express();

routes.use('/meds', medsRoutes);