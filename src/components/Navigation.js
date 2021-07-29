import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Link to="/" className="logo">
                    <li>Mr MOUSTACHE</li>
                </Link>

                <div className="buttons">
                    <Link to="/login">
                        <li>S'inscrire / Se connecter</li>
                    </Link>
                    <Link to="/offer/:id">
                        <li>Vends tes articles</li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
