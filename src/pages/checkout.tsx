import React from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import Navbar from "@/components/layout/Navbar";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <CheckoutForm
          onSubmit={(data) => {
            console.log("Order submitted:", data);
            // Redirect to order confirmation page
            window.location.href = "/order-confirmation";
          }}
          onCancel={() => {
            // Go back to cart
            window.history.back();
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;
