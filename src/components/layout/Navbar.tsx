import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  onOpenCart?: () => void;
  onOpenAuth?: () => void;
  isLoggedIn?: boolean;
  cartItemCount?: number;
  userName?: string;
  userAvatar?: string;
}

const Navbar = ({
  onOpenCart = () => console.log("Open cart"),
  onOpenAuth = () => console.log("Open auth"),
  isLoggedIn = false,
  cartItemCount = 3,
  userName = "Guest User",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=user123",
}: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-gray-900 border-b border-gray-800 fixed top-0 left-0 z-50 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-amber-500">
            Restu
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Menu
          </a>
          <a
            href="/offers"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Offers
          </a>
          <a
            href="/about"
            className="text-white hover:text-amber-400 transition-colors"
          >
            About
          </a>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <Input
            type="search"
            placeholder="Search for food..."
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-amber-500 pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white hover:text-amber-400 hover:bg-gray-800"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* User and Cart Actions */}
        <div className="flex items-center space-x-2">
          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenCart}
            className="relative text-white hover:text-amber-400 hover:bg-gray-800"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>

          {/* User Profile */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full overflow-hidden hover:bg-gray-800"
                >
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="h-8 w-8 rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-900 border-gray-800 text-white"
              >
                <div className="flex items-center p-2">
                  <div className="rounded-full overflow-hidden mr-2">
                    <img src={userAvatar} alt={userName} className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-medium">{userName}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 hover:text-amber-400 cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 hover:text-amber-400 cursor-pointer">
                  Orders
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 hover:text-amber-400 cursor-pointer">
                  Favorites
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 hover:text-amber-400 cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 hover:text-amber-400 cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenAuth}
              className="text-white border-amber-500 hover:bg-amber-500 hover:text-black"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-amber-400 hover:bg-gray-800 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gray-900 text-white border-gray-800 p-0"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-500">
                    Restu
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-amber-400 hover:bg-gray-800"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-4 flex-1">
                  <div className="mb-6">
                    <Input
                      type="search"
                      placeholder="Search for food..."
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-amber-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <a
                      href="/"
                      className="block py-2 text-white hover:text-amber-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="/menu"
                      className="block py-2 text-white hover:text-amber-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Menu
                    </a>
                    <a
                      href="/offers"
                      className="block py-2 text-white hover:text-amber-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Offers
                    </a>
                    <a
                      href="/about"
                      className="block py-2 text-white hover:text-amber-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </a>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-800">
                  {isLoggedIn ? (
                    <div className="flex items-center space-x-3">
                      <img
                        src={userAvatar}
                        alt={userName}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{userName}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-amber-500 hover:text-amber-400"
                        >
                          Log out
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={onOpenAuth}
                      className="w-full bg-amber-500 text-black hover:bg-amber-600"
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar - Expandable */}
      {isSearchOpen && (
        <div className="md:hidden absolute left-0 right-0 top-20 bg-gray-900 border-b border-gray-800 p-4 animate-in fade-in slide-in-from-top">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for food..."
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-amber-500 pr-10 w-full"
              autoFocus
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
