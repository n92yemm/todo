import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer
});

const initialState = {
    items: []
};

export function counter(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ITEM': 
        return {...state};
    default: return state;
    }
}
