import { takeEvery } from 'redux-saga';


// 1. our worker saga


// 2. our watcher saga
export function* watchCreateUser() {
    console.log(' redux-saga is running ');
}

// 3. our root saga


//single entry point to start sagas
export default function* rootSaga() {
    yield [
        watchCreateUser()
    ]
}