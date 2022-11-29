"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const mongoose_1 = require("mongoose");
let PointSchema = new mongoose_1.Schema({
    scoreLT: String,
    scoreTT: String,
    Student: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Student"
    }
});
const Point = (0, mongoose_1.model)('Point', PointSchema);
exports.Point = Point;
//# sourceMappingURL=point.js.map