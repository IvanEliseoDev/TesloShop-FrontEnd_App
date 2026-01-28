
import axios from 'axios'

const teslo_API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// TODO Interceptores
//! 1. Accedemos a la instancia de axios y definimos un interceptor de 'request'
// Esto se ejecutará ANTES de que la petición salga hacia el servidor.
teslo_API.interceptors.request.use( (config) => {

    // 2. Intentamos obtener el token que guardamos previamente en el almacenamiento del navegador.
    const token = localStorage.getItem('token')

    // 3. Si el token existe..
    if(token){
        //! 4. Modificamos el objeto 'config' (que contiene URL, método, etc.) 
        //! para añadir el header de Authorization con el formato Bearer Token.
        config.headers.Authorization = `Bearer ${token}`
    }

    // 5. Es OBLIGATORIO retornar el config para que la petición continúe su viaje.
    return config
})

export {teslo_API}