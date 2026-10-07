import { useState } from "react";
import  './App.css';


function App() {
  const [ category, setCategory ] = useState("all");


const categorias = [
  { id: 1, name: "all" },
  { id: 2, name: "sativa" },
  { id: 3, name: "indica" },
  { id: 4, name: "hybrid" }
]


  return (
    <main>
      <header>
        <h1>BudTalk</h1>
        <p>Discover • Share • Experience</p>
      </header>


      <section>
        <h2>Explore strains</h2>

        <div>
          {categorias.map((cat) => (
            <button key={cat.id}
              onClick={() => setCategory(cat.name)}
            >
              {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
            </button>
          ))}
        </div>

        <p>
          Categoria seleccionada: <strong>{ category }</strong>
        </p>
      </section>
    </main>
  )
}

export default App;
