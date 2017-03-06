import { FETCH_USERS, ADD_USER_SUCCEEDED } from '../actions/index';
import Immutable from 'immutable';

let initialState = Immutable.List();

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return Immutable.fromJS(action.payload.data);
    }
    return state
}