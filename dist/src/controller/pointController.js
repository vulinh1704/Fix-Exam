"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pointService_1 = __importDefault(require("../service/pointService"));
class PointController {
    constructor() {
        this.getAll = async (req, res) => {
            let points = await pointService_1.default.findAll();
            return res.status(200).json(points);
        };
        this.create = async (req, res) => {
            let point = req.body;
            point = await pointService_1.default.save(point);
            return res.status(201).json(point);
        };
    }
}
exports.default = new PointController();
//# sourceMappingURL=pointController.js.map