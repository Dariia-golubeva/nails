import {createSlice} from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        user: {
            name: '',
            surname: '',
            email: '',
            password: '',
        },
        isAuth: false,
    },
    reducers: {
        addUser(state, {payload}) {
            return {
                ...state,
                user: payload,
            };
        },
        setSignIn(state, {payload}) {
            return {
                ...state,
                isAuth: payload,
            };
        },
    },
});

export const {addUser, setSignIn} = authorizationSlice.actions;
export default authorizationSlice.reducer;
