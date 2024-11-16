import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography, Link} from '@mui/material';
import {Instagram, Twitter, Facebook} from '@mui/icons-material';

const styles = {
    footerContainer: {
        display: 'flex',
        gap: '70px',
        alignItems: 'flex-start',
        padding: '20px 150px',
        backgroundColor: '#fff',
        borderTop: '1px solid #E0E0E0',
    },
    leftSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    logo: {
        color: '#78515A',
        fontSize: '50px',
        fontWeight: '600',
    },
    subtitle: {
        color: '#78515A',
        fontSize: '20px',
        fontWeight: '400',
    },
    iconsContainer: {
        display: 'flex',
        gap: '50px',
        margin: '20px 0',
    },
    icon: {
        color: '#372821',
        fontSize: '24px',
        cursor: 'pointer',
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
    },
    navLink: {
        color: '#969696',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    contactText: {
        color: '#78515A',
        fontSize: '20px',
        fontWeight: '600',
    },
    text: {
        color: '#969696',
        fontSize: '15px',
        fontWeight: '400',
    },
    contacts: {
        display: 'flex',
        flexDirection: 'row',
        gap: '150px',
        marginTop: '20px'
    }
};

const Footer = () => {
    const navigate = useNavigate();

    const onContactsClick = () => {
        navigate('/contacts');
    }

    const onCartClick = () => {
        navigate('/cart');
    }

    return (
        <Box sx={styles.footerContainer}>
            <Box sx={styles.leftSection}>
                <Typography sx={styles.logo}>GLAMOR</Typography>
                <Typography sx={styles.subtitle}>Официальный представитель в Беларуси</Typography>
                <Box sx={styles.iconsContainer}>
                    <Instagram sx={styles.icon}/>
                    <Twitter sx={styles.icon}/>
                    <Facebook sx={styles.icon}/>
                </Box>
            </Box>
            <Box sx={styles.rightSection}>
                <Box>
                    <Typography sx={styles.contactText}>Навигация по сайту</Typography>
                    <Box sx={{display: 'flex', gap: '20px', marginTop: '20px'}}>
                        <Link sx={styles.navLink} onClick={onContactsClick}>Контакты</Link>
                        <Link sx={styles.navLink} onClick={onCartClick}>Корзина</Link>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={styles.contactText}>Наши контакты</Typography>
                    <Box sx={styles.contacts}>
                        <Typography sx={styles.text}>+375 33 394 29 29</Typography>
                        <Typography sx={styles.text}>
                            Беларусь, г. Полоцк, пл. Франциска Скорины, 31
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
