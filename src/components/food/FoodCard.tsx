import React from "react";
import { Star, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface FoodCardProps {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  rating?: number;
  category?: string;
  isPopular?: boolean;
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

const FoodCard = ({
  id = "1",
  name = "Spicy Beef Burger",
  description = "Juicy beef patty with jalapeños, pepper jack cheese, and spicy sauce",
  price = 12.99,
  image = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  rating = 4.7,
  category = "Burger",
  isPopular = false,
  onAddToCart = () => console.log("Added to cart"),
  onFavorite = () => console.log("Added to favorites"),
}: FoodCardProps) => {
  return (
    <Card className="w-[280px] h-[320px] overflow-hidden bg-gray-900 border-gray-800 text-white relative">
      {isPopular && (
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 z-10 bg-amber-500 text-black"
        >
          Popular
        </Badge>
      )}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <button
          onClick={onFavorite}
          className="absolute top-2 left-2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart size={18} className="text-white" />
        </button>
      </div>
      <CardHeader className="p-3 pb-0">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1">{category}</p>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <p className="text-xs text-gray-300 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between items-center">
        <span className="font-bold text-amber-400">${price.toFixed(2)}</span>
        <Button
          onClick={onAddToCart}
          size="sm"
          className="bg-amber-500 hover:bg-amber-600 text-black"
        >
          <Plus size={16} className="mr-1" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
