import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Signup = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    let newUser = new FormData();
    newUser = {
        username: username,
        phone: phone,
        email: email,
        password: password,
        avatar: image,
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
                <input
                    type="file"
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                {/* <div className="checkbox">
                    <input type="checkbox" name="newsletter" />
                    <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="newsletter" />
                    <label htmlFor="newsletter">
                        En m'inscrivant, je confirme avoir lu et accepté les termes &
                        conditions et Politique de Confidentialité de Mr Moustache. Je
                        confirme avoir au moins 18 ans.
                    </label>
                </div> */}

                <input type="submit" value="Enregistrer" />
            </form>
        </div>
    );
};

export default Signup;
