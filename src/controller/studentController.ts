import {Request, Response} from "express";
import studentService from "../service/studentService";
import StudentService from "../service/studentService";

class StudentController {
    getAll = async (req: Request, res: Response) => {
        let students = await studentService.findAll();
        return res.status(200).json(students);
    }

    create = async (req: Request, res: Response) => {
        let student = req.body;
        student = await studentService.save(student);
        return res.status(201).json(student);
    }

    getById = async (req: Request, res: Response) => {
        let id = req.params.id;
        let student = await StudentService.findById(id);
        return res.status(200).json(student);
    }
}
export default new StudentController();