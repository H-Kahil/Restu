import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Tag, Percent, Gift, ArrowRight } from "lucide-react";

interface OfferProps {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiryDate: string;
  image: string;
  isNew?: boolean;
}

const offers: OfferProps[] = [
  {
    id: "1",
    title: "Weekend Special: 20% Off",
    description: "Enjoy 20% off on all orders above $30 this weekend. Valid for delivery and pickup.",
    code: "WEEKEND20",
    discount: "20% off",
    expiryDate: "Sunday, 11:59 PM",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
  {
    id: "2",
    title: "Free Delivery on First Order",
    description: "New to Restu? Get free delivery on your first order with no minimum purchase required.",
    code: "FIRSTFREE",
    discount: "Free Delivery",
    expiryDate: "No expiration",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Buy One Get One Free",
    description: "Buy any burger and get a second one free. Perfect for sharing with friends or family.",
    code: "BURGERBOGO",
    discount: "BOGO",
    expiryDate: "Next Monday, 11:59 PM",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Family Meal Deal",
    description: "Order a family meal and get a free dessert. Valid for orders over $50.",
    code: "FAMILY50",
    discount: "Free Dessert",
    expiryDate: "End of month",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Lunch Special: 15% Off",
    description: "Take a break with 15% off all orders between 11 AM and 2 PM, Monday to Friday.",
    code: "LUNCH15",
    discount: "15% off",
    expiryDate: "Valid weekdays",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "Refer a Friend",
    description: "Refer a friend and both of you get $10 off your next order. No minimum purchase required.",
    code: "REFER10",
    discount: "$10 off",
    expiryDate: "No expiration",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const OfferCard = ({ offer }: { offer: OfferProps }) => {
  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 text-white h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {offer.isNew && (
          <div className="absolute top-2 right-2 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-bold text-xl">{offer.title}</h3>
        <div className="flex items-center mt-1 text-amber-400">
          <Tag className="h-4 w-4 mr-1" />
          <span className="font-medium">{offer.discount}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-gray-300 text-sm">{offer.description}</p>
        <div className="mt-4 p-2 bg-gray-800 rounded flex items-center justify-between">
          <span className="font-mono text-amber-400 font-bold">{offer.code}</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-amber-400 p-0 h-auto"
            onClick={() => {
              navigator.clipboard.writeText(offer.code);
              alert(`Copied code: ${offer.code}`);
            }}
          >
            Copy
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t border-gray-800 flex items-center">
        <Clock className="h-4 w-4 text-gray-400 mr-2" />
        <span className="text-xs text-gray-400">Expires: {offer.expiryDate}</span>
      </CardFooter>
    </Card>
  );
};

const OffersPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Special Offers & Promotions</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our latest deals and discounts to save on your favorite meals.
              Use these promo codes at checkout to redeem your offers.
            </p>
          </div>

          {/* Featured Offer */}
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-