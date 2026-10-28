import { useState } from "react";
import "./App.css";
import CategoryFilter from "./Components/CategoryFilter";
import StrainList from "./Components/StrainList";
import CommunityFeed from "./Components/CommunityFeed";

function App() {
  const [category, setCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="inicio">
        <header className="site-header">
          <a href="#inicio" className="site-logo">
            BudTalk
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "CLOSE ×" : "MENU ☰"}
          </button>
        </header>

        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          >
            <nav
              className="side-menu"
              aria-label="Navegación principal"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="menu-eyebrow">EXPLORE BUDTALK</p>

              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>

              <a
                href="#explorar"
                onClick={() => setIsMenuOpen(false)}
              >
                Explorar variedades
              </a>
            </nav>
          </div>
        )}

        <div className="hero-leaf">
          <img
            src="/images/hero-leaves.jpg"
            alt="Detalle botánico"
            className="hero-image hero-image-left"
          />
        </div>

        <div className="hero-right">
          <div className="hero-content">
            <p className="hero-eyebrow">WELCOME TO BUDTALK</p>

            <h1>
              Discover.
              <br />
              Share.
              <br />
              Experience.
            </h1>

            <p className="hero-description">
              Explore varieties, exchange experiences and discover
              a community built around cannabis.
            </p>

            <a className="hero-link" href="#explorar">
              Explore BudTalk <span>→</span>
            </a>
          </div>

          <img
            src="/images/hero-bud.jpg"
            alt="Primer plano de una flor de cannabis"
            className="hero-image hero-image-right"
          />
        </div>
      </section>

      <div id="explorar">
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <StrainList categoryActive={category} />
      </div>
      
      <CommunityFeed />
    </main>
  );
}

export default App;
