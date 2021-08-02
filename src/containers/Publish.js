import axios from 'axios';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useHistory } from 'react-router';

const Publish = ({ userToken }) => {
    const [files, setFiles] = useState({});
    const [preview, setPreview] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState(0);
    const [condition, setCondition] = useState('');
    const [color, setColor] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState(0);
    const history = useHistory();

    console.log('le file est : ', files);

    // Creation d'un nouveau produit
    let newProduct = new FormData();

    newProduct.append('title', name);
    newProduct.append('description', description);
    newProduct.append('price', price);
    newProduct.append('brand', brand);
    newProduct.append('size', size);
    newProduct.append('condition', condition);
    newProduct.append('color', color);
    newProduct.append('city', city);
    newProduct.append('picture', files);

    // A la soumission du formulaire, enregistrer le produit dans notre serveur

    const onHandleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(
                'https://project-vinted-api-backend.herokuapp.com/offer/publish',
                newProduct,
                {
                    headers: {
                        authorization: `Bearer ${userToken}`,
                    },
                },
            );
            if (response.data._id) {
                // redirectoin vers l'offre
                history.push(`/offer/${response.data._id}`);
            } else {
                alert('Une erreur est survenue, veuillez réssayer');
            }
        } catch (error) {
            console.log(error.message);
            console.log(error.response);
        }
    };
    // Formulaire de création de nouveau produit
    return (
        <section>
            <form action="POST" onSubmit={onHandleSubmit} className="publish">
                <h1>Nouveau produit à ajouter à la collection </h1>

                <Dropzone
                    previewsContainer="#preview"
                    onDrop={(acceptedFiles) => {
                        setFiles(acceptedFiles[0]);
                        setPreview(URL.createObjectURL(acceptedFiles[0]));
                    }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <section className="custom-file-upload">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Ajouter vos fichiers ici</p>
                            </div>
                            {preview && <img src={preview} alt="drop-file" />}
                        </section>
                    )}
                </Dropzone>

                <input
                    type="text"
                    placeholder="Nom du produit"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description du produit"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Marque du produit"
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    type="Number"
                    placeholder="Taille du produit"
                    onChange={(e) => setSize(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Etat du produit"
                    onChange={(e) => setCondition(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Couleur du produit"
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Emplacement du produit"
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="Number"
                    placeholder="Prix du produit"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input type="submit" value="Ajouter" />
            </form>
            {}
        </section>
    );
};

export default Publish;
