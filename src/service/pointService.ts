import {Point} from "../model/point";

class PointService {
    findAll = async () => {
        let points = await Point.find().populate("Student");
        return points;
    }
    save = async (point) => {
        let pointCreate = await Point.create(point);
        return pointCreate;
    }
}
export default new PointService();