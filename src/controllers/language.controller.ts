import { Request, Response } from 'express';

import { connect } from '../database'
import { Language } from '../interface/Language';

export async function getLanguages(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM languages');
    return res.json(courses[0]);
}

export async function createLanguage(req: Request, res: Response) {
    const newLanguage: Language = req.body;
    const conn = await connect();
    try {
        await conn.query('INSERT INTO languages SET ?', [newLanguage]);
    }
    catch (err) {
        console.log(err.message)
    }
    return res.json({
        message: 'Language Created'
    });
}

export async function deleteLanguage(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM languages WHERE id = ?', [id]);
    return res.json({
        message: 'Language deleted'
    });
}

export async function deleteLanguages(req: Request, res: Response) {
    const conn = await connect();
    await conn.query('DELETE FROM languages');
    return res.json({
        message: 'Languages deleted'
    });
}

export async function updateLanguage(req: Request, res: Response) {
    const id = req.params.id;
    const updateLanguage: Language = req.body;
    const conn = await connect();
    await conn.query('UPDATE languages SET ? WHERE id = ?', [updateLanguage, id]);
    return res.json({
        message: 'Language updated'
    });
}