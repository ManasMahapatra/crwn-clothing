import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems,history,toggleCartHidden }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            if (cartItems.length){
                history.push('/checkout');
            } else {
                return '';
            }
            toggleCartHidden();
            }}>{cartItems.length ? 'GO TO CHECKOUT' : 'PLEASE ADD ITEMS'}</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//Order matters
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));