import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
        }
        <div className="total"><span>TOTAL: ${total}</span></div>
        <StripeCheckoutButton price={total}/>
    </div>
    
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)

})

export default connect(mapStateToProps)(CheckoutPage);