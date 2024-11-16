import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';

const styles = {
    header: {
        backgroundColor: 'white',
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchContainer: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: 'white',
        marginRight: '30px',
        marginLeft: 0,
        width: '100%',
        maxWidth: '300px',
    },
    searchIconWrapper: {
        padding: '0 16px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBase: {
        paddingLeft: 'calc(1em + 32px)',
        borderBottom: '2px solid #E0E0E0',
        width: '100%',
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

    const onClick = () => {
        navigate('/Categories');
    };

    return (
        <AppBar position='static' sx={styles.header} >
            <Toolbar sx={styles.headerContent}>
                <Box sx={styles.searchContainer}>
                    <Box sx={styles.searchIconWrapper}>
                        <SearchIcon color='action'/>
                    </Box>
                    <InputBase
                        placeholder="Поиск..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={styles.inputBase}
                    />
                </Box>
                <IconButton onClick={onClick} disableRipple>
                    <img src="/logo.png" alt="logo" width='70px'/>
                </IconButton>
                <Box className="phone-number" sx={styles.phoneNumber}>
                    <PhoneIcon color='action'/>
                    <Typography variant="body1">
                        Телефон: +375 33 394 29 29
                    </Typography>
                </Box>
            </Toolbar>
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
        </AppBar>
    );
};

export default Header;