import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ✅ Correct: hook used INSIDE component
  const { cartCount } = useCart();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinkStyle = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition
     after:content-[''] after:absolute after:left-0 after:bottom-0
     after:h-[2px] after:bg-green-500 after:transition-transform
     after:w-full after:scale-x-0 after:origin-left
     ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`;

  return (
    <nav className="relative z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-black">
            <span className="text-green-500">Cart</span>ivo
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/products" className={navLinkStyle}>Products</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <NavLink to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-black" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 w-full bg-white border-t border-gray-200 md:hidden">
            <div className="flex flex-col gap-6 px-4 py-6">
              <NavLink to="/" className="text-sm font-medium">Home</NavLink>
              <NavLink to="/products" className="text-sm font-medium">Products</NavLink>
              <NavLink to="/about" className="text-sm font-medium">About</NavLink>
              <NavLink to="/contact" className="text-sm font-medium">Contact</NavLink>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
