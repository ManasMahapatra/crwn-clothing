import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    let priceForStripe = price * 100;
    let publishableKey = "pk_test_oaQNKX6D6UyXgXyzgWWlHa7W00CXK7C8K5";
    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }
    return (
        <StripeCheckout 
            label = 'Checkout'
            name = "Crwn Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total bill is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay '
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;