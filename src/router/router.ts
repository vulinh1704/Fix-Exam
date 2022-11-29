import {Router} from "express";
import {studentRouter} from "./student-router";
import {clazzRouter} from "./clazz-router";
import {pointRouter} from "./point-router";

export const router = Router();
router.use('/students',studentRouter);
router.use('/classes', clazzRouter);
router.use('/points', pointRouter);