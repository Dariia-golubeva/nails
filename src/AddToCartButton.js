import React from 'react';
import { Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useCartActions} from "./containers/cart";

const styles = {
    button: {
        position: 'relative',
        border: '1px solid #372821',
        color: '#372821',
        padding: '10px 20px',
        textTransform: 'none',
        fontWeight: '400',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    icon: {
        position: 'absolute',
        bottom: '-8px',
        left: '10px',
        fontSize: '18px',
        color: '#372821',
        backgroundColor: '#fff'

    },
    text: {
        color: '#372821',
        padding: '0 30px'
    },
};

const AddToCartButton = ({item}) => {
    const {addToCart} = useCartActions();

    const handleClick = (event) => {
        event.stopPropagation();
        addToCart(item)
    }

    return (
        <Button sx={styles.button} onClick={handleClick}>
            <Typography sx={styles.text}>В корзину</Typography>
            <ShoppingCartOutlinedIcon sx={styles.icon} />
        </Button>
    );
};

export default AddToCartButton;
