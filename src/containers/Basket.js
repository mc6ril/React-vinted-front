import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Basket = ({ basket, total, setTotal }) => {
    const [shopValue, setShopValue] = useState(1);
    const delivery = 5;
    const history = useHistory();

    // Calcul du prix total
    let value = [...basket];
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += Number(value[i].price);
    }

    return (
        // <div className="wrapper">
        <div className="basket wrapper">
            <h1>Panier</h1>
            <div className="shopping">
                <div className="right-col">
                    <div className="payment-info">
                        <div className="top-payment">
                            <p>
                                <span>
                                    {basket.length > 1
                                        ? `${basket.length} articles`
                                        : `${basket.length} article`}
                                </span>
                                <span>{result} €</span>
                            </p>
                            <p>
                                Livraison <span>{delivery} €</span>
                            </p>
                            <p>Vous avez un code promo ?</p>
                        </div>
                        <div className="bottom-payment">
                            <p>
                                <span>Total TTC</span> <span>{result + delivery} €</span>
                            </p>
                            <button
                                onClick={() => {
                                    setTotal(result + delivery);
                                    history.push('/payment');
                                }}
                            >
                                COMMANDER
                            </button>
                        </div>
                    </div>
                </div>

                <div className="left-col">
                    {basket.map((list) => {
                        return (
                            <div className="product" key={list.title}>
                                <div className="left">
                                    <img src={list.picture} alt={list.picture} />
                                </div>
                                <div className="right">
                                    <div>
                                        <h4>{list.title}</h4>
                                        <p>Taille: {list.size}</p>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            onClick={() => {
                                                shopValue > 1 &&
                                                    setShopValue(shopValue - 1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <span>
                                            {shopValue === 1
                                                ? list.product_number
                                                : shopValue}
                                        </span>
                                        <button
                                            onClick={() => {
                                                setShopValue(shopValue + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>{list.price}€</p>
                                </div>
                            </div>
                        );
                    })}
                    {basket.length > 0 && (
                        <Link to="/offers"> &larr; Continuer mes achats</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Basket;
