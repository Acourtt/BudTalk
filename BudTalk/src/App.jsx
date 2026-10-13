import { useState } from "react";
import  './App.css';
import CategoryFilter from "./Components/CategoryFilter";


function App() {
  const [ category, setCategory ] = useState("all");


  return (
    <main>
      <header>
        <h1>BudTalk</h1>
        <p>Discover • Share • Experience</p>
      </header>

      <CategoryFilter
        category={ category }
        setCategory={ setCategory }
      />
    </main>
  )
}

export default App;
