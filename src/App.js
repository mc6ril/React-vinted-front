import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './containers/Hompage';
import Login from './containers/Login';
import Offer from './containers/Offer';
import Offers from './containers/Offers';
import Signup from './containers/Signup';

library.add(faUser, faSearch, faShoppingBasket);

function App() {
    const [userToken, setUserToken] = useState(Cookies.get('userToken' || null));

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
            <Header userToken={userToken} setUser={setUser} />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/offers">
                    <Offers />
                </Route>
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
