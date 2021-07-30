import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import boutique from '../assets/images/boutique.jpg';
import Loader from '../components/Loader';

const Offers = () => {
    const [data, setData] = useState([]);
    const [searchBar, setSearchBar] = useState('');
    const [sortedPrice, setSortedPrice] = useState('price-desc');
    const [priceMin, setPriceMin] = useState(1);
    const [priceMax, setPriceMax] = useState(500);
    const [filter, setFilter] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://project-vinted-api-backend.herokuapp.com/offers?sort=${sortedPrice}&title=${searchBar}&priceMin=${priceMin}&priceMax=${priceMax}`,
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [searchBar, sortedPrice, priceMin, priceMax]);

    return (
        <div>
            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <section className="wrapper">
                    <div className="image">
                        <img src={boutique} alt={boutique} />
                    </div>

                    {/* Tri  */}
                    <div className="filter">
                        {!filter && (
                            <input
                                type="button"
                                onClick={() => {
                                    setFilter(!filter);
                                }}
                                value="Filtres"
                                className="filter-button"
                            />
                        )}

                        {filter && (
                            <form className="offers-form">
                                {/* Tri par prix titre */}
                                <input
                                    type="search"
                                    placeholder="Rechercher"
                                    onChange={(e) => setSearchBar(e.target.value)}
                                />
                                {/* Tri par prix croissant / décroissant */}
                                <div className="inputs">
                                    <label htmlFor="price">Trix par prix croissant</label>
                                    <input
                                        type="checkbox"
                                        name="price"
                                        onChange={() => {
                                            sortedPrice === 'price-desc'
                                                ? setSortedPrice('price-asc')
                                                : setSortedPrice('price-desc');
                                        }}
                                    />
                                </div>

                                {/* Tri par prix min / max */}
                                <div className="inputs">
                                    <label htmlFor="price-min">De</label>
                                    <input
                                        type="text"
                                        name="price-min"
                                        onChange={(e) => {
                                            setPriceMin(Number(e.target.value));
                                        }}
                                    />
                                </div>
                                <div className="inputs">
                                    <label htmlFor="price-max">A</label>
                                    <input
                                        type="text"
                                        name="price-max"
                                        onChange={(e) => {
                                            setPriceMax(Number(e.target.value));
                                        }}
                                    />
                                </div>
                                <input
                                    type="reset"
                                    onClick={() => {
                                        setFilter(!filter);
                                    }}
                                />
                            </form>
                        )}
                    </div>
                    <div className="offers">
                        {data.offers &&
                            data.offers.map((offer) => {
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

export default Offers;
