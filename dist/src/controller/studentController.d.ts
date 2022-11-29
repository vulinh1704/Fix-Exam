import { Request, Response } from "express";
declare class StudentController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: StudentController;
export default _default;
