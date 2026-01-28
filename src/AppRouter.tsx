import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./modules/shop/layouts/ShopLayout";

import { HomePage } from "./modules/shop/pages/home/HomePage";
import { ProductPage } from "./modules/shop/pages/product/ProductPage";
import { GenderPage } from "./modules/shop/pages/gender/GenderPage";
//import { AuthLayout } from "./modules/auth/layouts/AuthLayout";
import { LoginPage } from "./modules/auth/pages/login/LoginPage";
import { RegisterPage } from "./modules/auth/pages/register/RegisterPage";
//import { AdminLayout } from "./modules/admin/layouts/AdminLayout";
import { DashboardPage } from "./modules/admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "./modules/admin/pages/product/AdminProductPage";
import  { lazy } from "react";
import { AdminProducts } from "./modules/admin/pages/products/AdminProductsPage";

const AuthLayout = lazy( () => import('./modules/auth/layouts/AuthLayout'))
const AdminLayout = lazy (() => import('./modules/admin/layouts/AdminLayout'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/product/:idSlug',
                element: <ProductPage />
            }
            ,
            {
                path: '/gender/:gender',
                element: <GenderPage />
            }
        ],
    },
    //AuthRoute
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },

    //AdminRoutes
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProducts />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])