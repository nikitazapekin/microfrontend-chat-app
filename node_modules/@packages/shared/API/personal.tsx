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


export interface PersonalInformationTypes {
    access_token: string,
    avatar: string,
    chats: null,
    country: string,
    description: string,
    tel: string ,
    username:string
  }
  
const API_URL = `http://localhost:5000/${`chat`}/`
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,

});

serverApiInstance.interceptors.request.use((config) => {
    console.log("INTERCEPT" + localStorage.getItem('token'))
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
serverApiInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
   // console.log("ERRR" + JSON.stringify(error))
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {

            const response = await axios.get<AuthResponse>(`${API_URL}/token`, { withCredentials: true })

            console.log("PERSONAL TOKEEEEEEEEEEEN" +JSON.stringify(response))
            localStorage.setItem('token', response.data.access_token);
            return serverApiInstance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
export default class PersonalService {
    static async getPersonalData(): Promise<AxiosResponse<AuthResponse>> {
       
        return serverApiInstance.get<AuthResponse>('/personal')
    }


    static async getPersonalDataByUsername(username: string): Promise<AxiosResponse<PersonalInformationTypes>> {
       
        return serverApiInstance.get<PersonalInformationTypes>(`/personal-username?user=${username}`)
    }
}


//getPersonalDataByUsername();