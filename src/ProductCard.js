import React from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";

const styles = {
    card: {
        backgroundColor: '#FFEFF0',
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        color: '#78515A',
        fontWeight: '600',
        fontSize: '18px',
        padding: '10px',
    },
    image: {
        marginLeft: 'auto',
    }
}

function ProductCard({title, image, id}) {
    const navigate = useNavigate()
    const params = new URLSearchParams({ id });

    const onClick = () => {
        navigate(`/Products?${params.toString()}`)
    }

    return (
        <Box sx={styles.card} id={id} onClick={onClick}>
            <Typography sx={styles.text}>{title}</Typography>
            <Box sx={styles.image}>
                <img src={image} alt={title} style={{width: '100%', height: '100%'}}/>
            </Box>
        </Box>
    );
}

export default ProductCard;
