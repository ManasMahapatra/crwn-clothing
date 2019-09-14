import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        {/* Reduce method is a very useful array method. It helps carrying out multiple operations and get a condensed value at the end */}
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})
// Selectors are this kind of calls which uses a very minimal part of the state, to get the desired parameter. However they get called every single time state is set or unset, even if it doesnt belong to that exact member resulting in low perfeormance

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);