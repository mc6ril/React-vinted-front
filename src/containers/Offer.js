import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Offer = async () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://project-vinted-api-backend.herokuapp.com/offers',
                );
                // console.log(response.data);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            <Header />
            Offer Page
            {isLoading ? <span>Chargement</span> : <span>contenu chargé</span>}
        </div>
    );
};

export default Offer;
