import axios from 'axios';
import Immutable from 'immutable';

export const FETCH_USERS =  'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCEEDED = "ADD_USER_SUCCEEDED";

export function fetchUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let request = axios.get(URL);

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function addUser(user) {
    console.log(' ACTIONS ADDING USER ', );
    return {
        type: ADD_USER,
        payload: {
            name: "NEW USER"
        }
    }
}