import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Offer from './containers/Offer';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/offers">
                    <Offer />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
