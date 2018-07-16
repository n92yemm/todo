import { call, put, takeEvery, select } from 'redux-saga/effects';
import { reset } from 'redux-form';

import { 
    ADD_TODO_ITEM, 
    CHANGE_TODO_ITEM_CHECKED,
    GET_TODO_ITEMS,
    EDIT_TODO_ITEM
} from '../constants/actionTypes';
import { todoItemsReceived, getTodoFailure, initedForm } from '../actions/getTodoItems';
import { todoItemAdded, addTodoItemFailure } from '../actions/addTodoItem';
import { todoItemCheckedChanged, todoItemCheckedChangedFailure } from '../actions/changeTodoItemChecked';
import { todoItemEdited, editTodoItemFailure } from '../actions/editTodoItem';

import request from '../helpers/request';
import { TODO_URL } from '../constants/urls';
import { TODO_FORM, INIT_FORM } from '../constants/forms';


function* getTodoItems() {
    try {
        const response = yield call(request.get, TODO_URL);
        yield put(todoItemsReceived(response));
    } catch(e) {
        yield put(getTodoFailure(e));
    }
}

function* addTodoItem() {
    try {
        const values= yield select(({ form }) => form.toDo.values);
        const options = { 
            body: {
                checked: false,
                text: values.searchField
            },
        };
        const response = yield call(request.post, TODO_URL, options);

        yield put(todoItemAdded(response));
        yield put(reset(TODO_FORM));
    } catch(e) {
        yield put(todoItemCheckedChangedFailure(e));
    }
}

function* changeCheckedTodoItem(action) { 
    try {
        const options = { 
            body: {
                ...action.payload,
                checked: !action.payload.checked
            },
        };
        yield call(request.put, TODO_URL, options);
        yield put(todoItemCheckedChanged(action.payload));
    } catch(e) {
        yield put(addTodoItemFailure(e));
    }
}

function* editTodoItem(action) {
    try {
        const options = { 
            body: {
                ...action.payload,
                text: action.payload.text
            },
        };
        yield call(request.put, TODO_URL, options);
        yield put(todoItemEdited(action.payload));
    } catch(e) {
        yield put(editTodoItemFailure(e));
    }
}

function* initForm(action) {
    yield put(initedForm());
}

export default function* todoSaga() {
    yield * [
        takeEvery(GET_TODO_ITEMS, getTodoItems),
        takeEvery(ADD_TODO_ITEM, addTodoItem),
        takeEvery(CHANGE_TODO_ITEM_CHECKED, changeCheckedTodoItem),
        takeEvery(EDIT_TODO_ITEM, editTodoItem),
        takeEvery(INIT_FORM, initForm)
    ];
}