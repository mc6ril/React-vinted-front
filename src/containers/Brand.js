import banner from '../assets/images/banner.jpg';
import keepgoing from '../assets/images/ca-continue.jpg';
import happyfeet from '../assets/images/happy-feet.jpg';
import savoir from '../assets/images/savoir-faire.jpg';

const Brand = () => {
    return (
        <section className="brand">
            <div className="pink-background">
                <div className="wrapper">
                    <div className="center-div">
                        <h1>Enjoy.</h1>
                        <div>
                            <p>
                                Nous, tout ce que l’on veut, c’est que vous profitiez de
                                nos chaussures. Comme d’une gorgée bien fraiche de soda au
                                cola. Que vous puissiez juste kiffer. Consommer sans
                                arrière pensée et sans culpabilité.
                            </p>
                            <p>
                                Sauf que dans le contexte actuel, c’est pas forcément
                                évident. La mode est, à juste titre, pointée du doigt pour
                                son impact sur l’environnement. Mais puisque l’on fait
                                parti du problème, on veut surtout proposer des solutions
                                ! C’est même devenu une obsession. Comment rendre la mode
                                positive ? Pour vous et pour l’environnement. Pour que
                                consommer redevienne un plaisir !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grey-background">
                <img src={banner} alt={banner} />
            </div>
            <div className="two-boxes">
                <div className="first-box">
                    <h1>
                        Don't <br /> worry,
                    </h1>
                    <p>
                        Parce que l’on se pose toutes les questions sur l’impact de notre
                        activité sur l’environnement et sur les gens.
                    </p>
                </div>
                <div className="second-box">
                    <h1>
                        be <br /> happy !
                    </h1>
                    <p>
                        Parce que tous les matins, notre unique objectif est de vous
                        donner le sourire. Grâce à des collections audacieuses que vous
                        pouvez acheter en toute tranquillité ! Facile non ?
                    </p>
                </div>
            </div>
            <div className="brand-box">
                <div className="image">
                    <img src={happyfeet} alt={happyfeet} />
                </div>
                <div className="description">
                    <h5>HAPPY FEET</h5>
                    <p>
                        L’idée c’est que vous ayez le sourire tous les matins en enfilant
                        vos chaussures. Qu’elles vous remontent le moral à chaque pas !
                        Pour faire ça, notre secret, c’est de varier à l’envie les
                        couleurs et les matières. Pour vous surprendre avec des produits
                        inattendus ou revisiter les plus grands classiques !
                    </p>
                </div>
            </div>
            <div className="brand-box">
                <div className="description">
                    <h5>UNE QUALITÉ AU POIL.</h5>
                    <p>
                        C’est un peu la base vous nous direz. Mais ça a sans doute été un
                        peu oublié par le passé. Dans ce domaine, pas de secret, il faut
                        travailler avec les meilleurs. Si 90% de notre collection est
                        faite au Portugal, ce n’est pas juste parce que l’on aime le surf
                        et le soleil ! C’est surtout parce qu’en terme de savoir faire, ce
                        sont de vraies pointures ! Toutes nos chaussures de ville et nos
                        baskets dites “cupsole” (des baskets où la semelle en gomme est
                        cousue à la tige) sont fabriquées dans la région de Porto.
                        Techniquement, ils maîtrisent ça parfaitement. Pour nos runnings,
                        on a fait le choix de travailler avec la Chine. On a passé du
                        temps sur place, avec notre agent et dans les usines. Et on a
                        rencontré des gens qui maîtrisent parfaitement l'art de la
                        sneaker. Un produit qui doit être aussi souple et confortable que
                        résistant.
                    </p>
                </div>
                <div className="image">
                    <img src={savoir} alt={savoir} />
                </div>
            </div>
            <div className="brand-box">
                <div className="image">
                    <img src={keepgoing} alt={keepgoing} />
                </div>
                <div className="description">
                    <h5>ET ÇA CONTINUE ENCO[RE] ET ENCO[RE].</h5>
                    <p>
                        On vous l’a dit. Tout ce que l’on veut, c’est que vous puissiez
                        acheter n’importe lequel de nos modèles l’esprit tranquille. En
                        sachant que l’on a bien fait notre boulot. C’est pour cela que
                        l’on a placé le recyclage au coeur de notre stratégie en lançant
                        Enco[re] en mars 2019. Un programme de recyclage qui à pour
                        objectif de recycler toutes vos paires usagées, quelque soit leur
                        marque. Mais on veut aller encore plus loin ! Avec un seul mot
                        d’ordre : faire les choses bien, pour créer des produits qui font
                        du bien ! C’est un travail de longue haleine et comme Rome, ça ne
                        va pas se faire un jour. Mais on a une très grosse annonce à vous
                        faire à ce sujet en septembre. Alors stay tuned !
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Brand;
