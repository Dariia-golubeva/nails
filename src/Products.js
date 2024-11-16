import React, {useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import {Box, Typography} from "@mui/material";

import Items from './Items.js'
import {gelVarnishes, categories} from './constants/products'

const styles = {
    container: {
        backgroundColor: '#fff',
        padding: '40px 150px'
    },
    title: {
      color: '#372821',
      fontWeight: '400',
      fontSize: '45px',
    },
    itemsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '75px',
        padding: '60px',
    }
}

const Products = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const title = categories[id].title
    const items = id === 'gelVarnishes' ? gelVarnishes : {};

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>{title}</Typography>
            <Box sx={styles.itemsContainer}>
                {Object.entries(items).map(([key, item]) => (
                    <Items
                        key={item.title}
                        item={item}
                        id={key}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Products