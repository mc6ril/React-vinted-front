import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Brand from './containers/Brand';
import Homepage from './containers/Hompage';
import Login from './containers/Login';
import Offer from './containers/Offer';
import Offers from './containers/Offers';
import Publish from './containers/Publish';
import Signup from './containers/Signup';
import Stores from './containers/Stores';

library.add(faUser, faSearch, faShoppingBasket);

function App() {
    const [userToken, setUserToken] = useState(Cookies.get('userToken' || null));
    const [menu, setMenu] = useState(false);

    const setUser = (token) => {
        if (token) {
            Cookies.set('userToken', token, {
                expires: 3,
                sameSite: 'none',
                secure: true, //htpps
            });
            setUserToken(token);
        } else {
            Cookies.remove('userToken');
            setUserToken(null);
        }
    };

    return (
        <Router>
            <Header
                userToken={userToken}
                setUser={setUser}
                setMenu={setMenu}
                menu={menu}
            />
            {menu ? (
                <nav className="slider-menu">
                    <Link to="/offers" onClick={() => setMenu(!menu)}>
                        <li>Souliers</li>
                    </Link>
                    <Link to="/offers" onClick={() => setMenu(!menu)}>
                        <li>Baskets</li>
                    </Link>
                    <Link to="/offers" onClick={() => setMenu(!menu)}>
                        <li>Chaussettes</li>
                    </Link>
                    <Link to="/brand" onClick={() => setMenu(!menu)}>
                        <li>La marque</li>
                    </Link>
                    <Link to="/stores" onClick={() => setMenu(!menu)}>
                        <li>Boutiques</li>
                    </Link>
                    <div>
                        <Link to="/offers" onClick={() => setMenu(!menu)}>
                            <li>Nous contacter</li>
                        </Link>
                    </div>
                    <div>
                        <Link to="/offers" onClick={() => setMenu(!menu)}>
                            <li>FAQ</li>
                        </Link>
                    </div>
                </nav>
            ) : (
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/offers">
                        <Offers />
                    </Route>
                    <Route exact path="/offer/publish">
                        <Publish userToken={userToken} />
                    </Route>
                    <Route exact path="/offer/:id">
                        <Offer />
                    </Route>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <Route path="/signup">
                        <Signup setUser={setUser} />
                    </Route>
                    <Route path="/stores">
                        <Stores />
                    </Route>
                    <Route path="/brand">
                        <Brand />
                    </Route>
                </Switch>
            )}
            <Footer />
        </Router>
    );
}

export default App;
