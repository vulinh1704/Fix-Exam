import {Router} from "express";
import studentController from "../controller/studentController";

export const studentRouter = Router();
studentRouter.get('', studentController.getAll);
studentRouter.post('', studentController.create);
studentRouter.get('/:id', studentController.getById);
