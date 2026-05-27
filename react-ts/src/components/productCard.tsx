import { products } from "./products";
import "../assets/productCard.css"

export const ProductCard = ({ product, onBuy }: { product: typeof products[0], onBuy: (price: string) => void }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} 
             alt={product.name} 
             loading= "lazy"
             />
      </div>
      <div className="product-description">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-copy">{product.description}</p>
        <div className="card-actions">
          <p className="product-price">{product.price} ETH</p>
          <button className="buy-button" onClick={() => onBuy(product.price)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

