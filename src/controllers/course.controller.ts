import { Request, Response } from 'express';

import { connect } from '../database'
import { Course } from '../interface/Course';
import { CourseLesson } from '../interface/CourseLesson';
import { CourseUser } from '../interface/CourseUser';

export async function getCourses(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM courses');
    return res.json(courses[0]);
}

export async function getCoursesOfUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM courses inner join course_user where user_id=?', [id]);
    return res.json(courses[0]);
}

export async function getOrderedListLessons(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    let courses: any;
    try {
        courses = await conn.query('SELECT * FROM course_lesson inner join lessons on course_lesson.lesson_id = lessons.id where course_id=? order by lessons.id', [id]);
    }
    catch (err) {
        console.log(err.message)
    }

    return res.json(courses[0]);
}

export async function createCourse(req: Request, res: Response) {
    const newCourse: Course = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO courses SET ?', [newCourse]);
    return res.json({
        message: 'Course Created'
    });
}

export async function deleteCourse(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM courses WHERE id = ?', [id]);
    return res.json({
        message: 'Course deleted'
    });
}

export async function updateCourse(req: Request, res: Response) {
    const id = req.params.id;
    const updateCourse: Course = req.body;
    const conn = await connect();
    await conn.query('UPDATE courses SET ? WHERE id = ?', [updateCourse, id]);
    return res.json({
        message: 'Course updated'
    });
}

export async function createCourseUser(req: Request, res: Response) {
    const newCourse: CourseUser = req.body;
    const conn = await connect();
    try {
        await conn.query('INSERT INTO course_user SET ?', [newCourse]);
    }
    catch (err) {
        console.log(err.message)
    }
    return res.json({
        message: 'User assigned to course'
    });
}

export async function createCourseLesson(req: Request, res: Response) {
    const newCourse: CourseLesson = req.body;
    const conn = await connect();
    try {
        await conn.query('INSERT INTO course_lesson SET ?', [newCourse]);
    }
    catch (err) {
        console.log(err.message)
    }
    return res.json({
        message: 'Lesson assigned to course'
    });
}
