import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-black">Cartivo</h2>
            <p className="mt-4 text-sm text-gray-600">
              A modern e-commerce platform built with performance,
              simplicity, and clean design in mind.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><NavLink to="/" className="hover:text-black">Home</NavLink></li>
              <li><NavLink to="/products" className="hover:text-black">Products</NavLink></li>
              <li><NavLink to="/about" className="hover:text-black">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-black">Contact</NavLink></li>
              <li><NavLink to="/cart" className="hover:text-black">Cart</NavLink></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-600">
              <a href="#" className="hover:text-black"><FaGithub size={18} /></a>
              <a href="#" className="hover:text-black"><FaLinkedin size={18} /></a>
              <a href="#" className="hover:text-black"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-black"><FaInstagram size={18} /></a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get updates on new products and offers.
            </p>

            <form onSubmit={(e)=>{
              e.preventDefault();
              alert("Subscribed!");
              
            }} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
              <button
                type="submit"
                className="border border-black px-4 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cartivo. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
