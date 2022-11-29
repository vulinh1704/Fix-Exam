import {Router} from "express";
import pointController from "../controller/pointController";

export const pointRouter = Router();
pointRouter.get('', pointController.getAll);
pointRouter.post('', pointController.create)
