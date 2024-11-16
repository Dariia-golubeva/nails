import {useMemo} from "react";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { addToCart, removeFromCart, updateQuantity } from './cartSlice';
import { selectItems } from './selectors';

export const useCartActions = () => {
    const dispatch = useDispatch();
    const actions = useMemo(
        () =>
            bindActionCreators(
                {
                    addToCart, removeFromCart, updateQuantity
                },
                dispatch
            ),
        [dispatch]
    );
    return actions;
};

export const useCartItems = () =>
    useSelector(selectItems);
