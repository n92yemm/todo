import {
    GET_TODO_ITEMS,
    TODO_ITEMS_RECEIVED,
    GET_TODO_FAILURE
} from '../constants/actionTypes';
import { INIT_FORM, INITED_FORM } from '../constants/forms';

export const getTodo = () => {
    return {
        type: GET_TODO_ITEMS
    };
};

export const todoItemsReceived = ({ data }) => {
    return {
        type: TODO_ITEMS_RECEIVED,
        payload: data
    };
};

export const getTodoFailure = (error) => {
    return {
        type: GET_TODO_FAILURE,
        payload: error
    };
};

export const initForm = () => {
    return {
        type: INIT_FORM
    };
};

export const initedForm = () => {
    return {
        type: INITED_FORM
    };
};