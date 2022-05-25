import { Request, Response } from 'express';

import { connect } from '../database'
import { Lesson } from '../interface/Lesson';

export async function getLessons(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM lessons');
    return res.json(courses[0]);
}

export async function createLesson(req: Request, res: Response) {
    const newLesson: Lesson = req.body;
    const conn = await connect();
    try {
        await conn.query('INSERT INTO lessons SET ?', [newLesson]);
    }
    catch (err) {
        console.log(err.message);
    }
    return res.json({
        message: 'Lesson Created'
    });
}

export async function deleteLesson(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM lessons WHERE id = ?', [id]);
    return res.json({
        message: 'Lesson deleted'
    });
}

export async function updateLesson(req: Request, res: Response) {
    const id = req.params.id;
    const updatedLesson: Lesson = req.body;
    const conn = await connect();
    await conn.query('UPDATE lessons SET ? WHERE id = ?', [updatedLesson, id]);
    return res.json({
        message: 'Lesson updated'
    });
}