import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navigation = ({ userToken, setUser }) => {
    return (
        <nav className="wrapper">
            <div className="visible-menu">
                <ul>
                    <Link to="/" className="logo">
                        <li>Mr MOUSTACHE</li>
                    </Link>

                    <div className="buttons">
                        {userToken ? (
                            <Link
                                to="/"
                                onClick={() => {
                                    setUser(null);
                                }}
                            >
                                <li>Se déconnecter</li>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <li>S'inscrire / Se connecter</li>
                            </Link>
                        )}

                        <Link to="/offers">
                            <li>Baskets</li>
                        </Link>
                    </div>
                </ul>
            </div>

            <div className="hidden-menu">
                <ul>
                    <div className="burger">
                        <span></span>
                    </div>
                    <Link to="/" className="logo">
                        <li>Mr MOUSTACHE</li>
                    </Link>
                    <div className="icone">
                        <FontAwesomeIcon icon="search" />
                        <Link to="/login">
                            <FontAwesomeIcon icon="user" />
                        </Link>
                        <Link to="/offers">
                            <FontAwesomeIcon icon="shopping-basket" />
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
