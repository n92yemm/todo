import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ADD_ITEM } from '../constants/actionTypes';

function* addTodo() {
    const itemForm = yield select(({ form }) => form.toDo);
    const response = yield call(fetch, '');
    ///////
    yield put(itemAdded(response));
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield * [
        takeEvery(ADD_ITEM, addTodo),
    ];
}
