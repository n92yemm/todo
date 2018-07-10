const baseUrl = 'http://localhost:9091';

const defaultOptions = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
};


const callApi = (method) => (url, options = {}) => {
    if(options.body) {
        options.body = JSON.stringify(options.body);
    }
    return fetch(`${baseUrl}/${url}`, { ...defaultOptions, ... options, method })
        .then(res => res.json());
};


export default {
    get: callApi('GET'),
    post: callApi('POST'),
    put: callApi('PUT'),
    patch: callApi('PATCH'),
    delete: callApi('DELETE'), 
};
