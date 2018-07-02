import {
    ADD_ITEM,

    TEST_ADD_ITEM_SUCCESS,
    TEST_ADD_ITEM_FAILURE,

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

export const itemAdded = ({ values }) => {
    return {
        type: 'TEST_ADD_ITEM_SUCCESS',
        payload: values.searchField
    }
}
