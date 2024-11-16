import React from 'react';
import {Box, Typography} from "@mui/material";

import ProductCard from './ProductCard';
import {categories} from './constants/products'

const styles = {
    categoriesContainer: {
        backgroundColor: '#fff',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        color: '#78515A',
        fontWeight: '800',
        fontSize: '59px',
        lineHeight: '73px',
    },
    textContainer: {
        position: 'absolute',
        left: '15%',
        width: '50%',
        height: '50%',
    },
    maskGroup: {
        width: '70%',
        height: '70%',
        marginLeft: 'auto',
    },
    categoryText: {
        color: '#78515A',
        fontWeight: '900',
        fontSize: '59px',
    },
    commonCategoriesContainer: {
        padding: '50px',
    },
    cardsContainer: {
        paddingTop: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, auto)',
        gap: '20px',
        gridTemplateAreas: `
            "gelVarnishes nozzles giftVouchers"
            "design tools giftVouchers"
            "liquids lamps paintbrushes"
        `,
    },
    card: {
        '&.gelVarnishes': {gridArea: 'gelVarnishes'},
        '&.nozzles': {gridArea: 'nozzles'},
        '&.giftVouchers': {gridArea: 'giftVouchers'},
        '&.design': {gridArea: 'design'},
        '&.tools': {gridArea: 'tools'},
        '&.liquids': {gridArea: 'liquids'},
        '&.lamps': {gridArea: 'lamps'},
        '&.paintbrushes': {gridArea: 'paintbrushes'},
    },

}

const Categories = () => {
    return (
        <Box sx={styles.categoriesContainer}>
            <Box sx={styles.titleContainer}>
                <Box sx={styles.textContainer}>
                    <Typography sx={styles.title}>GLAMOR ВДОХНОВЕНИЕ ДЛЯ ТВОЕГО МАНИКЮРА</Typography>
                </Box>
                <Box sx={styles.maskGroup}>
                    <img src="/maskGroup.jpg" alt='nails' style={{width: '100%', height: '100%'}}/>
                </Box>
            </Box>
            <Box sx={styles.commonCategoriesContainer}>
                <Typography sx={styles.title}>Общие Категории</Typography>
                <Box sx={styles.cardsContainer}>
                    {Object.entries(categories).map(([key, category]) => (
                        <ProductCard
                            key={category.title}
                            title={category.title}
                            image={category.image}
                            id={key}
                            sx={styles.card}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Categories;
