import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Offer = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
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
    }, []);

    console.log(id, data);

    return (
        <div>
            <Header />
            {isLoading ? <span>Chargement</span> : <span>Contenu de l'id = {id}</span>}
        </div>
    );
};

export default Offer;
