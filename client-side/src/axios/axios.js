import axios from 'axios'

// {For simple request to backend server}
// export default axios.create({
//     baseURL:'http://localhost:4000/',
//     withCredentials:true,
//     headers:
//     {
//         'Content-Type':'application/json'
//     }
// })



// {For admin request to backend server including Token }

// export const axiosPrivate = axios.create({
//     baseURL:'http://localhost:8000',
//     withCredentials:true,
//     headers:
//     {
//         'Content-Type':'application/json'
//     }
// })


// const baseURL = 'https://api.sprucecloud.ca:2053/';
const baseURL = 'http://localhost:4000/';

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});


const FormData = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/form-data'
  }
});

export { instance, baseURL, FormData};
