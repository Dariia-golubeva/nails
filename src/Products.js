import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom';
import {Box, Typography} from "@mui/material";

import Items from './Items.js'
import {categories} from './constants/products'

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
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const responseProduct = await fetch(`http://localhost:8000/api/${id}`);
                const responseCategories = await fetch('http://localhost:8000/api/categories');
                if (!responseProduct.ok || !responseCategories.ok) {
                    throw new Error('Ошибка при загрузке продуктов и категорий');
                }
                const dataProduct = await responseProduct.json();
                const dataCategories = await responseCategories.json();
                setProducts(dataProduct);
                setTitle(...dataCategories[id].title);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title}>{categories[id].title}</Typography>
            <Box sx={styles.itemsContainer}>
                {products.map((item) => (
                    <Items
                        key={item.title}
                        item={item}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Products