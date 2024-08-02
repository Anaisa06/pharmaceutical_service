import express from "express";
import { create, getAll, getAvailable } from "../controllers/meds.controller";

export const medsRoutes = express();

medsRoutes.get('/', getAll);
medsRoutes.get('/available', getAvailable);
medsRoutes.post('/', create);