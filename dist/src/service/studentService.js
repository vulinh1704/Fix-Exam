"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
class StudentService {
    constructor() {
        this.findAll = async () => {
            let students = await student_1.Student.find().populate("Clazz");
            return students;
        };
        this.save = async (student) => {
            let studentCreate = await student_1.Student.create(student);
            return studentCreate;
        };
        this.findById = async (id) => {
            let student = await student_1.Student.findOne({ _id: id });
            return student;
        };
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map