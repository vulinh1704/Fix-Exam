"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("../model/point");
class PointService {
    constructor() {
        this.findAll = async () => {
            let points = await point_1.Point.find().populate("Student");
            return points;
        };
        this.save = async (point) => {
            let pointCreate = await point_1.Point.create(point);
            return pointCreate;
        };
    }
}
exports.default = new PointService();
//# sourceMappingURL=pointService.js.map