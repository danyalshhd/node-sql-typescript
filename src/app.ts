import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@dstransaction/common';

import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';
import courseRoutes from './routes/course.routes';
import languageRoutes from './routes/language.routes';
import lessonRoutes from './routes/lesson.routes';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(indexRoutes);
app.use(userRoutes);
app.use(courseRoutes);
app.use(languageRoutes);
app.use(lessonRoutes);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };