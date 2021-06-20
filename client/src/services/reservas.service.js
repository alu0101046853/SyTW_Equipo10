import { authHeader } from '../helpers';

export const reservaService = {
    logout,
    getAll,
    create,
    getAllbyID,
    _delete
};

function create (time,date,comensales,name,usuario, guachinche) {
    const userAuth = authHeader();
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userAuth['Authorization']
        },
        body: JSON.stringify({ time,date,comensales,name,usuario, guachinche })
    };
    return fetch('http://localhost:3000/reservas/create', requestOptions)
    .then(handleResponse);
}
function getAllbyID(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://localhost:3000/reservas/${id}`, requestOptions)
    .then(handleResponse);
}

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`http://localhost:3000/reservas/${id}`, requestOptions)
    .then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3000/reservas', requestOptions).then(handleResponse);
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