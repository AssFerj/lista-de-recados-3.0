import axios from 'axios';
import LogedUserType from '../types/LogedUserType';
import UserType from '../types/UserType';

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

export async function listTasks(userId: string): Promise<ApiResponse> {
    try {
        const result = await api.get(`/users/${userId}/tasks`);
        // console.log(result.data);
        
        return result.data;
    } catch (error: any) {
        return error.response.data;
    }
}
