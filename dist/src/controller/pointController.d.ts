import { Request, Response } from "express";
declare class PointController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PointController;
export default _default;
