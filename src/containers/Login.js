import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let logUser = new FormData();
    logUser = {
        email: email,
        password: password,
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: 'https://project-vinted-api-backend.herokuapp.com/user/login',
            data: logUser,
        })
            .then((response) => {
                const token = response.data.token;
                setUser(token);
                history.push('/offer/publish');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="login">
            <h1>Connectez vous à votre compte</h1>
            <form action="POST" onSubmit={onHandleSubmit}>
                <input
                    type="email"
                    placeholder="Votre email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <input type="submit" value="Connexion" />
                <div>
                    <Link to="/signup">Pas de compte ? Créez-en-un</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
