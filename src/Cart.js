import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import {useCartItems, useCartActions} from "./containers/cart";

const styles = {
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
    },
    cart: {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        padding: '40px 20px',
        width: '70%',
    },
    title: {
        color: '#372821',
        fontWeight: '400',
        fontSize: '45px',
        lineHeight: '56.43px',
        display: 'flex',
        justifyContent: 'center',
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ccc',
        borderTop: '1px solid #ccc',
    },
    itemName: {
        color: '#372821',
        fontWeight: '600',
        fontSize: '35px',
        lineHeight: '50.02px',
    },
    button: {
        border: '1px solid #372821',
        color: '#372821',
    },
    order: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: '20px',
        gap: '20px',
    }
}

const Cart = () => {
    const cart = useCartItems();
    const {updateQuantity, removeFromCart} = useCartActions();
    const totalCost = cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.cart}>
                <Typography sx={styles.title}>Корзина</Typography>
                <Box sx={styles.items}>
                    {cart.map(item => (
                        <Box key={item.title} sx={styles.item}>
                            <Box>
                            <img src={item.image} alt={item.title} style={{width: '100px', height: '100px'}}/>
                            </Box>
                            <Box>
                                <Typography sx={styles.itemName}>{item.title}</Typography>
                                <Typography>{item.volume}</Typography>
                                <Box display="flex" alignItems="center">
                                    <Button onClick={() => updateQuantity({
                                        title: item.title,
                                        quantity: item.quantity - 1
                                    })}>-</Button>
                                    <Typography>{item.quantity}</Typography>
                                    <Button onClick={() => updateQuantity({
                                        title: item.title,
                                        quantity: item.quantity + 1
                                    })}>+</Button>
                                </Box>
                            </Box>
                            <Typography>{item.cost * item.quantity} BYN</Typography>
                            <Button sx={styles.button} onClick={() => removeFromCart(item.title)}>Удалить</Button>
                        </Box>
                    ))}
                </Box>
                <Box sx={styles.order}>
                <Typography variant="h5">Итого: {totalCost} BYN</Typography>
                <Button sx={styles.button} onClick={handleClickOpen}>Оформить заказ</Button>
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Спасибо</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Спасибо, мы с вами свяжемся.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={styles.button} onClick={handleClose}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Cart;