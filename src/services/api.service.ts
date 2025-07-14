/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import UserType from '../types/UserType';
import TaskType from '../types/TaskType';

const token = localStorage.getItem('authToken')
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
});

export const validateUser = async (email: string) => {
    const response = await api.get(`/user/${email}`)
    return response.data.data;
}

export const signIn = async (user: Pick<UserType, 'email' | 'password'>) => {
    const response = await api.post(`/login`, user)
    return response.data.data;
}

export const signOut = async () => {
    localStorage.removeItem('user')
    sessionStorage.removeItem('authToken')
    return
}

export const createUser = async (user: UserType) => {
    const response = await api.post(`/user`, user)
    return response.data.data
}

export const createTask = async (props: TaskType) => {
    const response = await api.post(`/user/${props.userId}/task`, props)
    return response.data.data
}

export const getTasks = async (props: UserType) => {
    const response = await api.get(`/user/${props.id}/task`)
    return response.data.data
}

export const editTask = async (props: TaskType) => {
    const response = await api.put(`/user/${props.userId}/task/${props.id}`, props)
    return response.data.data
}

export const deleteTask = async (props: TaskType) => {
    const response = await api.delete(`/user/${props.userId}/task/${props.id}`)
    return response.data.data
}
