import { teslo_API } from "@/api/TesloShop-API"
import type { AuthResponse } from "../types/auth.response"


export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {

    try {
        const { data } = await teslo_API.post<AuthResponse>('/auth/login', {

            email: email,
            password: password
        })

        return data
    } catch (error) {

        console.log(error)

        throw error;

    }
}