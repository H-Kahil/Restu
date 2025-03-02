import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface CategoryProps {
  id?: string;
  name?: string;
  icon?: string;
  color?: string;
  onClick?: () => void;
}

const CategoryItem = ({
  id = "1",
  name = "Burgers",
  icon = "🍔",
  color = "bg-amber-500/20",
  onClick = () => console.log(`Category ${name} clicked`),
}: CategoryProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-xl transition-all",
        "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500",
        color,
      )}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-sm font-medium text-white">{name}</span>
    </button>
  );
};

interface CategoriesSectionProps {
  categories?: CategoryProps[];
  title?: string;
}

const CategoriesSection = ({
  categories = [
    { id: "1", name: "Burgers", icon: "🍔", color: "bg-amber-500/20" },
    { id: "2", name: "Pizza", icon: "🍕", color: "bg-red-500/20" },
    { id: "3", name: "Sushi", icon: "🍣", color: "bg-blue-500/20" },
    { id: "4", name: "Salads", icon: "🥗", color: "bg-green-500/20" },
    { id: "5", name: "Desserts", icon: "🍰", color: "bg-pink-500/20" },
    { id: "6", name: "Drinks", icon: "🍹", color: "bg-purple-500/20" },
    { id: "7", name: "Breakfast", icon: "🍳", color: "bg-yellow-500/20" },
    { id: "8", name: "Mexican", icon: "🌮", color: "bg-orange-500/20" },
    { id: "9", name: "Italian", icon: "🍝", color: "bg-indigo-500/20" },
    { id: "10", name: "Chinese", icon: "🥡", color: "bg-cyan-500/20" },
  ],
  title = "Food Categories",
}: CategoriesSectionProps) => {
  return (
    <section className="w-full py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                id={category.id}
                name={category.name}
                icon={category.icon}
                color={category.color}
                onClick={category.onClick}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="bg-gray-800" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategoriesSection;
