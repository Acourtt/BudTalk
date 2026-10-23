import { useState } from "react";
import  './App.css';
import CategoryFilter from "./Components/CategoryFilter";
import StrainList from "./Components/StrainList";

function App() {
  const [ category, setCategory ] = useState("all");


  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-images">
          <img
            src="/images/hero-leaves.jpg"
            alt="Detalle botático"
            className="hero-image hero-image-left"
          />

          <img
            src="/images/hero-bud.jpg"
            alt="Primer plano de una flor de cannabis"
            className="hero-image hero-image-right"
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">WELCOME TO BUDTALK</p>

          <h1>
            Discover.
            <br/>
            Share.
            <br/>
            Experience.
          </h1>

          <p className="hero-description">
            Explore varieties, exchange experiences 
            and discover a community built around cannabis.
          </p>

          <a className="hero-link" href="#explorar">
            Explore BudTalk <span>→</span>
          </a>
        </div>
      </section>

      <CategoryFilter
        category={ category }
        setCategory={ setCategory }
      />

      <StrainList categoryActive={ category } />
    </main>
  )
}

export default App;
