import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 188;
    const publishableKey = 'pk_test_51IdiXxJLGHBS2OZwGbuuVwoLy1OXg6P0P8acPjDp7aCEGpjJTbn7Xi6h5wMltqc0nlgVzVWGw5DsjyKJsAqbl0vf00yNalPIrP'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful!')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;