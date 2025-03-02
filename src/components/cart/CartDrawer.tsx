import React, { useState } from "react";
import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  items?: CartItem[];
  onCheckout?: () => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}

const CartDrawer = ({
  isOpen = true,
  onClose = () => {},
  items = [
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
    {
      id: "3",
      name: "Margherita Pizza",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 1,
    },
  ],
  onCheckout = () => console.log("Proceeding to checkout"),
  onUpdateQuantity = (id, quantity) =>
    console.log(`Updated quantity for ${id} to ${quantity}`),
  onRemoveItem = (id) => console.log(`Removed item ${id}`),
}: CartDrawerProps) => {
  // Calculate subtotal
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="bg-gray-900 text-white border-gray-800 max-h-[90vh] w-full sm:max-w-md mx-auto">
        <DrawerHeader className="border-b border-gray-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <DrawerTitle className="flex items-center text-xl font-bold">
              <ShoppingCart className="mr-2 h-5 w-5 text-amber-500" />
              Your Cart (
              {items.reduce((count, item) => count + item.quantity, 0)} items)
            </DrawerTitle>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-400 mb-6">
              Add some delicious items to your cart and they'll appear here
            </p>
            <DrawerClose asChild>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                Browse Menu
              </Button>
            </DrawerClose>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4 h-[50vh]">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 pb-4 border-b border-gray-800"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-red-500 -mt-1 -mr-1"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-amber-500 font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-700 text-gray-400"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-3 min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-700 text-gray-400"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 bg-gray-900 border-t border-gray-800">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span className="text-amber-500">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <DrawerFooter className="border-t border-gray-800 p-4">
              <Button
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </Button>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-white hover:bg-gray-800"
                >
                  Continue Shopping
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
