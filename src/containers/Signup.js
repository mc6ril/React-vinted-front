import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Signup = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    let newUser = new FormData();
    newUser = {
        username: username,
        phone: phone,
        email: email,
        password: password,
    };

    const onHandleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios({
                method: 'POST',
                url: 'https://project-vinted-api-backend.herokuapp.com/user/signup',
                data: newUser,
            });
            if (response.data.token) {
                setUser(response.data.token);
                history.push('/');
            } else {
                alert('Une erreur est survenue, veuillez réssayer.');
            }
        } catch (error) {
            if (error.response.status === 400) {
                setErrorMessage('Cet email a déjà un compte chez nous !');
            }
            console.log(error.message);
        }
    };

    return (
        <div className="signup">
            <h1>Créez votre compte</h1>
            <form action="POST" onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                {errorMessage && (
                    <span className="signup-error-message">{errorMessage}</span>
                )}

                <input
                    type="phone"
                    placeholder="Téléphone"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <div className="checkbox">
                    <input type="checkbox" name="newsletter" />
                    <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="newsletter" />
                    <label htmlFor="newsletter">
                        J'ai lu les
                        <span className="highlight">
                            {' '}
                            conditions générales de ventes{' '}
                        </span>
                        et j'y adhère sans réserve.
                    </label>
                </div>

                <input type="submit" value="Enregistrer" />
            </form>
        </div>
    );
};

export default Signup;
