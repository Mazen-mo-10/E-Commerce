import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const isActiveLink = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled && "shadow-md"
      )}
    >
      {/* Top Bar */}
      <div className="border-b bg-foreground text-background">
        <div className="container mx-auto flex h-12 items-center justify-between px-4 text-sm">
          <p className="hidden md:block">
            Summer Sale - Save up to 50% on selected items!
          </p>
          <p className="md:hidden">Free shipping on orders over $50</p>
          <div className="flex items-center gap-4">
            <Link to="/auth" className="hover:text-primary transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">
              <span className="text-primary">E</span>Shop
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActiveLink(link.path) && "text-primary"
                )}
              >
                {link.name}
                {isActiveLink(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="search"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Search"
              >
                <Search className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Link to="/wishlist">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative transition-all hover:text-primary hover:-translate-y-0.5 hover:scale-105"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {wishlistItems.length}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative transition-all hover:text-primary hover:-translate-y-0.5 hover:scale-105"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/auth">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex transition-all hover:text-primary hover:-translate-y-0.5 hover:scale-105"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t md:hidden bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  isActiveLink(link.path) && "text-primary font-semibold"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <form onSubmit={handleSearch}>
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </form>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
