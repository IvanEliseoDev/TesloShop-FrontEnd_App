
import axios from 'axios'

const teslo_API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


export {teslo_API}