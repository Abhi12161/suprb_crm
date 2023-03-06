import axios from 'axios';
import { getCookie } from '../utils/cookies';
// import { setCookie } from '../utils/cookies';

export const userListingService = (request) => {
    const USERLISTING_API_ENDPOINT = 'https://seedcrm.seedwill.co/api/v1.0/presale/fresh';
    // let SetCookie=setCookie('Set-Cookie')
    // console.log("Set-Cookie",Set-Cookie,getCookie("Set-Cookie"))
    let token = getCookie('token')
    
    //let setCookie='vUFi2eoKDC4LwEYbe6L2kGN5OboX2Wa3WsPLu30b'
    //let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2VlZGNybS5zZWVkd2lsbC5jb1wvYXBpXC92MS4wXC9sb2dpbiIsImlhdCI6MTY0NDgzMDQ2NCwiZXhwIjoxNjQ2MzMwNDY0LCJuYmYiOjE2NDQ4MzA0NjQsImp0aSI6IjlQWWcyc3BCQVlHMmkyVm0iLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.3Bgc-H-XqoVcufjz1eNqGZM5ocQK7xW-pPwN73Mvch4'
   // let setCookie='opL5y9OGUcVibDHqvcUTrxZbMVn7kaI4Zp9NEPwI'
  
     console.log("token", token,getCookie('token'))
    //const headers = {
      // 'Authorization': `Bearer ${token} `,
      // 'Access-Control-Allow-Credentials': true
    //}

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${token} `,
            "Access-Control-Allow-Origin": "*",
        }
      };

    let requestBody = JSON.stringify(request.userListing.length)
    //axios.defaults.withCredentials = true
     axios.post(USERLISTING_API_ENDPOINT, requestBody, axiosConfig)
        .then(response => {

   
           
            return response;
        })
        .then(json => {
            return json;
        });
}