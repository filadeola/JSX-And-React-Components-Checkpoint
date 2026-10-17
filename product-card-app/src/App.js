import { Card } from 'react-bootstrap';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import './App.css';

const firstName = '';
const greetingImage =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85';

function App() {
  return (
    <main className="page-shell">
      <div className="page-content">
        <header className="page-heading">
          <span className="page-kicker">OBJECTS FOR SLOWER DAYS</span>
          <p className="page-edition">No. 01 <span aria-hidden="true">/</span> The everyday edit</p>
        </header>

        <Card className="product-card border-0">
          <div className="product-image-wrap">
            <Image />
            <span className="image-caption">01 / MADE TO BE KEPT</span>
          </div>
          <Card.Body className="product-copy">
            <div className="product-meta">
              <span>THE WEEKEND SERIES</span>
              <span className="availability"><i aria-hidden="true" /> IN STOCK</span>
            </div>
            <Name />
            <Price />
            <div className="copy-rule" />
            <Description />
            <div className="product-footer">
              <span>FREE SHIPPING OVER $100</span>
              <span aria-hidden="true">↗</span>
            </div>
          </Card.Body>
        </Card>

        <section
          className="greeting"
          aria-label={`Hello, ${firstName || 'there'}.`}
          aria-live="polite"
        >
          {firstName ? (
            <img className="greeting-image" src={greetingImage} alt="" />
          ) : null}
          <p>Hello, {firstName || 'there'}<span className="greeting-period">.</span></p>
        </section>

        <footer className="page-footer">
          <span>FIELDWORK SUPPLY CO.</span>
          <span>DESIGNED FOR THE LONG WAY HOME</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
