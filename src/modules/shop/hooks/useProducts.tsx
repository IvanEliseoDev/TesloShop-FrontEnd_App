import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../actions/get-products-action"
import { useLocation, useParams, useSearchParams } from "react-router"
import type { Gender, Size } from "@/types/product.entity"
import { useCalculatedPrice } from "./custom/useCalculatedPrice"



export const useProducts = () => {

  const [searchParams] = useSearchParams()

  const limit = searchParams.get('limit') || 9
  const page = searchParams.get('page') || 1
  const sizes = searchParams.get('sizes') ?? ''
  const {gender} = useParams() 
  const genderPage = gender == undefined ? '' : gender
  const query = searchParams.get('search') ?? ''


  const offset = (Number(page) - 1 )* Number(limit)
  const {minPrice, maxPrice} = useCalculatedPrice()

  return useQuery({
    queryKey: ['products', { offset, limit, sizes, gender, minPrice, maxPrice, query}],
    queryFn: () => getProduct({
      limit: isNaN(+limit) ? 9 : limit,
      offset: isNaN(offset) ? 0 : offset,
      sizes: sizes ?? '',
      gender: genderPage,
      minPrice: minPrice,
      maxPrice: maxPrice,
      q: query// si el offset no es un numero devuelve 0
    }),
    staleTime: 1000 * 60 * 5
  })
}
