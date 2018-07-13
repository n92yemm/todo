import {
    EDIT_TODO_ITEM,
    TODO_ITEM_EDITED,
    EDIT_TODO_ITEM_FAILURE
} from '../constants/actionTypes';

export const editTodoItem = (item) => {
    return {
        type: EDIT_TODO_ITEM,
        payload: item
    };
};

export const todoItemEdited = ({ data }) => {
    return {
        type: TODO_ITEM_EDITED,
        payload: data
    };
};

export const editTodoItemFailure = (error) => {
    return {
        type: EDIT_TODO_ITEM_FAILURE,
        payload: error
    };
};