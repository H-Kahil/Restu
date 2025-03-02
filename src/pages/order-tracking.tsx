import React from "react";
import OrderTracking from "@/components/checkout/OrderTracking";
import Navbar from "@/components/layout/Navbar";

const OrderTrackingPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <OrderTracking
          onReturnHome={() => {
            // Redirect to home page
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};

export default OrderTrackingPage;
