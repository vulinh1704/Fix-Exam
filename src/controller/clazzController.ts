import {Request, Response} from "express";
import clazzService from "../service/clazzService";

class ClazzController {
    getAll = async (req: Request, res: Response) => {
        let classes = await clazzService.findAll();
        return res.status(200).json(classes);
    }

    create = async (req: Request, res: Response) => {
        let clazz = req.body;
        clazz = await clazzService.save(clazz);
        return res.status(201).json(clazz);
    }
}
export default new ClazzController();