import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const Stores = () => {
    const [stores, setStores] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'https://project-vinted-api-backend.herokuapp.com/stores',
            );
            setStores(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <div className="wrapper">
            <h2 className="title-section">Nos échoppes</h2>
            <div className="stores">
                {stores.map((store) => {
                    return (
                        <div className="store" key={store._id}>
                            <div className="image">
                                <img
                                    src={store.store_image.secure_url}
                                    alt={store.store_image.secure_url}
                                />
                            </div>
                            <div className="description">
                                <h4>{store.store_name}</h4>
                                <p>
                                    <span>{store.store_adress}</span>
                                    <span>{store.store_sp}</span>
                                    <span>{store.store_city}</span>
                                </p>
                                <p>{store.store_opening}</p>
                                <p>{store.store_phone}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stores;
