import { teslo_API } from "@/api/TesloShop-API";
import type { AuthResponse } from "../types/auth.response";

export const checkAuthActions = async() => {

    const token = localStorage.getItem('token');
    if(!token) throw new Error('No token found');

    try{
        const {data} = await teslo_API.get<AuthResponse>('/auth/check-status')
        
        localStorage.setItem('token' , data.token)

        return data
    }catch(error){
        console.log(error)
        localStorage.removeItem('token');
        throw new Error ('Token expired or not valid')
    }
}