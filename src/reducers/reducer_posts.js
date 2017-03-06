import Immutable from 'immutable';
import { ADD_USER_SUCCEEDED, DELETE_POST_SUCCEEDED } from '../actions/index';

let initialState = Immutable.List();

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_SUCCEEDED:
            return state.push(Immutable.fromJS(action.payload.data));
        case DELETE_POST_SUCCEEDED:
            return state.delete(action.index);
        default:
            return state
    }
    
    return state
} 