import CartActionTypes from './cart.types';

export const hideDropdown = () => ({
    type: CartActionTypes.HIDE_DROPDOWN
})
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})