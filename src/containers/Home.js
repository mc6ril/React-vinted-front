import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://project-vinted-api-backend.herokuapp.com/offers',
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <section className="wrapper">
                    <div className="offers">
                        {data.offers.map((offer) => {
                            return (
                                <Link to={`/offer/${offer._id}`} key={offer._id}>
                                    <div className="offer">
                                        <img
                                            src={offer.product_image.secure_url}
                                            alt={offer.id}
                                        />
                                        <p>{offer.product_name}</p>
                                        <p>{offer.product_price} €</p>
                                        <p>
                                            <span>{offer.product_detail}</span>
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;
