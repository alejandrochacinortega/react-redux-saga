import axios from 'axios';

export const FETCH_USERS =  'FETCH_USERS';

export function fetchUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let request = axios.get(URL);

    return {
        type: FETCH_USERS,
        payload: request
    }
}