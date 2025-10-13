import { useParams, Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <p className="text-muted-foreground">
            The category you're looking for doesn't exist.
          </p>
          <Link to="/shop">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Category Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <Link to="/shop">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground">
            {categoryProducts.length} products available
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 space-y-6">
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
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">No Products Yet</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're currently updating this category. Check back soon or explore our other categories!
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories
                .filter((c) => c.id !== category.id)
                .slice(0, 3)
                .map((relatedCategory) => (
                  <Link key={relatedCategory.id} to={`/category/${relatedCategory.slug}`}>
                    <Button variant="outline">{relatedCategory.name}</Button>
                  </Link>
                ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
