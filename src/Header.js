import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Box, IconButton, Link} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import {useIsAuth, useAuthorizationActions} from "./containers/authorization";

const styles = {
    header: {
        backgroundColor: 'white',
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signOutContainer: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: 'white',
        marginRight: '30px',
        marginLeft: 0,
        width: '100%',
        maxWidth: '300px',
    },
    signOut: {
        color: '#373737',
        cursor: 'pointer',
    },
    phoneNumber: {
        display: 'flex',
        alignItems: 'center',
        color: '#373737',
    },
    navigation: {
        backgroundColor: '#FFEFF0',
        display: 'flex',
        justifyContent: 'center',
    },
    navLinks: {
        padding: '10px 0',
        margin: 0,
        listStyle: 'none',
    },
    navLink: {
        margin: '0 50px',
        textDecoration: 'none',
        color: '#79515A',
    },
};

const Header = () => {
    const navigate = useNavigate();
    const isAuth = useIsAuth()
    const {addUser, setSignIn} = useAuthorizationActions();

    const handleSignOut = () => {
        navigate('/');
        if (isAuth) {
            setSignIn(false);
            addUser({
                name: '',
                surname: '',
                email: '',
                password: '',
            });
        }
    }

    return (
        <AppBar position='static' sx={styles.header}>
            <Toolbar sx={styles.headerContent}>
                <Box sx={styles.signOutContainer}>
                    <Typography sx={[styles.signOut, !isAuth && {display: 'none'}]} onClick={handleSignOut}>
                        Выйти
                    </Typography>
                </Box>
                <IconButton disableRipple>
                    <img src="/logo.png" alt="logo" width='70px'/>
                </IconButton>
                <Box className="phone-number" sx={styles.phoneNumber}>
                    <PhoneIcon color='action'/>
                    <Typography variant="body1">
                        Телефон: +375 33 394 29 29
                    </Typography>
                </Box>
            </Toolbar>
            {isAuth &&
                <Toolbar component="nav" variant="dense" sx={styles.navigation}>
                    <Box sx={styles.navLinks}>
                        <Link href="/categories" color="inherit" variant="button" sx={styles.navLink}>
                            Категории
                        </Link>
                        <Link href="/contacts" color="inherit" variant="button" sx={styles.navLink}>
                            Контакты
                        </Link>
                        <Link href="/cart" color="inherit" variant="button" sx={styles.navLink}>
                            Корзина
                        </Link>
                    </Box>
                </Toolbar>
            }
        </AppBar>
    );
};

export default Header;