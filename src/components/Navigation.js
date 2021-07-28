import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={Logo} alt="logo-website" />
                    </Link>
                </li>

                <div className="buttons">
                    <li>
                        <Link to="/">S'inscrire / Se connecter</Link>
                    </li>
                    <li>
                        <Link to="/offer/:id">Vends tes articles</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
