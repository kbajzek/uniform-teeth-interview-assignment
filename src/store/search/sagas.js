import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { SEARCH_BEGIN } from './types';
import { searchSuccess, searchFailed } from './actions';

function* searchSaga(action) {
    try {
        const URL = `http://127.0.0.1:8080/?search=${action.searchString}`;
        const response = yield axios.get(URL);
        yield put(searchSuccess(response.data, action.searchString));
    } catch (error) {
        yield put(searchFailed(error));
    }
}

export function* watchSearch() {
    yield takeLatest(SEARCH_BEGIN, searchSaga);
}