import { useContext, useState } from "react";
import { Avatar, Box, MenuItem, Menu, Typography } from "@mui/material";
import { AuthContext } from '../Context/AuthProvider'

function UserMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const { user } = useContext(AuthContext)
    const isOpen = anchorEl ? true : false

    const handleLogOut = () => {
        localStorage.removeItem('accessToken')
        user?.auth.signOut()
    }

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleOpen}>
                <Typography >{user?.displayName}</Typography>
                <Avatar
                    sx={{ width: '25px', height: '25px', marginLeft: '5px' }}
                    alt="Avatar"
                    src={user?.photoURL}
                >
                </Avatar >
            </Box >
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                onClose={handleClose}
                open={isOpen}
            >
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>

        </>
    );
}

export default UserMenu;