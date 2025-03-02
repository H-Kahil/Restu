import React from "react";
import { Check, MapPin, Clock, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderConfirmationProps {
  orderId?: string;
  orderItems?: OrderItem[];
  subtotal?: number;
  deliveryFee?: number;
  tax?: number;
  total?: number;
  estimatedDeliveryTime?: string;
  deliveryAddress?: string;
  onTrackOrder?: () => void;
  onReturnHome?: () => void;
}

const OrderConfirmation = ({
  orderId = "ORD-12345-6789",
  orderItems = [
    { id: "1", name: "Spicy Beef Burger", price: 12.99, quantity: 2 },
    { id: "2", name: "Chicken Caesar Salad", price: 9.99, quantity: 1 },
  ],
  subtotal = 35.97,
  deliveryFee = 2.99,
  tax = 3.6,
  total = 42.56,
  estimatedDeliveryTime = "30-45 minutes",
  deliveryAddress = "123 Main St, Apt 4B, Anytown, CA 12345",
  onTrackOrder = () => console.log("Track order"),
  onReturnHome = () => console.log("Return to home"),
}: OrderConfirmationProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg border border-gray-800">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-gray-400">
          Your order has been received and is being prepared.
        </p>
        <div className="bg-gray-800 text-amber-400 px-4 py-2 rounded-full mt-4 font-medium">
          Order ID: {orderId}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h3 className="text-lg font-medium mb-3">Delivery Information</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-amber-400 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">Delivery Address</p>
                <p className="text-gray-400 text-sm">{deliveryAddress}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-amber-400 mr-2" />
              <div>
                <p className="font-medium">Estimated Delivery Time</p>
                <p className="text-gray-400 text-sm">{estimatedDeliveryTime}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h3 className="text-lg font-medium mb-3">Order Summary</h3>
          <div className="space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator className="bg-gray-700 my-2" />
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator className="bg-gray-700 my-2" />
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span className="text-amber-500">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            onClick={onTrackOrder}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-medium"
          >
            Track Order
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={onReturnHome}
            className="flex-1 border-gray-700 text-white hover:bg-gray-700"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
