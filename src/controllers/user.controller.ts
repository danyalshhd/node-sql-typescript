import { NextFunction, Request, Response } from 'express';

import { connect } from '../database';
import { User } from '../interface/User';

export async function getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {
    let users: any = [];
    const conn = await connect();
    try {
        users = await conn.query(`SELECT * FROM users`);
    }
    catch (err) {
        console.log(err.message)
    }
    return res.json(users[0]);
}

export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    try {
        const conn = await connect();
        await conn.query('INSERT INTO users SET ?', [newUser]);
    }
    catch (err) {
        console.log(err.message)
    }
    return res.json({
        message: 'User Created'
    });
}

export async function deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM users WHERE id = ?', [id]);
    return res.json({
        message: 'User deleted'
    });
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const updateUser: User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
    return res.json({
        message: 'User updated'
    });
}
