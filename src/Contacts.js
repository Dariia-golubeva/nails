import React from 'react';
import { Box, Typography, Divider } from "@mui/material";

const styles = {
    container: {
        padding: '40px 150px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    titleText: {
        color: '#372821',
        fontWeight: '700',
        fontSize: '45px',
    },
    line: {
        backgroundColor: '#372821',
        width: '10%',
        height: '1px',
    },
    mapContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    map: {
        width: '643px',
        height: '342px',
        border: 'none',
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    addressText: {
        color: '#372821',
        fontWeight: '400',
        fontSize: '14px',
        borderLeft: '2px solid #372821',
        padding: '10px',
    },
};

const mapLink = "https://yandex.ru/map-widget/v1/?um=constructor%3A1a2034742f43357b6437581ed9238e12f95ef73d0e32fc774825ef2641ddb3f9&amp;source=constructor";

const Contacts = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.titleContainer}>
                <Typography sx={styles.titleText}>Мы на карте</Typography>
                <Divider sx={styles.line} />
            </Box>
            <Box sx={styles.mapContainer}>
                <iframe
                    src={mapLink}
                    style={styles.map}
                    title="Yandex Map"
                />
                <Box sx={styles.rightSection}>
                    <Typography sx={styles.addressText}>
                        Беларусь, г. Полоцк, пл. Франциска Скорины, 31
                    </Typography>
                    <Typography sx={styles.addressText}>
                        Время работы:<br />
                        9:00 - 18:00
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Contacts;
