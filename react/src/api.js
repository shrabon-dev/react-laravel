import axios from "axios"

const Api = axios.create({
    baseURL: 'http://localhost:8000/api/',
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