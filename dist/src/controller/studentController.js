"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
const studentService_2 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.getAll = async (req, res) => {
            let students = await studentService_1.default.findAll();
            return res.status(200).json(students);
        };
        this.create = async (req, res) => {
            let student = req.body;
            student = await studentService_1.default.save(student);
            return res.status(201).json(student);
        };
        this.getById = async (req, res) => {
            let id = req.params.id;
            let student = await studentService_2.default.findById(id);
            return res.status(200).json(student);
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map