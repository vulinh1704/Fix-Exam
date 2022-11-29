import {Student} from "../model/student";
import {Clazz} from "../model/clazz";

class ClazzService {
    findAll = async () => {
        let classes = await Clazz.find();
        return classes;
    }
    save = async (clazz) => {
        let clazzCreate = await Clazz.create(clazz);
        return clazzCreate;
    }
}
export default new ClazzService();