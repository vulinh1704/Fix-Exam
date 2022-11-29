"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clazz_1 = require("../model/clazz");
class ClazzService {
    constructor() {
        this.findAll = async () => {
            let classes = await clazz_1.Clazz.find();
            return classes;
        };
        this.save = async (clazz) => {
            let clazzCreate = await clazz_1.Clazz.create(clazz);
            return clazzCreate;
        };
    }
}
exports.default = new ClazzService();
//# sourceMappingURL=clazzService.js.map