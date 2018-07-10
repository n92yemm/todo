import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { 
    TODO_ITEMS_RECEIVED,
    TODO_ITEM_ADDED, 
    TODO_ITEM_CHECKED_CHANGED, 
    TODO_ITEM_EDITED, 
} from '../constants/actionTypes';

import createReducer from '../helpers/createReducer';

const initialState = {
    items: []
};

const getTodo = (state, action) => {
    return {
        ...state,
        items: action.payload
    };
};

const todoItemAdded = (state, action) => {
    return {
        ...state,
        items: Array.concat(state.items, action.payload)
    };
};

const todoItemCheckedChanged = (state, action) => {
   
    return {
        ...state,
        items: state.items.map(item => {
            if(item.text === action.payload.text) { 
                return { ...item, checked: !item.checked };
            }
            return item;
        })
    };
}; 

const todoItemEdited = (state, action) => {
    return {
        ...state,
        items: state.items.map(item => {
            if(item.text === action.payload.text) {
                return {...item, text: action.payload.text};
            }
        })
    };
};

export const todoItems = createReducer(initialState, {
    [TODO_ITEMS_RECEIVED]: getTodo,
    [TODO_ITEM_ADDED]: todoItemAdded,
    [TODO_ITEM_CHECKED_CHANGED]: todoItemCheckedChanged,
    [TODO_ITEM_EDITED]: todoItemEdited
});


export default combineReducers({
    todoItems,
    form: formReducer
    //.plugin
    // ({
    //     toDo: createReducer()
    // })
});
