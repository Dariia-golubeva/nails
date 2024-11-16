import React from 'react'
import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";

import AddToCartButton from "./AddToCartButton"

const styles = {
    container: {
        width: '80%',
        height: '80%',

    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    text: {
        color: '#372821',
        fontWeight: '200',
        fontSize: '20px',
    },
    cart: {
        marginTop: '30px'
    },
}

const Items = ({item}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Item', {state: {item}})
    }

    return (
        <Box sx={styles.container} onClick={handleClick}>
            <Box>
                <img src={item.image} alt={item.text} style={{width: '100%', height: '100%'}}/>
            </Box>
            <Box sx={styles.textContainer}>
                <Typography sx={styles.title}>{item.text}</Typography>
                <Typography sx={styles.title}>{`${item.cost}BYN`}</Typography>
            </Box>
            <Box sx={styles.cart}>
                <AddToCartButton item={item}/>
            </Box>
        </Box>
    )
}

export default Items
