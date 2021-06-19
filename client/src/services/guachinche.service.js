import { authHeader } from '../helpers';

export const guachincheService = {
    logout,
    getAll,
    create,
    _delete
};

function create (name, location, hour, phone, delivery, image, description) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, hour, phone, delivery, image, description })
    };
    return fetch('http://localhost:3000/guachinches/register', requestOptions)
    .then(handleResponse);
}

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`http://localhost:3000/guachinches/${id}`, requestOptions)
    .then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/guachinches', requestOptions).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}