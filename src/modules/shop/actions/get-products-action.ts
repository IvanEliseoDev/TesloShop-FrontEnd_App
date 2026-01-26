import { teslo_API } from "@/api/TesloShop-API"
import type { ProductResponse } from "@/types/productsResponse"


interface optionsAction{
    limit?: number | string;
    offset?: number | string;
    sizes? : string;
    gender?: string
    minPrice?: number
    maxPrice?: number
    q?: string
}

export const getProduct = async(options:optionsAction):Promise<ProductResponse> => {

    const {limit, offset, sizes, gender, minPrice, maxPrice, q} = options //Desestructuramos 

    const {data} = await teslo_API.get<ProductResponse>('/products', {
        params:{
            limit,
            offset,
            sizes,
            gender,
            minPrice,
            maxPrice, 
            q
        }
    })

    const productsWithImageURL = data.products.map(product => ({
        ...product,
        images: product.images.map(
            image => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }))

    return {
        ...data,
        products: productsWithImageURL
    };
}