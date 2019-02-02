import config from '../config';
import {authHeader} from "../helpers";


export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    apiTokenVerify,
    createNote,
    getAllNotes,
    fetchNote,
};


const signature_expired = 'Signature has expired.'


function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };
    console.log('login', requestOptions)

    return fetch(config.apiTokenAuthUrl, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function apiTokenVerify() {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: localStorage.getItem('user'),

    };

    return fetch(config.apiTokenVerifyUrl, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log('apiTokenVerify');
            // TODO: handle error
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}/`, requestOptions).then(handleResponse);
}

function register(username, password, passwordConfirm) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password1: password, password2: passwordConfirm})
    };
    console.log('register', requestOptions)

    return fetch(config.apiUrlSignUp, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
    ;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}/`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (data.non_field_errors && data.non_field_errors[0] == signature_expired) {
            //     logout();
            //     login()
            // }

            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


function createNote(content) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', ...authHeader()},
        body: JSON.stringify({content: content})
    };
    console.log('createNote', requestOptions)

    return fetch(config.apiUrlCreateNote, requestOptions).then(handleResponse);
}

function getAllNotes() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', ...authHeader()},
    };

    return fetch(config.apiUrlgetAllNotes, requestOptions).then(handleResponse);
}

function fetchNote(noteId) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', ...authHeader()},
    };

    return fetch(`${config.apiUrl}/notes/${noteId}/`, requestOptions).then(handleResponse);
}