
const strains = [
    {
        id: 1,
        name: "Blue Dream",
        category: "hybrid",
        description: "Una variedad conocida por su perfil aromático.",
        image: "/images/blue-dream.jpg"
    },
    {
        id: 2, 
        name: "Northern Lights",
        category: "indica",
        description: "Una variedad clásica con un perfil distintivo.",
        image: "/images/northern-lights.jpg"
    },
    {
        id: 3,
        name: "Pineapple Express",
        category: "hybrid",
        description: "Una variedad con un nombre inspidado en notas tropicales.",
        image: "/images/pineapple-express.jpg"
    },
    {
        id: 4, 
        name: "Gorilla Glue #4",
        category: "hybrid",
        description: "Reconocida por sus flores resinosas y un perfil aromatico intenso, con matices terrosos y a pino.",
        image: "/images/gorilla-glue-4.jpg"
    },
    {
        id: 5,
        name: "OG Kush",
        category: "hybrid",
        description: "Una variedad emblematicacon con un aroma intenso que combina notas terrosas, citricas y especiadas.",
        image: "/images/og-kush.jpg"
    },
    {
        id: 6,
        name: "White Widow",
        category: "hybrid",
        description: "Conocida por sus florees cubiertas de tricomas y su perfil aromatico fresco, herbal y terroso.",
        image: "/images/white-widow.jpg"
    },
    {
        id: 7,
        name: "Purple Haze",
        category: "sativa",
        description: "Una variedad famosa por su asociacion con tonos púrpuras y un aroma que mezcla notas dulces, especiadas y terrosas.",
        image: "/images/purple-haze.jpg"
    },
    {
        id: 8,
        name: "Gelato",
        category: "hybrid",
        description: "Destaca por sus aromas dulces y cremosos, acompañados de notas frutales y citricas.",
        image: "/images/gelato.jpg"
    },
    {
        id: 9,
        name: "Critical Mass",
        category: "indica",
        description: "Conocida por sus flores voluminosas y un perfil aromático dulce, terroso y ligeramente afrutado.",
        image: "/images/critical-mass.jpg"
    },
    {
        id: 10,
        name: "Amnesia Haze",
        category: "sativa",
        description: "Una variedad reconocida por sus notas citricas, especiales y herbales, con un aroma penetrante.", 
        image: "/images/amnesia-haze.jpg"
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
                            < img src={item.image} alt={item.name}/>
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