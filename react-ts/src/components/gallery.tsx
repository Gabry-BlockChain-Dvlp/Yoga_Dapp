import { ProductCard } from "./productCard";
import { products } from "./products";
import "../assets/gallery.css"

export const Gallery = ({ onBuy }: { onBuy: (price: string) => void }) => {
  return (
    <div className="gallery">   
        {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={onBuy} />
        ))}
    </div>
  );
}
