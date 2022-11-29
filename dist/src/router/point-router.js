"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointRouter = void 0;
const express_1 = require("express");
const pointController_1 = __importDefault(require("../controller/pointController"));
exports.pointRouter = (0, express_1.Router)();
exports.pointRouter.get('', pointController_1.default.getAll);
exports.pointRouter.post('', pointController_1.default.create);
//# sourceMappingURL=point-router.js.map