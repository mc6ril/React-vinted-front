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
                name: 'Je suis un user',
            });

            console.log(stripeResponse);

            const response = await axios.post(
                'https://project-vinted-api-backend.herokuapp.com/payment',
                {
                    amount: total,
                    currency: 'eur',
                    title: basket[0].title,
                    stripeToken: stripeResponse.token.id,
                },
            );

            console.log('la réponse du serveur est ===>', response.data);
            if (response.data) {
                setIsPaid(true);
            } else {
                alert('Une erreur est survenue, veuillez réssayer.');
            }
        } catch (error) {
            console.log(error.message);
            console.log(error.reponse);
        }
    };

    return isPaid ? (
        <p>Merci pour votre achat.</p>
    ) : (
        <>
            <CardElement />
            <button type="submit" disabled={!stripe} onClick={handleSubmit}>
                Paiement
            </button>
        </>
    );
};

export default CheckoutForm;
