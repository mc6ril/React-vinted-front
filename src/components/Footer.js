import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-conditions">
                    <div className="box">
                        <h2>RETOUR GRATUIT*</h2>
                        <p>Sous un délai de 30 jours</p>
                    </div>
                    <span className="square"></span>
                    <div className="box">
                        <h2>CONCEPTION FRANÇAISE</h2>
                        <p>Fabrication au Portugal et en Asie</p>
                    </div>
                    <span className="square"></span>
                    <div className="box">
                        <h2>SERVICE CLIENT</h2>
                        <p>+33 (0) 1 86 76 08 18</p>
                    </div>
                    <span className="square"></span>
                    <div className="box">
                        <h2>PAIEMENT SÉCURISÉ</h2>
                        <p>Mastercard, Visa, PayPal, x3</p>
                    </div>
                    <span className="square"></span>
                </div>
            </div>
            <div className="separate"></div>
            <div className="footer-links wrapper">
                <div className="box">
                    <img
                        src="https://www.m-moustache.com/themes/moustache/assets/img/logo-mobile.svg"
                        alt="logo-moustache"
                        width="57"
                    />
                    <p>
                        M. Moustache c'est une aventure audacieuse lancée en 2012, avec
                        pour ambition de bousculer le marché de la chaussure. Proposer une
                        alternative élégante, singulière, consciente de son impact et
                        proche des consommateurs, c’est ce qui nous permet d’offrir des
                        produits justes et originaux.
                    </p>
                </div>
                <div className="box">
                    <h2>A propos</h2>
                    <ul>
                        <Link to="/brand">
                            <li>La marque</li>
                        </Link>
                        <Link to="/stores">
                            <li>Boutiques</li>
                        </Link>
                        <Link to="/">
                            <li>Encor[e]</li>
                        </Link>
                        <Link to="/">
                            <li>[re]colte</li>
                        </Link>
                        <Link to="/">
                            <li>Le journal</li>
                        </Link>
                        <Link to="/">
                            <li>On recrute</li>
                        </Link>
                    </ul>
                </div>
                <div className="box">
                    <h2>Plus d'infos</h2>
                    <ul>
                        <Link to="/">
                            <li>Livraison & Retours</li>
                        </Link>
                        <Link to="/">
                            <li>Devenir partenaires ?</li>
                        </Link>
                        <Link to="/">
                            <li>FAQ</li>
                        </Link>
                        <Link to="/">
                            <li>Contactez-nous</li>
                        </Link>
                        <Link to="/">
                            <li>Carte cadeau</li>
                        </Link>
                        <Link to="/">
                            <li>Suivre ma commande</li>
                        </Link>
                    </ul>
                </div>
                <div className="box">
                    <h2>Newsletter</h2>
                    <form>
                        <input type="email" placeholder="Votre adresse e-mail" />
                        <input type="submit" value="ok" />
                    </form>
                    <div className="social-network">
                        <ul>
                            <li>
                                <i className="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i className="fab fa-instagram-square"></i>
                            </li>
                            <li>
                                <i className="fab fa-pinterest-p"></i>
                            </li>
                        </ul>
                    </div>
                    <p>
                        Service client via <strong>Whatsapp</strong>
                    </p>
                </div>
            </div>
            <div className="copyright">
                <p>
                    2021 - Made with React by
                    <a href="https://github.com/mc6ril"> © Cyril Lesot</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
