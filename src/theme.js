import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#000000',
            secondary: '#46505A',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#46505A',
                        borderRadius: '4px',
                        transition: 'background-color 0.3s ease',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#2C353C',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                        borderRadius: '4px',
                    },
                },
            },
        },
    },
});
