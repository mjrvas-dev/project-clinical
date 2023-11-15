import axios from "./axios";

export const getDoctorsRequest = () => axios.get('/doctors');

export const getDoctorRequest = (id) => axios.get(`/doctors/${id}`);

export const createDoctorRequest = (doctor) => axios.post('/doctors', doctor);

export const updateDoctorRequest = (id, doctor) => axios.put(`/doctors/${id}`, doctor);

export const deleteDoctorRequest = (id) => axios.delete(`/doctors/${id}`);
