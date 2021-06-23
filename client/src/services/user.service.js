import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    signup,
    _delete,
    update,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('https://guachit-api.herokuapp.com/users/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function signup(username, password, name, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, name, email })
    };

    return fetch('https://guachit-api.herokuapp.com/users/register', requestOptions)
    .then(handleResponse);

}

function update(username, name, email, id) {
    const userAuth = authHeader();
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userAuth['Authorization']
        },
        body: JSON.stringify({ username, name, email })
    };
    return fetch(`https://guachit-api.herokuapp.com/users/${id}`, requestOptions)
    .then(handleResponse);

}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`https://guachit-api.herokuapp.com/users/${id}`, requestOptions)
    .then(handleResponse);
}
function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
