import axios from 'axios';
import Immutable from 'immutable';

export const FETCH_USERS =  'FETCH_USERS';
export const ADD_USER = 'ADD_USER';

export function fetchUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let request = axios.get(URL);

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function addUser(user) {
    console.log(' action ');  
    return {
        type: ADD_USER,
        payload: Immutable.fromJS({
            name: "NEW USER"
        })
    }
}