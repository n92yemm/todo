import {
    CHANGE_TODO_ITEM_CHECKED,
    TODO_ITEM_CHECKED_CHANGED,
    CHANGE_TODO_ITEM_CHECKED_FAILURE
} from '../constants/actionTypes';

export const changeTodoItemChecked = (item) => {
    console.log('change action');
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

export const todoItemCheckedChangedFailure = (error) => {
    return {
        type: CHANGE_TODO_ITEM_CHECKED_FAILURE,
        payload: error
    };
};