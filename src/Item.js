import React from 'react';
import {useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";

import AddToCartButton from "./AddToCartButton";

const styles = {
    container: {
        padding: '40px 150px',
        backgroundColor: '#fff',
    },
    imageContainer: {},
    infoContainer: {
        display: 'flex',
        gap: '140px',
        padding: '40px',
    },
    valuesContainer: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        gap: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    details: {
        fontSize: '16px',
        color: '#372821',
    },
    costContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '14px',
        color: '#372821',
        marginTop: '20px',
    },
};

const Item = () => {
    const location = useLocation();
    const {item} = location.state;

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>{item.title}</Typography>
            <Box sx={styles.infoContainer}>
            <Box sx={styles.imageContainer}>
                <img src={item.image} alt={item.title} style={{width: '100%', height: '100%'}}/>
            </Box>
            <Box sx={styles.valuesContainer}>
                <Typography sx={styles.title}>{`Гель-лак ${item.title}`}</Typography>
                <Typography sx={styles.details}><b>Объем:</b> {item.volume}</Typography>
                <Typography sx={styles.details}><b>Срок годности:</b> {item.expiryDate}</Typography>
                <Typography sx={styles.details}><b>Состав:</b> {item.compound}</Typography>
                <Box sx={styles.costContainer}>
                    {item.cost} BYN
                   <AddToCartButton item={item}/>
                </Box>
            </Box>
            </Box>
                <Typography sx={styles.description}>{item.description}</Typography>
        </Box>
    );
};

export default Item;
