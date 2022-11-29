"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controller/studentController"));
exports.studentRouter = (0, express_1.Router)();
exports.studentRouter.get('', studentController_1.default.getAll);
exports.studentRouter.post('', studentController_1.default.create);
exports.studentRouter.get('/:id', studentController_1.default.getById);
//# sourceMappingURL=student-router.js.map