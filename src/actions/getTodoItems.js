import {
    GET_TODO_ITEMS,
    GET_TODO_FAILURE
} from '../constants/actionTypes';

export const getTodo = (data) => {
    return {
        type: GET_TODO_ITEMS,
        payload: data
    };
};

export const getTodoFailure = () => {
    return {
        type: GET_TODO_FAILURE
    };
};