import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition">

      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="mt-3 text-sm font-medium line-clamp-2">
        {product.title}
      </h3>

      <p className="mt-1 font-semibold">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full border border-black py-2 text-sm
                   hover:bg-black hover:text-white transition"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
