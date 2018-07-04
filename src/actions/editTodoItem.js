import {
    EDIT_TODO_ITEM,
    TODO_ITEM_EDITED
} from '../constants/actionTypes';

export const editTodoItem = () => {
    return {
        type: EDIT_TODO_ITEM
    };
};

export const todoItemEdited = ({ values }) => {
    return {
        type: TODO_ITEM_EDITED,
        payload: values.searchField
    };
};