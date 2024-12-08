import axios from "axios"

export const BASE = 'http://localhost:8000/';
export const BASE_URL = 'http://localhost:8000/api/';

const Api = axios.create({
    baseURL: BASE_URL,
});

// Add a request interceptor
Api.interceptors.request.use((config)=>{
    let token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

Api.interceptors.response.use((response)=>{

    return response;
},(error)=>{
    const {response} = error;

    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error;
})

  export default Api;