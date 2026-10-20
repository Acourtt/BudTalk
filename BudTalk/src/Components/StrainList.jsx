
const strains = [
    {
        id: 1,
        name: "Blue Dream",
        category: "sativa",
        description: "Una variedad conocida por su perfil aromático."
    },
    {
        id: 2, 
        name: "Northern Lights",
        category: "indica",
        description: "Una variedad clásica con un perfil distintivo."
    },
    {
        id: 3,
        name: "Pipeapple Express",
        category: "hybrid",
        description: "Una variedad con un nombre inspidado en notas tropicales."
    }
];


function StrainList ({ categoryActive }) {
    const strainsFiltrados = strains.filter(( item ) => {
        if (categoryActive === "all") {
            return true;
        }
        return item.category === categoryActive;
    });

    return (
        <section>
            <h2>Discover Strains</h2>
            <div className="strain-grid">
                {strainsFiltrados.map((item) => {
                    return (
                        <div key={item.id} className="strain-card">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span>{item.category}</span>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}


export default StrainList;