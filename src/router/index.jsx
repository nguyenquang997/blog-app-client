import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../router/ProtectedRoute";
import AuthProvider from "../Context/AuthProvider";
// const AuthLayout = () => {
//     return <Outlet />
// }

const router = createBrowserRouter([
    {
        element: <AuthProvider><Outlet /></AuthProvider>,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                element: <ProtectedRoute />,
                children: [

                    {
                        path: '/',
                        element: <HomePage />,
                    },
                ]
            }
        ]
    }
])

export default router