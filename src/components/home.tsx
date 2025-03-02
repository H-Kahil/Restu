import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import RecommendationSection from "./home/RecommendationSection";
import CategoriesSection from "./home/CategoriesSection";
import PopularItemsSection from "./home/PopularItemsSection";
import CartDrawer from "./cart/CartDrawer";
import AuthModal from "./auth/AuthModal";

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Spicy Beef Burger",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 2,
    },
    {
      id: "2",
      name: "Chicken Caesar Salad",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 1,
    },
  ]);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login with:", data);
    // Simulate successful login
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleSignup = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Signup with:", data);
    // Simulate successful signup
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleAddToCart = (item: any) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Update quantity if item already exists
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    // Open cart after adding item
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <Navbar
        onOpenCart={handleOpenCart}
        onOpenAuth={handleOpenAuth}
        isLoggedIn={isLoggedIn}
        cartItemCount={cartItems.reduce(
          (count, item) => count + item.quantity,
          0,
        )}
      />

      {/* Main Content */}
      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <HeroSection onCtaClick={() => console.log("CTA clicked")} />
        <RecommendationSection />
        <CategoriesSection />
        <PopularItemsSection />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => console.log("Proceeding to checkout")}
      />

      {/* Auth Modal */}
      <AuthModal
        open={isAuthOpen}
        onOpenChange={setIsAuthOpen}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </div>
  );
};

export default Home;
