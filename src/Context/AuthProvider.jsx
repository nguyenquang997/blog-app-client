import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const [user, setUser] = useState()

    const auth = getAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const unSubcribed = auth.onIdTokenChanged((user) => {
            if (user?.uid) {
                setUser(user)
                localStorage.setItem('accessToken', user.accessToken)
                return
            }

            setUser({})
            localStorage.clear
            navigate('/login')

        })
        return unSubcribed
    }, [auth, navigate])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;