import { Link } from 'react-router-dom';
import baskets from '../assets/images/baskets.jpeg';
import bgImage from '../assets/images/bg-image.jpg';
import chaussette from '../assets/images/chaussette.jpeg';
import chaussure from '../assets/images/chaussure.jpeg';

const Homepage = () => {
    return (
        <div>
            <div className="bg-image">
                <img src={bgImage} alt={bgImage} />
            </div>
            <div className="box-image">
                <Link to="/offers">
                    <img src={chaussure} alt={chaussure} />
                </Link>
                <Link to="/offers">
                    <img src={chaussette} alt={chaussette} />
                </Link>
                <Link to="/offers">
                    <img src={baskets} alt={baskets} />
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
