import { createSelector } from 'reselect';

// Selectors, is a concept, used for optimizing the code. When state is updated, React rerenders everything once a part of the state is changed
// even if the component is not refeering to that part of the state. Thats how it should work, but it affects the performance badly as in real world,
// redux handles a massive state corresponsind to various different components, and updating state from one component
// results in rerendering of every component. Thats why we use reselect to use memorization. If a part is not changed since last time,
// It wont rerender.

// Memorize the major part of state that we deal with --> cart
const selectCart = state => state.cart

//select the cartItems
export const selectCartItems = createSelector([selectCart],(cart) => cart.cartItems);

//select the ItemCount
export const selectCartItemsCount = createSelector([selectCartItems],(cartItems) => cartItems.reduce((accumulator,cartItem) => accumulator + cartItem.quantity , 0))
