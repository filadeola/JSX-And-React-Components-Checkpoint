import product from './product';

function Price() {
  return <p className="product-price">{product.price} <span>USD</span></p>;
}

export default Price;