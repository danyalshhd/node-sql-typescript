import { Router } from 'express';
const router = Router();

import { getLanguages, createLanguage, deleteLanguage, deleteLanguages, updateLanguage } from '../controllers/language.controller';

router.route('/languages')
    .get(getLanguages)
    .post(createLanguage)
    .delete(deleteLanguages);

router.route('/languages/:id')
    .delete(deleteLanguage)
    .put(updateLanguage);

export default router;  