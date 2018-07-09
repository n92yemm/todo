import { call, put, takeEvery, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { 
    ADD_TODO_ITEM, 
    CHANGE_TODO_ITEM_CHECKED,
    GET_TODO_ITEMS
} from '../constants/actionTypes';
import { todoItemAdded, addTodoItemFailure } from '../actions/addTodoItem';
import { todoItemCheckedChanged } from '../actions/changeTodoItemChecked';
import { getTodo, getTodoFailure } from '../actions/getTodoItems';

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

const callApi = (url, options, method) => () => {
    if(options.body) {
        options.body = JSON.stringify(options.body);
    }
    defaultOptions.method = method ? method : 'POST';
    return fetch(`${baseUrl}/${url}`, {...defaultOptions, ...options })
        .then(res => res.json());
};

function* getTodoItems() {
    try {
        const response = yield call(callApi('todo', 'GET'));
        console.log(response);
        yield put(getTodo(response));
    }
    catch(e) {
        yield put(getTodoFailure);
    }
}

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
        const response = yield call(callApi('todo', options));

        yield put(todoItemAdded(response));
        yield put(reset('toDo'));
    }
    catch(e) {
        yield put(addTodoItemFailure);
    }
}

function* changeCheckedTodoItem(action) { 
    const options = { 
        body: {
            ...action.payload,
            checked: !action.payload.checked
        } 
    };
    yield put(todoItemCheckedChanged(action));
    yield call(callApi('todo', options, 'PUT'));
}

export default function* rootSaga() {
    yield * [
        takeEvery(GET_TODO_ITEMS, getTodoItems),
        takeEvery(ADD_TODO_ITEM, addTodoItem),
        takeEvery(CHANGE_TODO_ITEM_CHECKED, changeCheckedTodoItem)
    ];
}