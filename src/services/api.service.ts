import axios from 'axios';
import LogedUserType from '../types/LogedUserType';
import UserType from '../types/UserType';
import TaskType from '../types/TaskType';
import { DeleteTaskProps, EditTaskProps } from '../store/modules/tasksSlice';

const api = axios.create({
    baseURL: 'http://localhost:3030'
});

interface ApiResponse {
    ok: boolean;
    message: string;
    data?: any;
}

export async function createUser(props: UserType): Promise<ApiResponse> {
    try {
        const result = await api.post(`/users`, props); 
        // console.log(result.data);
             
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function login(props: LogedUserType): Promise<ApiResponse> {
    try {
        const result = await api.post(`/users/login`, props);
        // console.log(result.data);
        
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function createTask(props: TaskType): Promise<ApiResponse> {
    try {
        const result = await api.post(`/users/${props.userId}/tasks`, props); 
        console.log(result.data);
             
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function listTasks(userId: string): Promise<ApiResponse> {
    try {
        const result = await api.get(`/users/${userId}/tasks`);
        // console.log(result.data);
        
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function editTasks(props: EditTaskProps): Promise<ApiResponse> {
    try {
        const result = await api.put(`/users/${props.userId}/tasks/${props.taskId}`);
        console.log(result.data);
        
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function deleteTasks(props: DeleteTaskProps): Promise<ApiResponse> {
    try {
        const result = await api.delete(`/users/${props.userId}/tasks/${props.taskId}`);
        console.log(result.data);
        
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}