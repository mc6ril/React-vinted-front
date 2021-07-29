import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './containers/Home';
import Offer from './containers/Offer';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
