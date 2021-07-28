import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [id, setId] = useState();
    // const [id] = useParams();

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

    console.log(id);

    return (
        <div>
            <Header />
            {isLoading ? (
                <span>Chargement</span>
            ) : (
                <section className="wrapper">
                    <div className="offers">
                        {data.offers.map((offer) => {
                            return (
                                <div
                                    className="offer"
                                    key={offer._id}
                                    onClick={() => {
                                        setId(offer._id);
                                    }}
                                >
                                    <Link to={`/offer/:${id}`}>
                                        <img
                                            src={offer.product_image.secure_url}
                                            alt={offer.id}
                                        />
                                        <p>{offer.product_name}</p>
                                        <p>{offer.product_price} €</p>
                                        <p>
                                            <span>{offer.product_detail}</span>
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;
