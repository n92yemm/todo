import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    CHECKED_ITEM,
    UNCHECKED_ITEM
} from '../constants/actionTypes';

export const addItem = () => {
    return {
        type: ADD_ITEM,
    };
};
