import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    counter,
    form: formReducer
});

const initialState = {
    items: [],
    test: 1
};

export function counter(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ITEM': 
        return {...state};
    case 'TEST_ADD_ITEM_SUCCESS':
        return {
            ...state,
            items: state.items.concat([action.payload])
        };
    default: return {...state};
    }
}
