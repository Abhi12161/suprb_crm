import axios from 'axios';
import { getCookie } from '../utils/cookies';

export const dynamicSidebarService= (request) => {
    //const USERDETAILS_API_ENDPOINT = 'https://seedcrm.seedwill.co/api/v1.0/user-details';
    const USERDETAILS_API_ENDPOINT='http://localhost:8120/api/users'
    let token = getCookie('id_token')
    console.log("token" , token,getCookie('id_token'))
   
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return axios.get(USERDETAILS_API_ENDPOINT, { headers })
        .then(response => {

            console.log(response)
            return response;
        })
        .then(json => {
            return json;
        });
};
