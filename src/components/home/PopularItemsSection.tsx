import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/food/FoodCard";

interface PopularItemsSectionProps {
  title?: string;
  viewAllLink?: string;
  items?: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    category: string;
    isPopular: boolean;
  }>;
}

const PopularItemsSection = ({
  title = "Popular Items",
  viewAllLink = "/menu",
  items = [
    {
      id: "1",
      name: "Spicy Beef Burger",
      description:
        "Juicy beef patty with jalapeños, pepper jack cheese, and spicy sauce",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      category: "Burger",
      isPopular: true,
    },
    {
      id: "2",
      name: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, fresh mozzarella, and basil",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.5,
      category: "Pizza",
      isPopular: true,
    },
    {
      id: "3",
      name: "Chicken Alfredo Pasta",
      description:
        "Creamy alfredo sauce with grilled chicken over fettuccine pasta",
      price: 16.99,
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023882c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      category: "Pasta",
      isPopular: true,
    },
    {
      id: "4",
      name: "Vegetable Stir Fry",
      description:
        "Fresh vegetables stir-fried in a savory sauce with steamed rice",
      price: 11.99,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.3,
      category: "Asian",
      isPopular: true,
    },
  ],
}: PopularItemsSectionProps) => {
  return (
    <section className="w-full py-10 px-4 md:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Button
            variant="link"
            className="text-amber-400 hover:text-amber-300 p-0 flex items-center gap-2"
            onClick={() => (window.location.href = viewAllLink)}
          >
            View all <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {items.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
              category={item.category}
              isPopular={item.isPopular}
              onAddToCart={() => console.log(`Added ${item.name} to cart`)}
              onFavorite={() => console.log(`Added ${item.name} to favorites`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItemsSection;
