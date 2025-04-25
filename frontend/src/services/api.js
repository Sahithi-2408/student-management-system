import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const getStudents = () => axios.get(API_URL);
export const getStudent = (id) => axios.get(`${API_URL}/${id}`);
export const addStudent = (student) => axios.post(API_URL, student);
export const updateStudent = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
