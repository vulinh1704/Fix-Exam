import {Student} from "../model/student";

class StudentService {
    findAll = async () => {
        let students = await Student.find().populate("Clazz");
        return students;
    }

    save = async (student) => {
        let studentCreate = await Student.create(student);
        return studentCreate;
    }
    findById = async (id) => {
        let student = await Student.findOne({_id: id})
        return student;
    }
}
export default new StudentService();