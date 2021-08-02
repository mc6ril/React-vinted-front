import axios from 'axios';
import { useState } from 'react';

const Publish = ({ userToken }) => {
    const [files, setFiles] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState(0);
    const [condition, setCondition] = useState('');
    const [color, setColor] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState(0);
    const [data, setData] = useState();

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
            setData(response.data.result);
        } catch (error) {
            console.log(error.message);
            console.log(error.response);
        }
    };
    return (
        <section>
            <form action="POST" onSubmit={onHandleSubmit} className="publish">
                <h1>Nouveau produit à ajouter à la collection</h1>
                <label className="custom-file-upload">
                    <input
                        type="file"
                        id="new-file"
                        onChange={(e) => setFiles(e.target.files[0])}
                        multiple
                        accept=".jpg, .jpeg, .png"
                    />
                    <label htmlFor="new-file">{files ? '-' : '+'}</label>
                </label>

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
            {data && <img src={data.secure_url} alt="" />}
        </section>
    );
};

export default Publish;
