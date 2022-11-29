import {Request, Response} from "express";
import pointService from "../service/pointService";

class PointController {
    getAll = async (req: Request, res: Response) => {
        let points = await pointService.findAll();
        return res.status(200).json(points);
    }

    create = async (req: Request, res: Response) => {
        let point = req.body;
        point = await pointService.save(point);
        return res.status(201).json(point);
    }
}
export default new PointController();