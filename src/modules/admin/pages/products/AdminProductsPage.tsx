import { CustomPagination } from "@/components/custom/CustomPagination"
import { AdminWelcome } from "../../components/AdminWelcome"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { PlusIcon } from "lucide-react"
import { useProducts } from "@/modules/shop/hooks/useProducts"


export const AdminProducts = () => {

  const {data} = useProducts()

  return (
    <>

      <div className="flex justify-between items-center">

        <AdminWelcome title="Productos" subtitle="Administra tus productos" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to='/admin/products/new'>
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>

      </div>

      <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.map((product) => (
            <TableRow key={product.id}>

              <TableCell className="font-medium">#{product.tags}</TableCell>
              <TableCell className="font-medium">

                <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-12 h-12 object-cover rounded-md"
                />
                
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell className="text-right">${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join('-')}</TableCell>
              <TableCell className="text-right">
                <Link to={`/admin/product/product-tshirt/teslo`}>
                  <Button variant='secondary' className="w-14 m-2 rounded-md">
                    Editar
                  </Button>
                </Link>

                <Button variant='destructive' className="w-14">
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}
