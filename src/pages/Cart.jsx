import { MoveUp } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalAmount,
  } = useCart();

  if (cartItems.length === 0) {
    return <div className="p-8 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border p-4 rounded bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 object-contain"
            />

            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm">${item.price}</p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="border px-2"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="border px-2"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-semibold">Total</h2>
        <h2 className="text-xl font-bold">
          ${totalAmount.toFixed(2)}
        </h2>
      </div>

      <button
        onClick={() => navigate("/login")}
        className="mt-20 flex justify-center items-center gap-2 bg-green-500 p-3 text-black font-bold text-xl cursor-pointer hover:bg-green-600 transition"
      >
        CheckOut
        <MoveUp />
      </button>



    </div>
  );
};

export default Cart;
