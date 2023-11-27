import axios from "./axios";

export const getTypeServicesRequest = () => axios.get('/typeservices');

export const getTypeServiceRequest = (id) => axios.get(`/typeservices/${id}`);

export const createTypeServiceRequest = (typeservice) => axios.post('/typeservices', typeservice);

export const updateTypeServiceRequest = (id, typeservice) => axios.put(`/typeservices/${id}`, typeservice);

export const deleteTypeServiceRequest = (id) => axios.delete(`/typeservices/${id}`);
