import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Offer = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://project-vinted-api-backend.herokuapp.com/offer/${id}`,
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <Header />
            {isLoading ? (
                <span>Chargement</span>
            ) : (
                <div className="wrapper">
                    <div className="product-content">
                        <div className="left-product-col">
                            <img src={data.product_image.secure_url} alt={data.id} />
                        </div>

                        <div className="right-product-col">
                            <div className="head-product">
                                <div className="left-head">
                                    <h2>{data.product_name}</h2>
                                    <p>{data.product_details[3].COULEUR}</p>
                                </div>

                                <h2>{data.product_price.toFixed(2)} €</h2>
                            </div>

                            <div className="description-product">
                                <h4>Description</h4>
                                <p>{data.product_description}</p>
                            </div>

                            <button>{data.product_details[1].TAILLE}</button>

                            <div className="basket-product">
                                <div className="buttons">
                                    <button
                                        onClick={() => {
                                            value > 1 && setValue(value - 1);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{value}</span>
                                    <button
                                        onClick={() => {
                                            setValue(value + 1);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <button>Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Offer;
