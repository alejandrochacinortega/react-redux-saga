import { FETCH_USERS, ADD_USER } from '../actions/index';
import Immutable from 'immutable';

let initialState = Immutable.List();

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return Immutable.fromJS(action.payload.data);
        case ADD_USER:
            return state.push(action.payload)
    }
    return state
}