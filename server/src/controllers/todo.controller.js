import Router from 'koa-router';
import { getAllTodos } from '../services/todo.service';

const getAllTodosAction = async (ctx) => {
    const todos = await getAllTodos();
    ctx.body = {
        data: todos,
    };
};


export const todosController = () => {
    const todoRouter = Router();
    todoRouter.get('/todo', getAllTodosAction);
    return todoRouter.routes();
};