import { Router } from 'express';
const router = Router();

import { getCourses, createCourse, deleteCourse, updateCourse, createCourseUser, createCourseLesson, getCoursesOfUser, getOrderedListLessons } from '../controllers/course.controller';

router.route('/courses')
    .get(getCourses)
    .post(createCourse);

router.route('/courses/user/:id')
    .get(getCoursesOfUser)
    .post(createCourseUser);

router.route('/courses/lesson/:id')
    .post(createCourseLesson);


router.route('/courses/:id')
    .get(getOrderedListLessons)
    .delete(deleteCourse)
    .put(updateCourse);

export default router;  