// commonJS     function() {}   regular function
// module       () => {}        arrow function

import CourseModel from "../models/courseModel.js";

// getAllCourses
export const getAllCourses = async (request, response) => {
  try {
    const courses = await CourseModel.findAll({
      limit: null,
      offset: null,
      order: [["id", "DESC"]],
    }); // SELECT * FROM courses
    response.send(courses);
  } catch (error) {
    console.error(error);
  }
};

// getCourseById
export const getCourseById = async (request, response) => {
  try {
    const courseById = await CourseModel.findAll({
      where: { id: request.params.id },
    });
    response.send(courseById[0]);
  } catch (error) {
    console.error(error);
  }
};

// createCourse
export const createCourse = async (request, response) => {
  try {
    await CourseModel.create(request.body); // INSERT INTO courses VALUES
    response.json({ message: "Course was created!" });
  } catch (error) {
    console.error(error);
  }
};

// updateCourse
export const updateCourse = async (request, response) => {
  try {
    await CourseModel.update(request.body, {
      where: { id: request.params.id },
    });
    response.json({ message: "Course was updated!" });
  } catch (error) {
    console.error(error);
  }
};

// deleteCourse
export const deleteCourse = async (request, response) => {
  try {
    await CourseModel.destroy({
      where: { id: request.params.id },
    });
    response.json({ message: "Course was deleted!" });
  } catch (error) {
    console.error(error);
  }
};
