import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'    

export const api = axios.create({
    baseURL: 'http://172.20.10.8:3000/api/v1',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })

export function setHeaders (headers) {
  return api.interceptors.request.use(
    config => {
      config.headers = headers;
      return config;
    },
    error => Promise.reject(error)
  )
}  
  