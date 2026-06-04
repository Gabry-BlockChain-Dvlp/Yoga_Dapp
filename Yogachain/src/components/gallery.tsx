
import { ProductCard } from "./productCard";
import { products, type Product } from "./products";

type Props = {
  onBuy: (product: Pick<Product, "name" | "price" | "description">) => void;
  isPending?: boolean;
};

export const Gallery = ({ onBuy, isPending }: Props) => {
  return (
    <div className="gallery">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onBuy={onBuy} isPending={isPending} />
      ))}
    </div>
  );
};
 
