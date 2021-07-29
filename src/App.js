import Cookies from 'js-cookie';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import Offer from './containers/Offer';
import Signup from './containers/Signup';

function App() {
    const [userToken, setUserToken] = useState(Cookies.get('userToken' || null));

    const setUser = (token) => {
        Cookies.set(userToken, token);
        setUserToken(token);
    };

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
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
