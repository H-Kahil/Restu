import React, { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FoodCard from "@/components/food/FoodCard";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/cart/CartDrawer";
import AuthModal from "@/components/auth/AuthModal";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  isPopular: boolean;
  tags: string[];
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const categories = [
  { id: "all", name: "All Items" },
  { id: "burgers", name: "Burgers" },
  { id: "pizza", name: "Pizza" },
  { id: "pasta", name: "Pasta" },
  { id: "salads", name: "Salads" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

const sortOptions = [
  { id: "popular", name: "Most Popular" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "rating", name: "Highest Rated" },
];

const dietaryFilters = [
  { id: "vegetarian", name: "Vegetarian" },
  { id: "vegan", name: "Vegan" },
  { id: "gluten-free", name: "Gluten Free" },
  { id: "dairy-free", name: "Dairy Free" },
];

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    category: "burgers",
    isPopular: true,
    tags: ["beef"],
  },
  {
    id: "2",
    name: "Veggie Burger",
    description:
      "Plant-based patty with avocado, sprouts, tomato, and vegan mayo",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    category: "burgers",
    isPopular: false,
    tags: ["vegetarian", "vegan"],
  },
  {
    id: "3",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    category: "pizza",
    isPopular: true,
    tags: ["vegetarian"],
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with spicy pepperoni slices",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    category: "pizza",
    isPopular: true,
    tags: ["meat"],
  },
  {
    id: "5",
    name: "Fettuccine Alfredo",
    description: "Creamy alfredo sauce with fettuccine pasta and parmesan",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023882c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    category: "pasta",
    isPopular: false,
    tags: ["vegetarian"],
  },
  {
    id: "6",
    name: "Spaghetti Bolognese",
    description: "Spaghetti with rich meat sauce and parmesan cheese",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    category: "pasta",
    isPopular: true,
    tags: ["meat"],
  },
  {
    id: "7",
    name: "Caesar Salad",
    description:
      "Romaine lettuce, croutons, parmesan cheese with caesar dressing",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    category: "salads",
    isPopular: false,
    tags: ["vegetarian"],
  },
  {
    id: "8",
    name: "Greek Salad",
    description:
      "Cucumber, tomato, olives, feta cheese with olive oil dressing",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    category: "salads",
    isPopular: false,
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: "9",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    category: "desserts",
    isPopular: true,
    tags: ["vegetarian"],
  },
  {
    id: "10",
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with berry compote",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    category: "desserts",
    isPopular: true,
    tags: ["vegetarian"],
  },
  {
    id: "11",
    name: "Iced Coffee",
    description: "Cold brewed coffee served over ice with cream",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    category: "drinks",
    isPopular: false,
    tags: ["vegetarian", "vegan", "gluten-free"],
  },
  {
    id: "12",
    name: "Strawberry Smoothie",
    description: "Fresh strawberries blended with yogurt and honey",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a90bb0ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    category: "drinks",
    isPopular: false,
    tags: ["vegetarian", "gluten-free"],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Classic Cheeseburger",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 1,
    },
  ]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId],
    );
  };

  const filteredItems = foodItems
    .filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Search filter
      if (
        searchQuery &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Dietary filters
      if (
        activeFilters.length > 0 &&
        !activeFilters.some((filter) => item.tags.includes(filter))
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort items
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "popular":
        default:
          return b.isPopular === a.isPopular ? 0 : b.isPopular ? 1 : -1;
      }
    });

  const handleAddToCart = (item: FoodItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login with:", data);
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleSignup = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Signup with:", data);
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        isLoggedIn={isLoggedIn}
        cartItemCount={cartItems.reduce(
          (count, item) => count + item.quantity,
          0,
        )}
      />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
            <p className="text-gray-400">
              Explore our wide range of delicious meals and drinks
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white w-full"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 flex-shrink-0"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                  {activeFilters.length > 0 && (
                    <span className="ml-2 bg-amber-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {activeFilters.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-900 border-gray-800 text-white p-2"
              >
                <div className="font-medium mb-2 px-2">
                  Dietary Restrictions
                </div>
                {dietaryFilters.map((filter) => (
                  <DropdownMenuItem
                    key={filter.id}
                    className="flex items-center px-2 py-1.5 cursor-pointer hover:bg-gray-800"
                    onClick={() => toggleFilter(filter.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 mr-2 rounded border ${activeFilters.includes(filter.id) ? "bg-amber-500 border-amber-500" : "border-gray-600"}`}
                      >
                        {activeFilters.includes(filter.id) && (
                          <Check className="h-3 w-3 text-black" />
                        )}
                      </div>
                      {filter.name}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 flex-shrink-0"
                >
                  Sort by
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-900 border-gray-800 text-white"
              >
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.id}
                    className={`cursor-pointer hover:bg-gray-800 ${sortBy === option.id ? "text-amber-400" : ""}`}
                    onClick={() => setSortBy(option.id)}
                  >
                    {option.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full mb-8"
        >
          <div className="border-b border-gray-800 overflow-x-auto pb-1">
            <TabsList className="bg-transparent h-auto p-0 w-auto inline-flex">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-amber-500 data-[state=active]:text-amber-500 bg-transparent hover:text-amber-400 transition-colors"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                  {filteredItems.map((item) => (
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
                      onAddToCart={() => handleAddToCart(item)}
                      onFavorite={() =>
                        console.log(`Added ${item.name} to favorites`)
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    No items found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilters([]);
                    }}
                    className="border-amber-500 text-amber-400 hover:bg-amber-500/20"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => (window.location.href = "/checkout")}
      />

      <AuthModal
        open={isAuthOpen}
        onOpenChange={setIsAuthOpen}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </div>
  );
};

export default MenuPage;
