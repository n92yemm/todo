import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import createReducer from '../helpers/createReducer';

const initialState = {
    items: []
};

const todoItemAdded = (state, action) => {
    return {
        ...state,
        items: state.items.concat([{
            text: action.payload,
            checked: false
        }])
    };
};

const todoItemCheckedChanged = (state, action) => {
    return {
        ...state,
        items: state.items.map(item => {
            if(item.text === action.payload.payload.text) { 
                return { ...item, checked: !item.checked };
            }
            return item;
        })
    };
}; 

export const todoItems = createReducer(initialState, {
    'TODO_ITEM_ADDED': todoItemAdded,
    'TODO_ITEM_CHECKED_CHANGED': todoItemCheckedChanged
});

export default combineReducers({
    todoItems,
    form: formReducer
});