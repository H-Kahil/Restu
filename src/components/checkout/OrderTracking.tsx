import React from "react";
import { Check, Clock, MapPin, ChefHat, Truck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type OrderStatus = "preparing" | "ready" | "on-the-way" | "delivered";

interface OrderTrackingProps {
  orderId?: string;
  status?: OrderStatus;
  estimatedDeliveryTime?: string;
  deliveryAddress?: string;
  driverName?: string;
  driverPhone?: string;
  onReturnHome?: () => void;
}

const OrderTracking = ({
  orderId = "ORD-12345-6789",
  status = "on-the-way",
  estimatedDeliveryTime = "12:45 PM",
  deliveryAddress = "123 Main St, Apt 4B, Anytown, CA 12345",
  driverName = "Michael Rodriguez",
  driverPhone = "(555) 123-4567",
  onReturnHome = () => console.log("Return to home"),
}: OrderTrackingProps) => {
  const steps = [
    { id: "preparing", label: "Preparing", icon: ChefHat },
    { id: "ready", label: "Ready for Delivery", icon: Check },
    { id: "on-the-way", label: "On the Way", icon: Truck },
    { id: "delivered", label: "Delivered", icon: Home },
  ];

  const currentStepIndex = steps.findIndex((step) => step.id === status);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg border border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Track Your Order</h2>
        <div className="bg-gray-800 text-amber-400 px-4 py-2 rounded-full inline-block mt-2 font-medium">
          Order ID: {orderId}
        </div>
      </div>

      {/* Order Status Timeline */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-5 w-full h-1 bg-gray-700">
          <div
            className="h-full bg-amber-500 transition-all duration-500"
            style={{
              width: `${Math.min(
                100,
                ((currentStepIndex + 0.5) / (steps.length - 1)) * 100,
              )}%`,
            }}
          ></div>
        </div>

        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center relative"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    isActive
                      ? "bg-amber-500 text-black"
                      : "bg-gray-700 text-gray-400"
                  } ${isCurrent ? "ring-4 ring-amber-500/30" : ""}`}
                >
                  <StepIcon className="h-5 w-5" />
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estimated Delivery */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-400 mr-2" />
            <span className="font-medium">Estimated Delivery</span>
          </div>
          <span className="text-amber-400 font-bold">
            {estimatedDeliveryTime}
          </span>
        </div>
      </div>

      {/* Delivery Details */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
        <h3 className="text-lg font-medium mb-3">Delivery Details</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-amber-400 mr-2 mt-0.5" />
            <div>
              <p className="font-medium">Delivery Address</p>
              <p className="text-gray-400 text-sm">{deliveryAddress}</p>
            </div>
          </div>

          {status === "on-the-way" && (
            <div>
              <Separator className="bg-gray-700 my-3" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Your Delivery Driver</p>
                  <p className="text-gray-400 text-sm">{driverName}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-500 text-amber-400 hover:bg-amber-500/20"
                  onClick={() => window.open(`tel:${driverPhone}`)}
                >
                  Call Driver
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Current Status Message */}
      <div className="bg-amber-500/20 rounded-lg p-4 border border-amber-500/30 mb-6">
        <div className="flex items-center">
          {status === "preparing" && (
            <>
              <ChefHat className="h-5 w-5 text-amber-400 mr-2" />
              <p className="text-amber-400">
                Your food is being prepared by our chefs.
              </p>
            </>
          )}
          {status === "ready" && (
            <>
              <Check className="h-5 w-5 text-amber-400 mr-2" />
              <p className="text-amber-400">
                Your order is ready and waiting for pickup by our driver.
              </p>
            </>
          )}
          {status === "on-the-way" && (
            <>
              <Truck className="h-5 w-5 text-amber-400 mr-2" />
              <p className="text-amber-400">
                Your food is on the way! Driver is heading to your location.
              </p>
            </>
          )}
          {status === "delivered" && (
            <>
              <Home className="h-5 w-5 text-amber-400 mr-2" />
              <p className="text-amber-400">
                Your order has been delivered. Enjoy your meal!
              </p>
            </>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={onReturnHome}
        className="w-full border-gray-700 text-white hover:bg-gray-700"
      >
        <Home className="mr-2 h-4 w-4" />
        Return to Home
      </Button>
    </div>
  );
};

export default OrderTracking;
