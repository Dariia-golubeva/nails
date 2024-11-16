import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: []},
    reducers: {
        addToCart(state, {payload}) {
            const existingItem = state.items.find(item => item.title === payload.title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...payload, quantity: 1});
            }
        },
        removeFromCart: (state, {payload}) => {
            return {
                ...state,
                items: state.items.filter(item => item.title !== payload),
            };
        },
        updateQuantity: (state, {payload}) => {
            return {
                ...state,
                items: state.items.map(item => {
                    if (payload.quantity < 1) {
                        return item;
                    }

                    if (item.title === payload.title) {
                        return {
                            ...item,
                            quantity: payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
