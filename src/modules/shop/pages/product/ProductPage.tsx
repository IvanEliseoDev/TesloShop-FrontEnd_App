import { Button } from "@/components/ui/button"
import { useStore } from "@/modules/auth/store/example.store"


export const ProductPage = () => {

  const {count, inc, dec} = useStore()
  return (
    <>
    <h1 className="text-3xl font-montserrat">Count: {count}</h1>
    <Button onClick={inc}>
      +1
    </Button>

     <Button onClick={dec}>
      -1
    </Button>
    </>
  )
}
