import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import NotFound from "./pages/NotFound";


import { DataProvider } from './context/Data';
import { CartProvider } from "./context/CartContext";


import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          {/* App Wrapper */}
          <div className="min-h-screen bg-gray-300">

            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />

          </div>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "rgba(0,0,0,0.85)",
                color: "#fff",
                backdropFilter: "blur(6px)",
                borderRadius: "12px",
                padding: "12px 16px",
              },
            }}
          />

        </CartProvider>
      </DataProvider>
    </BrowserRouter >
  );
};

export default App;
