import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/Checkoutform';

const Payment = ({ total, userToken, basket }) => {
    const stripePromise = loadStripe(
        'pk_test_51JKLhbKJZePPbgRummicHMCUGlaNB9qbBovsdYkmoKsaJ9lTAB8paeoRQ2okwbDTqPhJ2nmNAJOdcoagE3XGXwDi00n2pE7isv',
    );
    return (
        <section className="wrapper">
            <div className="payment-page">
                <div className="top-payment">
                    <h3>Résumé de la commande</h3>

                    <div className="command-resume">
                        <p>
                            <span>Commande</span> <span>{total - 5} €</span>{' '}
                        </p>
                        <p>
                            <span>Frais de port</span> <span>5 €</span>{' '}
                        </p>
                    </div>
                </div>
                <div className="payment">
                    <p>
                        <span>Total</span>
                        <span>{total} €</span>
                    </p>
                    <p>
                        Il ne vous reste plus qu'une étape pour vous offrir les{' '}
                        {basket[0].title}. Vous allez payer {total} € (frais de port
                        inclus)
                    </p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            userToken={userToken}
                            total={total}
                            basket={basket}
                        />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;
