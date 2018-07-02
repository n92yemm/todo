import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ADD_ITEM } from '../constants/actionTypes';
import { itemAdded } from '../actions/';

function* addTodo() {
    const itemForm = yield select(({ form }) => form.toDo);

    //const response = yield call(fetch, 'http://google.com');
    ///////
    //yield put(itemAdded(response));
    yield put(itemAdded(itemForm));
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield * [
        takeEvery(ADD_ITEM, addTodo),
    ];
}
