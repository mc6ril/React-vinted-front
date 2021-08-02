import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navigation = ({ userToken, setUser, setMenu, menu }) => {
    return (
        <nav className="wrapper">
            <div className="visible-menu">
                <ul>
                    <Link to="/" className="logo">
                        <li>M.MOUSTACHE</li>
                    </Link>
                    <div className="menu">
                        <Link to="/offers">
                            <li>Souliers</li>
                        </Link>
                        <Link to="/offers">
                            <li>Baskets</li>
                        </Link>
                        <Link to="/offers">
                            <li>Chaussettes</li>
                        </Link>
                        <Link to="/brand">
                            <li>La marque</li>
                        </Link>
                        <Link to="/stores">
                            <li>Boutiques</li>
                        </Link>
                    </div>
                    <div className="buttons">
                        {userToken ? (
                            <div>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        setUser(null);
                                    }}
                                >
                                    <li>Déconnexion</li>
                                </Link>
                                <Link to="/offer/publish">
                                    <li>Vente</li>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link to="/login">
                                    <FontAwesomeIcon icon="user" />
                                </Link>
                            </div>
                        )}
                        <Link to="/basket">
                            <li className="basket">
                                Panier <span className="basket-value">0</span>
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>

            <div className="hidden-menu">
                <ul>
                    <div className="burger" onClick={() => setMenu(!menu)}>
                        <span></span>
                    </div>
                    <Link to="/" className="logo">
                        <li>M.MOUSTACHE</li>
                    </Link>

                    <div className="buttons">
                        {userToken ? (
                            <div>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        setUser(null);
                                    }}
                                >
                                    <li>Déconnexion</li>
                                </Link>
                                <Link to="/offer/publish">
                                    <li>Vente</li>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link to="/login">
                                    <FontAwesomeIcon icon="user" />
                                </Link>
                            </div>
                        )}
                        <Link to="/basket">
                            <li className="basket">
                                Panier <span className="basket-value">0</span>
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
