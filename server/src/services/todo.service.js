import Todo from '../models/Todo';

export const getAllTodos = () => {
    return Todo.find();
};

export const addTodo = (body) => {
    return Todo.create(body);
};

// export const updateTodo = (body) => {
//     return Todo.
// } 