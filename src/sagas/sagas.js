import { ADD_USER, ADD_USER_SUCCEEDED } from '../actions/index';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import Immutable from 'immutable';


// 1. our worker saga
function* createPost(actions) {
    console.log(' action in saga ', actions);
    try {
        const request = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', { name: actions.payload.name });
        console.log(' request  ', request);
        yield put({
            type: ADD_USER_SUCCEEDED,
            payload:  request
        })
    } catch (e) {
        console.log(' there is an error ', e);
    }
}


// 2. our watcher saga
export function* watchCreatePost() {
    console.log(' redux-saga is running ');
    yield takeEvery(ADD_USER, createPost)
}

// 3. our root saga


//single entry point to start sagas
export default function* rootSaga() {
    yield [
        watchCreatePost()
    ]
}