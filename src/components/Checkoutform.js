import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react';

const CheckoutForm = ({ total, userToken, basket }) => {
    const [isPaid, setIsPaid] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // On récupère ici les données bancaires que l'utilisateur rentre
            const cardElement = elements.getElement(CardElement);
            const stripeResponse = await stripe.createToken(cardElement, {
                name: userToken,
            });

            // console.log(stripeResponse);

            const response = await axios.post(
                'https://project-vinted-api-backend.herokuapp.com/payment',
                {
                    amount: total,
                    title: basket[0].title,
                    token: stripeResponse.token.id,
                },
            );

            if (response.data) {
                setIsPaid(true);
            } else {
                alert('Une erreur est survenue, veuillez réssayer.');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return isPaid ? (
        <p>Merci pour votre achat.</p>
    ) : (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Paiement
            </button>
        </form>
    );
};

export default CheckoutForm;
