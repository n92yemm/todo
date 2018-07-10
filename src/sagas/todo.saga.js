import { call, put, takeEvery, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { 
    ADD_TODO_ITEM, 
    CHANGE_TODO_ITEM_CHECKED,
    GET_TODO_ITEMS,
} from '../constants/actionTypes';
import { todoItemAdded, addTodoItemFailure } from '../actions/addTodoItem';
import { todoItemCheckedChanged, todoItemCheckedChangedFailure } from '../actions/changeTodoItemChecked';
import { todoItemsReceived, getTodoFailure } from '../actions/getTodoItems';
import request from '../helpers/request';
import { TODO_URL } from '../constants/urls';
import { TODO_FORM } from '../constants/forms';

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
        console.log('change saga');
        const options = { 
            body: {
                ...action.payload,
                checked: !action.payload.checked
            },
        };
        console.log('action', action)
        yield call(request.put, TODO_URL, options);
        yield put(todoItemCheckedChanged(action.payload));
    } catch(e) {
        console.log('fail')
        yield put(addTodoItemFailure(e));
    }
}

export default function* todoSaga() {
    yield * [
        takeEvery(GET_TODO_ITEMS, getTodoItems),
        takeEvery(ADD_TODO_ITEM, addTodoItem),
        takeEvery(CHANGE_TODO_ITEM_CHECKED, changeCheckedTodoItem)
    ];
}