import { RouterProvider } from "react-router"
import { appRouter } from "./AppRouter"
import { Toaster } from 'sonner'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type PropsWithChildren } from "react"

import { CustomFullScreenLoading } from "./components/custom/CustomFullScreenLoading"
import { useAuthStore } from "./modules/auth/store/auth.store"

const queryClient = new QueryClient()

const ChekAuthProvider = ({ children }: PropsWithChildren) => {
 
  const { checkAuthStatus} = useAuthStore() //Llamamos la funcion desde nuestro contexto

  const { isLoading, isFetching } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1,
    refetchOnWindowFocus: true
  })

  // Mientras verifica el token por primera vez
  if(isLoading || isFetching) return <CustomFullScreenLoading/>

  return <>{children}</>;
}

export const TesloShopApp = () => {

  return (
    <QueryClientProvider client={queryClient} >
      <Toaster />

      {/*CUSTOM PROVIDER*/}
      <ChekAuthProvider />
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
