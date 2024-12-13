import {useMemo} from "react";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import {addUser, setSignIn} from "./authorizationSlice";
import {selectUser, selectIsAuth} from "./selectors";

export const useAuthorizationActions = () => {
    const dispatch = useDispatch();
    const actions = useMemo(
        () =>
            bindActionCreators(
                {
                    addUser, setSignIn
                },
                dispatch
            ),
        [dispatch]
    );
    return actions;
}

export const useUser = () =>
    useSelector(selectUser);

export const useIsAuth = () =>
    useSelector(selectIsAuth);