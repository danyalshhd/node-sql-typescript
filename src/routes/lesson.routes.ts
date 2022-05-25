import { Router } from 'express';
const router = Router();

import { getLessons, createLesson, deleteLesson, updateLesson } from '../controllers/lesson.controller';

router.route('/lessons')
    .get(getLessons)
    .post(createLesson);

router.route('/lessons/:id')
    .delete(deleteLesson)
    .put(updateLesson);

export default router;  