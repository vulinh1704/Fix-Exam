"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_router_1 = require("./student-router");
const clazz_router_1 = require("./clazz-router");
const point_router_1 = require("./point-router");
exports.router = (0, express_1.Router)();
exports.router.use('/students', student_router_1.studentRouter);
exports.router.use('/classes', clazz_router_1.clazzRouter);
exports.router.use('/points', point_router_1.pointRouter);
//# sourceMappingURL=router.js.map