import Constants from '../../config/Constants';

const processResponse = (response) => {
    // Check if we are handling a JSON response
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) return response.json();

    return response;
};

export const get = url => fetch(`${Constants.host}/${url}`).then(processResponse);

export const patch = (url, dataObject) => fetch(`${Constants.host}/${url}`, {
    method: 'PATCH',
    body: JSON.stringify(dataObject),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(processResponse);

export const post = (url, dataObject) => fetch(`${Constants.host}/${url}`, {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(processResponse);

export const put = (url, dataObject) => fetch(`${Constants.host}/${url}`, {
    method: 'PUT',
    body: JSON.stringify(dataObject),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(processResponse);

export const del = url => fetch(`${Constants.host}/${url}`, {
    method: 'DELETE',
}).then(processResponse);