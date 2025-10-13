import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, total } = useCart();

  const shipping = total > 50 ? 0 : 10;
  const finalTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
            <svg
              className="h-12 w-12 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Start shopping to add items to your cart
          </p>
          <Link to="/shop">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4 " />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-lg border bg-card"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-secondary"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold hover:text-primary line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="flex-shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6 space-y-6 sticky top-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(50 - total).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Input placeholder="Enter coupon code" />
                <Button variant="outline" className="w-full">
                  Apply Coupon
                </Button>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>

              <Link to="/shop">
                <Button variant="ghost" className="w-full mt-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
