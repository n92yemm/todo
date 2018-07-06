import { call, put, takeEvery, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { ADD_TODO_ITEM, CHANGE_TODO_ITEM_CHECKED } from '../constants/actionTypes';
import { todoItemAdded, addTodoItemFailure } from '../actions/addTodoItem';
import { todoItemCheckedChanged } from '../actions/changeTodoItemChecked';

const baseUrl = 'http://localhost:9091';

const defaultOptions = 
    {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };

const schema = {
    text: null,
    checked: false
};

const callApi = (url, options) => () => {
    if(options.body) {
        options.body = JSON.stringify(options.body);
    }
    return fetch(`${baseUrl}/${url}`, {...defaultOptions, ...options})
        .then(res => res.json());
};

function* addTodoItem() {
    try {
        const itemForm = yield select(({ form }) => form.toDo);

        const newText = itemForm.values ? itemForm.values.searchField : null;
        const options = { 
            body: {
                ...schema,
                text: newText
            } 
        };
        yield call(callApi('todo', options));
            
        yield put(todoItemAdded(itemForm));
        yield put(reset('toDo'));
    }
    catch(e) {
        yield put(addTodoItemFailure);
    }
}

function* changeCheckedTodoItem(item) {
    const options = { 
        body: {
            ...item.payload
        } 
    };
    yield call(callApi('todo', options));
    yield put(todoItemCheckedChanged(item));
}

export default function* rootSaga() {
    yield * [
        takeEvery(ADD_TODO_ITEM, addTodoItem),
        takeEvery(CHANGE_TODO_ITEM_CHECKED, changeCheckedTodoItem)
    ];
}