import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Container,
    FilledInput,
    Button,
    Typography,
    Box,
    FormControl,
    InputLabel,
    FormHelperText,
    Alert
} from '@mui/material';

import {useAuthorizationActions} from "./containers/authorization";

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
    selected: {
        borderBottom: '2px solid #F1BCC0',
    },
    chooseFormBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    },
    headerTypography: {
        margin: '0px',
        cursor: 'pointer',
    }
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
    const [alert, setAlert] = useState('');
    const [isSignIn, setIsSignIn] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const {addUser, setSignIn} = useAuthorizationActions();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        if (name === 'confirmPassword' && value !== formValues.password) {
            setError('Пароли не совпадают');
        } else {
            setError('');
        }
        setAlert('');
    };

    const isFormValid = () => {
        return (isSignUp ?
                formValues.firstName &&
                formValues.lastName &&
                formValues.email &&
                formValues.password &&
                formValues.confirmPassword &&
                !error
                :
                formValues.email &&
                formValues.password
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSignUp) {
            if (isFormValid()) {
                try {
                    const response = await fetch('http://localhost:8000/api/users/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: formValues.firstName,
                            surname: formValues.lastName,
                            email: formValues.email,
                            password: formValues.password,
                        }),
                    })

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message);
                    }

                    addUser({
                        name: formValues.firstName,
                        surname: formValues.lastName,
                        email: formValues.email,
                        password: formValues.password,
                    })

                    navigate('/Categories');
                    setSignIn(true);
                } catch (e) {
                    setAlert(e.message);
                }
            }
        } else if (isSignIn) {
            if (isFormValid()) {
                try {
                    const response = await fetch('http://localhost:8000/api/users', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message);
                    }

                    const users = await response.json();
                    const userExist = users.find(user => user.email === formValues.email);
                    const correctData = users.find(user => user.password === formValues.password && user.email === formValues.email);

                    if (userExist && correctData) {
                        navigate('/Categories');
                        addUser(userExist);
                        setSignIn(true);
                    }

                    if (userExist && !correctData) {
                        setAlert('Неверный пароль');
                    }

                    if (!userExist) {
                        setAlert('Пользователь не найден');
                    }

                } catch (e) {
                    setAlert(e.message);
                }
            }
        }
    };

    const selectSignIn = () => {
        if (isSignUp) {
            setIsSignUp(false)
        }
        if (!isSignIn) {
            setIsSignIn(true)
        }
    }

    const selectSignUp = () => {
        if (isSignIn) {
            setIsSignIn(false)
        }
        if (!isSignUp) {
            setIsSignUp(true)
        }
    }

    return (
        <Container sx={styles.loginContainer}>
            <Box>
                <Box sx={styles.chooseFormBlock}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={[isSignIn && styles.selected, styles.headerTypography]}
                        onClick={selectSignIn}>
                        Вход
                    </Typography>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={[isSignUp && styles.selected, styles.headerTypography]}
                        onClick={selectSignUp}>
                        Регистрация
                    </Typography>
                </Box>
                {alert && <Alert severity="error">{alert}</Alert>}
                <Box component="form" sx={styles.form}>
                    {isSignUp && <FormControl fullWidth margin="normal" variant="filled" required>
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
                    }
                    {isSignUp && <FormControl fullWidth margin="normal" variant="filled" required>
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
                    }
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
                    {isSignUp && <FormControl fullWidth margin="normal" variant="filled" required error={!!error}>
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
                    }
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={styles.button}
                        onClick={handleSubmit}
                        disabled={!isFormValid()}
                    >
                        {isSignUp ? "Регистрация" : "Вход"}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;