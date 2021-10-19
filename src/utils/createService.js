import http from './http-common';

export default (uri) => {
    return {
        getAll: () => http.get(uri),
        getById: (id) => http.get(`${uri}/${id}`),
        create: (data) => http.post(uri, data),
        update: (id, data) => http.put(`${uri}/${id}`, data),
        remove: (id) => http.delete(`${uri}/${id}`),
        removeAll: () => http.post(uri)
    }
};
