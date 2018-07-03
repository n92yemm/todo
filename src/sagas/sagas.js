import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ADD_TODO_ITEM, CHANGE_TODO_ITEM_CHECKED } from '../constants/actionTypes';
import { todoItemAdded } from '../actions/addTodoItem';
import { todoItemCheckedChanged } from '../actions/changeTodoItemChecked';

function* addTodoItem() {
    const itemForm = yield select(({ form }) => form.toDo);

    //const response = yield call(fetch, 'http://google.com');
    ///////
    //yield put(todoItemAdded(response));

    yield put(todoItemAdded(itemForm));
}

function* changeCheckedTodoItem(item) {
    yield put(todoItemCheckedChanged(item));
}

export default function* rootSaga() {
    yield * [
        takeEvery(ADD_TODO_ITEM, addTodoItem),
        takeEvery(CHANGE_TODO_ITEM_CHECKED, changeCheckedTodoItem)
    ];
}