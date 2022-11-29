"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
let StudentSchema = new mongoose_1.Schema({
    name: String,
    Clazz: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Clazz"
    }
});
const Student = (0, mongoose_1.model)('Student', StudentSchema);
exports.Student = Student;
//# sourceMappingURL=Student.js.map