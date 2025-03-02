import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
  featuredItems?: Array<{
    id: string;
    name: string;
    image: string;
  }>;
}

const HeroSection = ({
  title = "Delicious Food, Delivered Fast",
  subtitle = "Discover the best meals from top restaurants in your area with AI-powered recommendations tailored just for you.",
  ctaText = "Order Now",
  backgroundImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  onCtaClick = () => console.log("CTA clicked"),
  featuredItems = [
    {
      id: "1",
      name: "Premium Steak",
      image:
        "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "2",
      name: "Seafood Platter",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "3",
      name: "Gourmet Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ],
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"
          aria-hidden="true"
        />
        <img
          src={backgroundImage}
          alt="Food background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">{subtitle}</p>
          <Button
            onClick={onCtaClick}
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded-md"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Featured Items */}
      <div className="absolute bottom-0 right-0 z-20 hidden lg:flex items-end gap-4 p-6">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg w-24 h-24 border border-gray-700 transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-xs font-medium text-center px-1">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
