import Router from 'koa-router';
import { todosController } from './todo.controller';

export const configurePublic = () => {
    const publicRouter = Router();
    publicRouter.use(todosController());
    return publicRouter.routes();
};