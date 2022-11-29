"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clazzRouter = void 0;
const express_1 = require("express");
const clazzController_1 = __importDefault(require("../controller/clazzController"));
exports.clazzRouter = (0, express_1.Router)();
exports.clazzRouter.get('', clazzController_1.default.getAll);
exports.clazzRouter.post('', clazzController_1.default.create);
//# sourceMappingURL=clazz-router.js.map