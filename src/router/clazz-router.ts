import {Router} from "express";
import clazzController from "../controller/clazzController";

export const clazzRouter = Router();
clazzRouter.get('', clazzController.getAll);
clazzRouter.post('', clazzController.create)
