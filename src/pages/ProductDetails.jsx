import { useParams } from "react-router-dom";
import { useData } from "../context/Data";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useData();
  const { addToCart } = useCart();

  if (loading) {
    return <div className="p-8">Loading product...</div>;
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }


  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <p className="mt-6 text-xl font-semibold">
            ${product.price}
          </p>

          <button
            onClick={handleAdd}
            className="mt-6 border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
