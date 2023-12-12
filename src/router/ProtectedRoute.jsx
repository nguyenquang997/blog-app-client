import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


function ProtectedRoute() {

    const navigate = useNavigate()
    
    useEffect((() => {
        if (!localStorage.getItem('accessToken')) {
            navigate('/login')
        }

    }), [navigate])

    return <Outlet />

}

export default ProtectedRoute;