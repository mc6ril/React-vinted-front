import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const Offer = ({ value, setValue, basket, setBasket }) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [productValue, setProductValue] = useState(1);
    const { id } = useParams();
    const history = useHistory();

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
            {isLoading ? (
                <Loader />
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
                                            productValue > 1 &&
                                                setProductValue(value - 1);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{productValue}</span>
                                    <button
                                        onClick={() => {
                                            setProductValue(productValue + 1);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        const newObj = [...basket];
                                        newObj.push({
                                            title: data.product_name,
                                            size: data.product_details[1].TAILLE,
                                            product_number: productValue,
                                            price: data.product_price.toFixed(2),
                                            id: data.id,
                                            picture: data.product_image.secure_url,
                                        });
                                        setValue(value + 1);
                                        setBasket(newObj);
                                    }}
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                            <div className="go-to-basket">
                                <button
                                    onClick={() => {
                                        history.push('/basket');
                                    }}
                                >
                                    Achetez maintenant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Offer;
