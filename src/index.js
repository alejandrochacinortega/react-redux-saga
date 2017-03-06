import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';


import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, sagaMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);

