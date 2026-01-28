import type { User } from '@/types/user.entity'
import { create } from 'zustand'
import { loginAction } from '../actions/login.actions'
import { checkAuthActions } from '../actions/check-auth.action'



type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking'
type authState = {
    //Properties
    user: User | null
    token: string | null
    authStatus: AuthStatus


    //Getter



    //Action s
    login: (email: string, password: string) => Promise<boolean>
    logOut: () => void;
    checkAuthStatus: () => Promise<boolean>
}

export const useAuthStore = create<authState>()((set) => ({
    user: null,
    token: null,
    authStatus: 'checking',

    //Actions
    login: async (email: string, password: string) => {

        try {
            const data = await loginAction(email, password)

            localStorage.setItem('token', data.token)

            set({ user: data.user, token: data.token, authStatus: 'authenticated'})

            return true
        } catch (error) {

            console.log(error)

            localStorage.removeItem('token')

            set({ user: null, token: null, authStatus: 'not-authenticated' })

            return false
        }

    },

    logOut: () => {
         localStorage.removeItem('token')

        set({ user: null, token: null, authStatus: 'not-authenticated' })
    },

    checkAuthStatus: async() => {
        try {
            const { user, token } = await checkAuthActions();
            set({ user: user, token: token, authStatus: 'authenticated' })
            return true
        } catch (error) {
            console.log(error)
            set({ user: undefined, token: undefined, authStatus: 'not-authenticated' })
            return false
        }
    }
}))