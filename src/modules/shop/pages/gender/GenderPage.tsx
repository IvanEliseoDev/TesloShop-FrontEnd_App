import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/ProductMocks"
import { CustomJumbotron } from "../../components/CustomJumbotron"
import { ProductsGrid } from "../../components/ProductsGrid"
import { useParams } from "react-router"
import { useProducts } from "../../hooks/useProducts"


export const GenderPage = () => {

    const {gender} = useParams()

    const labelGender = gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños'

    const {data} = useProducts()

    return (
        <>
            <CustomJumbotron title={`Productos para ${labelGender}`} />

            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
}
