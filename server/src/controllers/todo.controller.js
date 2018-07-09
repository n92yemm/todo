import Router from 'koa-router';
import { getAllTodos, addTodo, updateTodo } from '../services/todo.service';
import createTodoDto from '../dto/todo/create-todo.dto';
import updateTodoDto from '../dto/todo/update-todo.dto';

const getAllTodosAction = async (ctx) => {
    const todos = await getAllTodos();
    ctx.body = {
        data: todos,
    };
};

const addTodoAction = async (ctx) => {
    const todo = await addTodo(ctx.request.body);
    ctx.body = {
        data: todo,
    };    
};

const updateTodoAction = async (ctx) => {
    const todo = await updateTodo(ctx.request.body);
    ctx.body = {
        data: todo
    };
};

export const todosController = () => {
    const todoRouter = Router();
    todoRouter.get('/todo', getAllTodosAction);
    todoRouter.post('/todo', createTodoDto, addTodoAction);
    todoRouter.put('/todo', updateTodoDto, updateTodoAction);

    return todoRouter.routes();
};