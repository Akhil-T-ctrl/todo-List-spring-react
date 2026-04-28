import axios from 'axios';

// This pulls 'http://localhost:8080' from your .env
const BASE_URL = import.meta.env.VITE_API_URL;

// This combines it into your full endpoint
const API_BASE_URL = `${BASE_URL}/api/tasks`;

export function createTask(task){
    return axios.post(API_BASE_URL,task);
}

export function getAllTasks(){
    return axios.get(API_BASE_URL);
} 

export function updateTask(id,task){
    return axios.put(`${API_BASE_URL}/${id}`,task);
}

export function deleteTask(id){
    return axios.delete(`${API_BASE_URL}/${id}`);
}