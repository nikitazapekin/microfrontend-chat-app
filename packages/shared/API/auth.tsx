import axios from 'axios';
import type { AxiosInstance } from 'axios';
import {AxiosResponse} from 'axios';
/*
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: `http://localhost:5000/${apiHost}/`,
});
*/

interface PersonalData {
    username: string, 
    tel: string,
    country: string
}

export interface AuthResponse {
    
    access_token: string;
    
        username: string;
        /*
        data :{
   }
   */
}
/*
interface AuthObj {
    access_token: string;
      
    username: string;
}
export interface AuthResponse {
    data :AuthObj
} */
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
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
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

export default class AuthService {
   // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {

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

}

export const personalApi = {
    
    
    


AuthAction(data: PersonalData) {
 


    return serverApiInstance.post(`/sign-in`, {
        username: data.username,
        country: data.country,
        tel: data.tel
      
    }
    )



},
Test() {
    return serverApiInstance.get(`hello`, {
    })
        .then(response => {
            console.log("SERVER", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error during signInAction:", error);
            throw error;
        });
}
/*
*/









/*

import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {store} from "../index";
import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;

*/






































    /*
    PersonalInformationAction(regData: RegProps) {
        console.log("REEEEEEEEEE" + JSON.stringify(regData))
        return serverApiInstance.get(`/getPersonalInformation?token=${regData.token}`, {
        })
            .then(response => {
                console.log("SERVER", response.data);
                return response.data;
            })
            .catch(error => {
                console.error("Error during signInAction:", error);
                throw error;
            });
    },
    EditPersonalInformation(EditData: EditDataProps) {
        return serverApiInstance.post(`/getPersonalInformation/editPersonalData?token=${EditData.token}`, {
            education: EditData.token,
            about: EditData.about,
            experience: EditData.experience,
            email: EditData.email,
            password: EditData.password,
            telephone: EditData.telephone,
            country: EditData.country,
            city: EditData.city,
            document: EditData.document,
            token: EditData.token,
        }
        )
    },
 CreateOfferAction(EditData: CreateOfferProps){
    console.log("ARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"+ JSON.stringify(EditData.arrayOfPictures) )
    return serverApiInstance.post(`/createOffer?token=${EditData.token}`, {
            title: EditData.title,
            describtion: EditData.describtion,
            skills: EditData.skills,
            workingPerDay: EditData.workingPerDay,
            location: EditData.location,
           
            salary: EditData.salary,  
            arrayOfPictures: EditData.arrayOfPictures 
    },

        )
 },
   setAvatar(EditData: AvatarProps) {
    console.log("EDIT DATA" +JSON.stringify(EditData))

    },
    */

};