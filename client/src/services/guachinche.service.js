import { authHeader } from '../helpers';

export const guachincheService = {
    logout,
    getAll,
    create,
    _delete
};

function create (name, location, hour, phone, delivery, image, description) {
    const userAuth = authHeader();
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userAuth['Authorization']
        },
        body: JSON.stringify({ name, location, hour, phone, delivery, image, description })
    };
    return fetch('https://guachit-api.herokuapp.com/guachinches/register', requestOptions)
    .then(handleResponse);
}

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`https://guachit-api.herokuapp.com/guachinches/${id}`, requestOptions)
    .then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('https://guachit-api.herokuapp.com/guachinches', requestOptions).then(handleResponse);
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