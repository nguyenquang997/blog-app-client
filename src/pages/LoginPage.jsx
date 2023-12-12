import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../Context/AuthProvider'

function LoginPage() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it';

    useEffect(() => {
        if (user?.uid) {
            navigate('/')
        }
    }, [navigate, user?.uid])

    const handleLoginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <Typography variant="h5">Welcom to Blog</Typography>
            <Button
                variant='outlined'
                size='small'
                onClick={handleLoginWithGoogle}
                sx={{ mt: '10px' }}
            >
                Login with Google
            </Button>
        </div>
    );
}

export default LoginPage;