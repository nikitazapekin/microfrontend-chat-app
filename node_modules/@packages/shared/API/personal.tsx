import axios from 'axios';
import type { AxiosInstance } from 'axios';
import {AxiosResponse} from 'axios';
 

interface PersonalData {
    username: string, 
    tel: string,
    country: string
}

export interface AuthResponse {
    
    access_token: string;
    
        username: string;
 
}
 
interface RefreshProps {
 
refresh_token: string
 
}

interface AccessProps {
   access_token: string
    }
const API_URL = `http://localhost:5000/${`chat`}/`
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    
});
 
serverApiInstance.interceptors.request.use((config) => {
    console.log("INTERCEPT" +localStorage.getItem('token'))
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

serverApiInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    console.log("ERRR" +JSON.stringify(error))
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
       
      const response = await axios.get<AuthResponse>(`${API_URL}/token`, {withCredentials: true})
            localStorage.setItem('token', response.data.access_token);
            return serverApiInstance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
/*
*/

export default class PersonalService {

    static async getPersonalData(): Promise<AxiosResponse<AuthResponse>> {
      
     return serverApiInstance.get<AuthResponse>('/personal')
    // return serverApiInstance.post<AuthResponse>('/login', {email, password})
 }
   // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
/*
       static async login(): Promise<AxiosResponse<AuthResponse>> {
           let username = "hdj"
           let country = "jj" 
        let tel  = "jjdj"
        return serverApiInstance.post<AuthResponse>('/sign-in', {username, tel, country})
       // return serverApiInstance.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return serverApiInstance.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return serverApiInstance.post('/logout')
    }
   // static async getRefreshToken(): 

   static async getRefreshToken(): Promise<AxiosResponse<RefreshProps>> {
    try {
        const response = await serverApiInstance.get<RefreshProps>('/refresh-token');
        console.log("reap "+JSON.stringify(response.data.refresh_token))
        return response;
    } catch (error) {
        throw new Error('Failed to fetch refresh token');
    } 
    
    

}



static async getAccessToken(): Promise<AxiosResponse<AccessProps>> {
    try {
        const response = await serverApiInstance.get<AccessProps>('/token');
        console.log("reap "+JSON.stringify(response))
        return response;
    } catch (error) {
        throw new Error('Failed to fetch access token');
    }
}
*/
}
