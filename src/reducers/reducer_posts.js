import Immutable from 'immutable';
import { ADD_USER_SUCCEEDED } from '../actions/index';

let initialState = Immutable.List();

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_SUCCEEDED:
            console.log(' this should afterwards ', action.payload);
            return state.push(Immutable.fromJS(action.payload.data));
        default:
            return state
    }
    
    return state
} 