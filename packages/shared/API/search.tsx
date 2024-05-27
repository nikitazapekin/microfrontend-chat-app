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


/* 
export interface PersonalInformationTypes {
   access_token: string,
    avatar: string,
    chats: null,
    country: string,
    description: string,
    tel: string,
    username: string
}
*/
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

      //  users: Users[]
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
/*
RES[{"username":"ew","country":"we","tel":"we",
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY2NTIwNDAsInVzZXJuYW1lIjoiZXcifQ.6wk_u-uX315mk46jSdI8szH-b5T37_jfXvOv6UhhAR8",
"chats":null,"avatar":"","description":""}]




RESssssssssss{"data":{"users":[{"username":"wfe","country":"wfe","tel":"few","token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY4MDc5OTQsInVzZXJuYW1lIjoid2ZlIn0.ROQ2bCK9QYCvHzmRjOMKNk95Fb2hYfpspYLB8R7wi2w","chats":null,"avatar":
{"text":"w","color":"deepskyblue","url":""},"description":""},{"username":"re","country":"ew","tel":"ewf","token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY4MDgyNTEsInVzZXJuYW1lIjoicmUifQ.1e_vXh07HWPH0gPLZFn6Ypa2S71ZV6qA04KSurJgmtE","chats":null,"avatar":
{"text":"r","color":"orangered","url":""},"description":""}]},"status":200,"statusText":"OK","headers":{"content-length":"545","content-type":"application/json; charset=UTF-8"},
"config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"adapter":["xhr","http"],"transformRequest":[null],"transformResponse":
[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":
{"Accept":"application/json, text/plain, /","Authorization":"Bearer null"},"baseURL":"http://localhost:5000/chat/","withCredentials":true,"method":
"get","url":"/search-user?username=e"},"request":{}}
*/
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
        console.log("UUUUUUUUU" + username)
        return serverApiInstance.get<UsersResponse>(`/search-user?username=${username}`)
    }
}


