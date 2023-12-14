import axios from "./axios";

export const getExpedientesRequest = () => axios.get('/expedientes');

export const getExpedienteRequest = (id) => axios.get(`/expedientes/${id}`);

export const createExpedienteRequest = (expediente) => axios.post('/expedientes', expediente);

export const updateExpedienteRequest = (id, expediente) => axios.put(`/expedientes/${id}`, expediente);

export const deleteExpedienteRequest = (id) => axios.delete(`/expedientes/${id}`);
