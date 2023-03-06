import axios from 'axios';


export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://www.suprbv2.local/api/tenant';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const loginUserService = (request) => {
 const LOGIN_API_ENDPOINT = 'https://seedcrm.seedwill.co/api/v1.0/login';
 //const LOGIN_API_ENDPOINT = 'http://localhost:8120/api/authenticate';
let obj = { "username": "user", "password": "user",  "rememberMe": true  };
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      
    },
  
   body:  JSON.stringify(request.user)
  };
  

  return fetch(LOGIN_API_ENDPOINT, parameters, { credentials: 'include' })
    .then(response => {
     for (var pair of response.headers.entries()) {
        console.log(pair[0]+ ': '+ pair[0]);}
       
     
    return response.json();
    })
    .then(json => {
      return json;
   });
};


// export const loginUserService  = (request) => {
//   //const USERDETAILS_API_ENDPOINT = 'https://seedcrm.seedwill.co/api/v1.0/user-details';
 
//   const LOGIN_API_ENDPOINT = 'http://localhost:8120/api/authenticate';
//   // let obj = { "username": "user", "password": "user",  "rememberMe": true  };
//     const parameters = {
      
//       headers: {
//         'Content-Type': 'application/json'
        
//       },
      
//      // body: JSON.stringify(request.user.username,request.user.password)
//      body:  JSON.stringify(request.user)
//     };
//   return axios.post(LOGIN_API_ENDPOINT,  parameters , { credentials: 'include' })
//   .then(response => {
//          for (var pair of response.headers.entries()) {
//             console.log(pair[0]+ ': '+ pair[0]);}
           
         
//         return response.json();
//         })
//         .then(json => {
//           return json;
//        });
//     };
    
