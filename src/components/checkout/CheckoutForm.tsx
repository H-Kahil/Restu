import React, { useState } from "react";
import {
  CreditCard,
  ShoppingBag,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface CheckoutFormProps {
  subtotal?: number;
  deliveryFee?: number;
  tax?: number;
  onSubmit?: (data: any) => void;
  onCancel?: () => void;
}

const CheckoutForm = ({
  subtotal = 35.97,
  deliveryFee = 2.99,
  tax = 3.6,
  onSubmit = () => console.log("Order submitted"),
  onCancel = () => console.log("Checkout cancelled"),
}: CheckoutFormProps) => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    saveInfo: true,
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const total = subtotal + deliveryFee + tax;

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white p-6 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2">
          <Tabs
            defaultValue="delivery"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full mb-6"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger
                value="delivery"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Delivery
              </TabsTrigger>
              <TabsTrigger
                value="pickup"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Pickup
              </TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <Separator className="bg-gray-800 my-6" />

                  <h3 className="text-lg font-medium">Delivery Address</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                          required
                        />
                      </div>
                      <div className="md:col-span-1">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                          required
                        />
                      </div>
                      <div className="md:col-span-1">
                        <Label>Delivery Time</Label>
                        <div className="flex items-center h-10 px-4 rounded-md bg-amber-500/20 text-amber-400">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>30-45 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800 my-6" />

                  <h3 className="text-lg font-medium">Payment Method</h3>
                  <RadioGroup
                    defaultValue="card"
                    value={formData.paymentMethod}
                    onValueChange={(value) =>
                      handleRadioChange("paymentMethod", value)
                    }
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2 rounded-md border border-gray-700 p-3 bg-gray-800">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-amber-400" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border border-gray-700 p-3 bg-gray-800">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <ShoppingBag className="mr-2 h-5 w-5 text-amber-400" />
                          <span>Cash on Delivery</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4 mt-4 p-4 border border-gray-700 rounded-md bg-gray-800/50">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Expiry Date</Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc">CVC</Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            placeholder="123"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Special instructions for delivery"
                      value={formData.notes}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white h-20"
                    />
                  </div>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="pickup" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pickup Information</h3>
                <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
                  <h4 className="font-medium mb-2">Restaurant Location</h4>
                  <p className="text-gray-300">
                    123 Main Street, Anytown, CA 12345
                  </p>
                  <div className="flex items-center mt-3 text-amber-400">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Ready for pickup in 15-20 minutes</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <Separator className="bg-gray-800 my-6" />

                <h3 className="text-lg font-medium">Payment Method</h3>
                <RadioGroup
                  defaultValue="card"
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    handleRadioChange("paymentMethod", value)
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 rounded-md border border-gray-700 p-3 bg-gray-800">
                    <RadioGroupItem value="card" id="card-pickup" />
                    <Label
                      htmlFor="card-pickup"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5 text-amber-400" />
                        <span>Pay Online</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border border-gray-700 p-3 bg-gray-800">
                    <RadioGroupItem value="cash" id="cash-pickup" />
                    <Label
                      htmlFor="cash-pickup"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <ShoppingBag className="mr-2 h-5 w-5 text-amber-400" />
                        <span>Pay at Pickup</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 mt-4 p-4 border border-gray-700 rounded-md bg-gray-800/50">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber-pickup"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date</Label>
                        <Input
                          id="cardExpiry-pickup"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvc">CVC</Label>
                        <Input
                          id="cardCvc-pickup"
                          name="cardCvc"
                          placeholder="123"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 sticky top-4">
            <h3 className="text-lg font-medium mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span className="text-amber-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6 mt-4"
            >
              Place Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={onCancel}
              className="w-full mt-2 border-gray-700 text-white hover:bg-gray-700"
            >
              Back to Cart
            </Button>

            <div className="mt-6 text-xs text-gray-400">
              <p>
                By placing your order, you agree to our{" "}
                <a href="#" className="text-amber-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-amber-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
