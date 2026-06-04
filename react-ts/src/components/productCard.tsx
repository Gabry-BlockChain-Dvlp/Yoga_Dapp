
import { products } from "./products";
import "../assets/productCard.css";

type Props = {
  product: typeof products[0];
  onBuy: (product: typeof products[0]) => void;
  isPending?: boolean;
};

const BADGES: Record<number, string> = {
  1: "Più venduto",
  4: "Novità",
};

export const ProductCard = ({ product, onBuy, isPending }: Props) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {BADGES[product.id] && (
          <span className="product-badge">{BADGES[product.id]}</span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-description">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-copy">{product.description}</p>
        <div className="card-actions">
          <p className="product-price">{product.price} ETH</p>
          <button
            className="buy-button"
            onClick={() => onBuy(product)}
            disabled={isPending}
          >
            {isPending ? "In corso…" : "Acquista"}
          </button>
        </div>
      </div>
    </div>
  );
};
