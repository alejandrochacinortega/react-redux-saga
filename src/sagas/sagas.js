import { ADD_USER, ADD_USER_SUCCEEDED, DELETE_POST, DELETE_POST_SUCCEEDED } from '../actions/index';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import Immutable from 'immutable';


// 1. our worker saga
function* createPost(actions) {
    try {
        const request = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', { name: actions.payload.name });
        yield put({
            type: ADD_USER_SUCCEEDED,
            payload:  request
        })
    } catch (e) {
        console.log(' there is an error ', e);
    }
}

function* deletePost(action) {
    try {
        yield put({
            type: DELETE_POST_SUCCEEDED,
            index: action.index
        })
    } catch (e) {
        console.log(' error deleting file  ', action.index);
    }
}


// 2. our watcher saga
export function* watchCreatePost() {
    yield takeEvery(ADD_USER, createPost)
}

export function* watchDeletePost() {
    yield takeEvery(DELETE_POST, deletePost)
}

// 3. our root saga


//single entry point to start sagas
export default function* rootSaga() {
    yield [
        watchCreatePost(),
        watchDeletePost()
    ]
}