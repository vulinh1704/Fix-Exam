"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clazz = void 0;
const mongoose_1 = require("mongoose");
let ClazzSchema = new mongoose_1.Schema({
    name: String
});
const Clazz = (0, mongoose_1.model)('Clazz', ClazzSchema);
exports.Clazz = Clazz;
//# sourceMappingURL=clazz.js.map