import './App.css';

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <h2>Ristorante Luna Verde</h2>

        <div className="nav-links">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="accueil" className="hero">
        <div className="hero-content">
          <h1>Ristorante Luna Verde</h1>

          <p className="eyebrow">
            Cuisine italienne moderne
          </p>

          <p>
            Des plats faits maison, une ambiance chaleureuse et une expérience
            parfaite pour vos soirées à Montréal.
          </p>

          <a className="button" href="#contact">
            Réserver une table
          </a>
        </div>
      </section>

      <section id="apropos" className="section about">
        <div>
          <h2>À propos</h2>

          <p>
            Ristorante Luna Verde propose une cuisine italienne simple,
            fraîche et savoureuse. Notre objectif est d’offrir une expérience
            conviviale avec des ingrédients de qualité.
          </p>
        </div>
      </section>

      <section id="menu" className="section">
        <h2>Notre menu</h2>

        <div className="cards">
          <div className="card">
            <h3>Pizza Margherita</h3>
            <p>Tomates, mozzarella fraîche, basilic.</p>
            <strong>18 $</strong>
          </div>

          <div className="card">
            <h3>Pasta Alfredo</h3>
            <p>Sauce crémeuse, parmesan, poivre noir.</p>
            <strong>21 $</strong>
          </div>

          <div className="card">
            <h3>Tiramisu</h3>
            <p>Mascarpone, café, cacao.</p>
            <strong>9 $</strong>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <h2>Ce que nos clients disent</h2>

        <div className="cards">
          <div className="card">
            <p>“Très belle ambiance et excellent service.”</p>
            <strong>— Marie</strong>
          </div>

          <div className="card">
            <p>“La pizza était incroyable. Je recommande!”</p>
            <strong>— Alex</strong>
          </div>

          <div className="card">
            <p>“Parfait pour une soirée en famille.”</p>
            <strong>— Sophie</strong>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>📍 123 rue Saint-Roméos, Montréal</p>
        <p>📞 514-123-4567</p>
        <p>✉️ info@lunaverde.ca</p>
      </section>

      <footer>
        <p>
          © 2026 Ristorante Luna Verde. Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}

export default App;