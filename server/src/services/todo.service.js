import Todo from '../models/Todo';

export const getAllTodos = () => {
    return Todo.find();
};