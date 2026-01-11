import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add to cart
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Increase quantity
    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease quantity
    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Remove item
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Total quantity
    const cartCount = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    // Total price
    const totalAmount = useMemo(
        () =>
            cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            ),
        [cartItems]
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                cartCount,
                totalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
