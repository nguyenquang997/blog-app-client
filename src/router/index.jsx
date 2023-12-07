import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

// const AuthLayout = () => {
//     return <Outlet />
// }

const router = createBrowserRouter([
    {
        element: <Outlet />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
        ]
    }
])

export default router