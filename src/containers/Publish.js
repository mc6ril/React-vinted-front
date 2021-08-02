const Publish = () => {
    return (
        <section>
            <h1>Nouveau produit à ajouter à la collection</h1>
            <form action="POST" onSubmit={onHandleSubmit}>
                <input type="file" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="Number" />
                <input type="submit" value="Ajouter" />
            </form>
        </section>
    );
};

export default Publish;
