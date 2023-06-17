import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030'
});

interface ApiResponse {
    ok: boolean;
    message: string;
    data?: any;
}

export async function listTasks(userId: string){
    try {
        const result = await api.get(`/users/${userId}/tasks`);
        return result.data;
    } catch (error: any) {
        return error.response.data;
        
    }
}
