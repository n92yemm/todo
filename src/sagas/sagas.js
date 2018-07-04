import { call, put, takeEvery, select } from 'redux-saga/effects';
import { reset } from 'redux-form';
import { ADD_TODO_ITEM, CHANGE_TODO_ITEM_CHECKED } from '../constants/actionTypes';
import { todoItemAdded } from '../actions/addTodoItem';
import { todoItemCheckedChanged } from '../actions/changeTodoItemChecked';

function* addTodoItem() {
    const itemForm = yield select(({ form }) => form.toDo);
    yield put(todoItemAdded(itemForm));
    yield put(reset('toDo'));
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