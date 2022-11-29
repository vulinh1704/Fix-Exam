"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clazzService_1 = __importDefault(require("../service/clazzService"));
class ClazzController {
    constructor() {
        this.getAll = async (req, res) => {
            let classes = await clazzService_1.default.findAll();
            return res.status(200).json(classes);
        };
        this.create = async (req, res) => {
            let clazz = req.body;
            clazz = await clazzService_1.default.save(clazz);
            return res.status(201).json(clazz);
        };
    }
}
exports.default = new ClazzController();
//# sourceMappingURL=clazzController.js.map