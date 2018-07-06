import {
    ADD_TODO_ITEM,
    TODO_ITEM_ADDED,
    ADD_TODO_ITEM_FAILURE
} from '../constants/actionTypes';

export const addTodoItem = () => {
    return {
        type: ADD_TODO_ITEM
    };
};

export const todoItemAdded = ({ values }) => {
    return {
        type: TODO_ITEM_ADDED,
        payload: values.searchField
    };
};

export const addTodoItemFailure = () => {
    return {
        type: ADD_TODO_ITEM_FAILURE
    };
};