import { Link } from "react-router-dom";
import {
  ArrowRight,
  Headphones,
  Smartphone,
  Laptop,
  Camera,
  Watch,
  Gamepad2,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const bestSelling = products.slice(0, 8);

  const categoryIcons = {
    phones: Smartphone,
    computers: Laptop,
    smartwatch: Watch,
    camera: Camera,
    headphones: Headphones,
    gaming: Gamepad2,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Categories */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon =
                categoryIcons[category.slug as keyof typeof categoryIcons];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-4 rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md">
                    <div className="rounded-full bg-secondary p-4 transition-colors group-hover:bg-primary/10">
                      {Icon && (
                        <Icon className="h-8 w-8 transition-colors group-hover:text-primary" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-center">
                      {category.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground mt-2">
                Check out our most popular items
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Enhance Your Music Experience
            </h2>
            <p className="text-lg opacity-90">
              Get premium sound quality with our exclusive headphone collection
            </p>
            <Link to="/category/headphones" className="inline-block mt-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Shop Headphones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Best Selling</h2>
              <p className="text-muted-foreground mt-2">
                Top rated products this month
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSelling.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping on all orders over $50
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Money Back Guarantee</h3>
              <p className="text-muted-foreground">
                30 day money back guarantee
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Dedicated customer support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
