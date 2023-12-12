import { Typography } from "@mui/material";
import styles from './Header.module.css'

function Header() {
    return (
        <Typography variant="h4" className={styles['header-container']}>This is Blog</Typography>
    );
}

export default Header;