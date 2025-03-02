import React from "react";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";
import Navbar from "@/components/layout/Navbar";

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <OrderConfirmation
          onTrackOrder={() => {
            // Redirect to order tracking page
            window.location.href = "/order-tracking";
          }}
          onReturnHome={() => {
            // Redirect to home page
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
