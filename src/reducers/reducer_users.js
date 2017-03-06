import { FETCH_USERS } from '../actions/index';
import Immutable from 'immutable';

let initialState = Immutable.List();

export default function (state = initialState, action) {
    console.log(' action ', action);
    switch (action.type) {
        case FETCH_USERS:
            return Immutable.fromJS(action.payload.data)
    }
    return state
}