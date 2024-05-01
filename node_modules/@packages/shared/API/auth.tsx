import axios from 'axios';
import type { AxiosInstance } from 'axios';
/*
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: `http://localhost:5000/${apiHost}/`,
});

interface RegProps {
    token: string
}
interface EditDataProps {
    education: string,
    about: string;
    experience: string;
    email: string;
    password: string;
    telephone: string;
    country: string;
    city: string;
    document: string;
    token: string;
}

interface AvatarProps {

    formData: any
}
interface CreateOfferProps {
    title: string,
    describtion: string,
    skills: String[], 
    workingPerDay: string,
    location: string,
       salary: string,
       token: string,
       arrayOfPictures: string
     
} 

*/

interface PersonalData {
    username: string, 
    tel: string,
    country: string
}
const serverApiInstance: AxiosInstance = axios.create({
    baseURL: `http://localhost:5000/${`chat`}/`,
});

export const personalApi = {

AuthAction(data: PersonalData) {
    //sign-in
    //console.log("axios")


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