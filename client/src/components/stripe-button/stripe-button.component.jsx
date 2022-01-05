import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9RP0F8bLauxZvjQIJO3uO2MzKrPlsr4Gx0eg8znykfCA2094AYIAY2icsukJfiH5Kgmm6vlARDC7xOAT4N7mHY00nb6lgSxK';

const onToken = token =>{
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error =>{
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please sure you provided credit cart.');
        });
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey= {publishableKey} />
    )
}
export default StripeCheckoutButton;