import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { AxiosResponse } from 'axios';
interface PersonalData {
    username: string,
    tel: string,
    country: string
}
export interface AuthResponse {
    token: string;
    error: string

}
interface RefreshProps {
    refresh_token: string
}

interface AccessProps {
    access_token: string
}

interface PersonalData {
    access_token: string,
    username: string,
    country: string,
    tel: string,
    chats: Object,
    avatar: string,
    description: string,

}
const API_URL = `http://localhost:5000/${`chat`}/`
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,

});
serverApiInstance.interceptors.request.use((config) => {
  //  console.log("INTERCEPT" + localStorage.getItem('token'))
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
serverApiInstance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
  //  console.log("ФУНКЦИЯ-ИТЕРСЕПТОР")
    const user = localStorage.getItem("username")
 //   console.log("USER" + user)
    const originalRequest = error.config;
    // console.log("ERRR" + JSON.stringify(error))
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const token = localStorage.getItem("token")
           // console.log("TOK" + token)
            const response = await axios.get<AuthResponse>(`${API_URL}token?token=${token}&user=${user}`, { withCredentials: true })

            localStorage.setItem('token', JSON.stringify({ token: response.data.token }));
         //   console.log("new access token" + JSON.stringify(response.data))
            return serverApiInstance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
            localStorage.removeItem('token')
        }
    }
    throw error;
})

export default class AuthService {
    static async login(username: string, country: string, tel: string): Promise<AxiosResponse<AuthResponse>> {
        return serverApiInstance.post<AuthResponse>('/sign-in', { username, tel, country })
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return serverApiInstance.post<AuthResponse>('/registration', { email, password })
    }

    static async logout(): Promise<void> {
        return serverApiInstance.post('/logout')
    }
    static async getRefreshToken(): Promise<AxiosResponse<RefreshProps>> {
        try {
            const response = await serverApiInstance.get<RefreshProps>('/refresh-token');
         //   console.log("reap " + JSON.stringify(response.data.refresh_token))
            return response;
        } catch (error) {
            throw new Error('Failed to fetch refresh token');
        }
    }



    static async getAccessToken(): Promise<AxiosResponse<AccessProps>> {
        try {

            const response = await serverApiInstance.get<AccessProps>('token');
            console.log("reap " + JSON.stringify(response))
            return response;
        } catch (error) {
            throw new Error('Failed to fetch access token');
        }
    }

    static async getUserData(): Promise<AxiosResponse<any>> {

        try {
            const response = await serverApiInstance.get<PersonalData>(`/personal`);
            console.log("reap " + JSON.stringify(response.data.access_token))

            return response;
        } catch (error) {
            throw new Error('Failed to fetch access token');
        }


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