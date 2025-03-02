import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/food/FoodCard";

interface RecommendationSectionProps {
  title?: string;
  subtitle?: string;
  recommendations?: Array<{
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

const RecommendationSection = ({
  title = "AI-Powered Recommendations",
  subtitle = "Dishes selected just for you based on your preferences and order history",
  recommendations = [
    {
      id: "1",
      name: "Truffle Mushroom Pasta",
      description: "Creamy fettuccine with wild mushrooms and truffle oil",
      price: 18.99,
      image:
        "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      category: "Pasta",
      isPopular: true,
    },
    {
      id: "2",
      name: "Spicy Tuna Poke Bowl",
      description:
        "Fresh tuna, avocado, cucumber, and spicy mayo on a bed of rice",
      price: 16.5,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      category: "Seafood",
      isPopular: false,
    },
    {
      id: "3",
      name: "Crispy Duck Confit",
      description:
        "Slow-cooked duck leg with orange glaze and roasted vegetables",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      category: "Poultry",
      isPopular: true,
    },
    {
      id: "4",
      name: "Mango Sticky Rice",
      description:
        "Sweet coconut rice with fresh mango and toasted sesame seeds",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      category: "Dessert",
      isPopular: false,
    },
    {
      id: "5",
      name: "Wagyu Beef Sliders",
      description:
        "Premium Wagyu beef mini burgers with caramelized onions and truffle aioli",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      category: "Burger",
      isPopular: true,
    },
  ],
}: RecommendationSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Adjust visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, recommendations.length - visibleCards)
        : Math.max(0, prevIndex - 1),
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= recommendations.length - visibleCards ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="w-full py-10 px-4 md:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <Sparkles size={24} className="text-amber-400 mr-2" />
              {title}
            </h2>
            <p className="text-gray-400 mt-1">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (280 + 16)}px)` }}
          >
            {recommendations.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <FoodCard
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  category={item.category}
                  isPopular={item.isPopular}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-1">
          {Array.from({
            length: Math.ceil(recommendations.length / visibleCards),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCards)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                Math.floor(currentIndex / visibleCards) === index
                  ? "bg-amber-500"
                  : "bg-gray-700 hover:bg-gray-600",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
