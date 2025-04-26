import axios from 'axios';

// Update API_URL with the `/api` path included
const API_URL = 'https://student-management-system-backend-28hi.onrender.com/api';

export const getStudents = () => axios.get(`${API_URL}/students`);
export const getStudent = (id) => axios.get(`${API_URL}/students/${id}`);
export const addStudent = (student) => axios.post(`${API_URL}/students`, student);
export const updateStudent = (id, updatedData) => axios.put(`${API_URL}/students/${id}`, updatedData);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);
