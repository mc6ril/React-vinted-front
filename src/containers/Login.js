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
                history.push('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const onEmailChange = (e) => {
        let checkEmail = e.target.value;
        setEmail(checkEmail);
    };

    const onPasswordChange = (e) => {
        let checkPassword = e.target.value;
        setPassword(checkPassword);
    };

    return (
        <div className="login">
            <h1>Connectez vous à votre compte</h1>
            <form action="POST" onSubmit={onHandleSubmit}>
                <input type="email" placeholder="Votre email" onChange={onEmailChange} />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={onPasswordChange}
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
