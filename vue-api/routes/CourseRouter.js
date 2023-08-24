import express from "express";

import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController.js";

const CourseRouter = express.Router();

CourseRouter.get("/courses", getAllCourses);
CourseRouter.get("/courses/:id", getCourseById);
CourseRouter.post("/courses", createCourse);
CourseRouter.put("/courses/:id", updateCourse);
CourseRouter.delete("/courses/:id", deleteCourse);

export default CourseRouter;
