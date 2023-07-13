import {
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
    UPDATE_ORDER_QUANTITY,
} from './action-types';

export const addToOrder = (name, quantity, price) => ({
    type: ADD_TO_ORDER,
    payload: {
        name,
        quantity,
        price,
    },
});

export const removeFromOrder = (name) => ({
    type: REMOVE_FROM_ORDER,
    payload: {
        name,
    },
});

export const updateOrderQuantity = (name, quantity) => ({
    type: UPDATE_ORDER_QUANTITY,
    payload: {
        name,
        quantity,
    },
});
