import { Link } from "react-router-dom";
import { Heart, Eye, Star } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    toast.success(
      isWishlisted(product.id) ? "Removed from wishlist" : "Added to wishlist"
    );
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickView?.(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success("Added to cart");
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-secondary">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {discount > 0 && (
              <span className="rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                -{discount}%
              </span>
            )}
            {product.isNew && (
              <span className="rounded bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                New
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={handleWishlist}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-md transition-colors hover:bg-primary hover:text-primary-foreground",
                isWishlisted(product.id) && "bg-primary text-primary-foreground"
              )}
              aria-label="Add to wishlist"
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  isWishlisted(product.id) && "fill-current"
                )}
              />
            </button>
          </div>

          {/* Add to Cart - Shown on Hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground/95 py-3 transition-transform duration-300 group-hover:translate-y-0">
            <Button
              variant="ghost"
              className="w-full text-background hover:bg-background/20 hover:text-background"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
};
