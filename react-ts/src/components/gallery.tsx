import { ProductCard } from "./productCard";
import { products, type Product } from "./products";
import "../assets/gallery.css"

export const Gallery = ({ onBuy }: { onBuy: (product: Pick<Product, "name" | "price" | "description">) => void }) => {
  return (
    <div className="gallery">   
        {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={onBuy} />
        ))}
    </div>
  );
}
