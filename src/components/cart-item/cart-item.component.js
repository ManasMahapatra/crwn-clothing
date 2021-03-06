import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item:{ imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={name}/>
        <div className='item-detail'>
            <span className='name'>{name}</span>
            <br/>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;