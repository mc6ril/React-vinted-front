import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={Logo} alt="logo-website" />
                    <Link to="/"></Link>
                </li>

                <div className="buttons">
                    <li>
                        <Link to="/">S'inscrire / Se connecter</Link>
                    </li>
                    <li>
                        <Link to="/offer">Vends tes articles</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
