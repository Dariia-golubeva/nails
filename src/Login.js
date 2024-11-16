import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FilledInput, Button, Typography, Box, FormControl, InputLabel, FormHelperText } from '@mui/material';

const styles = {
    loginContainer: {
        margin: '50px auto',
        backgroundColor: '#ffffff',
        border: '1px solid #fff',
        borderRadius: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        width: '30%',
    },
    form: {
        padding: '20px',
    },
    input: {
        backgroundColor: '#FFEFF0',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#F1BCC0',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F1BCC0',
        },
    },
};

const Login = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        if (name === 'confirmPassword' && value !== formValues.password) {
            setError('Пароли не совпадают');
        } else {
            setError('');
        }
    };

    const isFormValid = () => {
        return (
            formValues.firstName &&
            formValues.lastName &&
            formValues.email &&
            formValues.password &&
            formValues.confirmPassword &&
            !error
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            navigate('/Categories');
        }
    };

    return (
        <Container sx={styles.loginContainer}>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Вход / Регистрация
                </Typography>
                <Box component="form" sx={styles.form}>
                    <FormControl fullWidth margin="normal" variant="filled" required>
                        <InputLabel htmlFor="firstName">Имя</InputLabel>
                        <FilledInput
                            id="firstName"
                            name="firstName"
                            disableUnderline
                            sx={styles.input}
                            value={formValues.firstName}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" variant="filled" required>
                        <InputLabel htmlFor="lastName">Фамилия</InputLabel>
                        <FilledInput
                            id="lastName"
                            name="lastName"
                            disableUnderline
                            sx={styles.input}
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" variant="filled" required>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <FilledInput
                            id="email"
                            name="email"
                            type="email"
                            disableUnderline
                            sx={styles.input}
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" variant="filled" required>
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <FilledInput
                            id="password"
                            name="password"
                            type="password"
                            disableUnderline
                            sx={styles.input}
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" variant="filled" required error={!!error}>
                        <InputLabel htmlFor="confirmPassword">Подтверждение пароля</InputLabel>
                        <FilledInput
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            disableUnderline
                            sx={styles.input}
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                        {error && <FormHelperText>{error}</FormHelperText>}
                    </FormControl>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={styles.button}
                        onClick={handleSubmit}
                        disabled={!isFormValid()}
                    >
                        Регистрация
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;