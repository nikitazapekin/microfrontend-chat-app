import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { AxiosResponse } from 'axios';
interface PersonalData {
    username: string,
    tel: string,
    country: string
}
export interface AuthResponse {
    access_token: string;
    username: string;
    
}
interface Obj {
    text: string,
    color: string,
    url: string
}
type Users = Array<{
username: string,
country: string,
avatar: {
    text: string,
    color: string,
    url: string
},
description: string,
lastTimeOfBeingAtNetwork: string,
message: string
}>

interface UsersResponse {

      users: Array<{
        username: string,
        country: string,
        avatar: {
            text: string,
            color: string,
            url: string
        },
        description: string,
        lastTimeOfBeingAtNetwork: string,
        message: string
        }>
}
const API_URL = `http://${process.env.REACT_APP_API_BASE_URL}/${`chat`}/`
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,

});

serverApiInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
serverApiInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/token`, { withCredentials: true })
            localStorage.setItem('token', response.data.access_token);
            return serverApiInstance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
export default class SearchService {
    static async getUsersData(username: string): Promise<AxiosResponse<UsersResponse>> {
        return serverApiInstance.get<UsersResponse>(`/search-user?username=${username}`)
    }
}


