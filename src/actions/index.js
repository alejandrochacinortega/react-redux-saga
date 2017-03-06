import axios from 'axios';
import Immutable from 'immutable';

export const FETCH_USERS =  'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCEEDED = "ADD_USER_SUCCEEDED";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCEEDED = "DELETE_POST_SUCCEEDED";

export function fetchUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let request = axios.get(URL);

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function addPost(post) {
    return {
        type: ADD_USER,
        payload: {
            name: post
        }
    }
}

export function deletePost(index) {
    return {
        type: DELETE_POST,
        index
    }
}