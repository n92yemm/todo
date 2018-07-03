import {
    CHANGE_TODO_ITEM_CHECKED,
    TODO_ITEM_CHECKED_CHANGED
} from '../constants/actionTypes';

export const changeTodoItemChecked = (item) => {
    return {
        type: CHANGE_TODO_ITEM_CHECKED,
        payload: item
    };
};

export const todoItemCheckedChanged = (todoItem) => {
    return {
        type: TODO_ITEM_CHECKED_CHANGED,
        payload: todoItem
    };
};