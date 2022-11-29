import { Request, Response } from "express";
declare class ClazzController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ClazzController;
export default _default;
