import { Router } from 'express';
const router = Router();

import { getUsers, createUser, deleteUser, updateUser } from '../controllers/user.controller';

router.route('/users')
    .get(getUsers)
    .post(createUser);

router.route('/users/:id')
    .delete(deleteUser)
    .put(updateUser);

export default router;  