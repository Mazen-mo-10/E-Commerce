import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Discover Your",
    highlight: "Perfect Device",
    description:
      "Shop the latest electronics at unbeatable prices. Free shipping on orders over $50.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    title: "Experience",
    highlight: "Premium Sound",
    description:
      "Immerse yourself in crystal-clear audio with our premium headphone collection.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    cta: "Shop Headphones",
    link: "/category/headphones",
  },
  {
    id: 3,
    title: "Power Up",
    highlight: "Gaming Setup",
    description:
      "Take your gaming to the next level with high-performance gear and accessories.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=800&fit=crop",
    cta: "Shop Gaming",
    link: "/category/gaming",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section
      className="relative overflow-hidden bg-foreground text-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Product carousel"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 z-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-500",
                  index === currentSlide
                    ? "opacity-100 visible"
                    : "opacity-0 invisible absolute"
                )}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.title}
                  <span className="block text-primary mt-2">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="text-base md:text-lg text-background/80 max-w-md mt-4">
                  {slide.description}
                </p>
                <Link to={slide.link} className="inline-block mt-6">
                  <Button
                    size="lg"
                    variant="cart"
                    className="group rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden w-[90%] mx-auto">
              {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  )}
                />
              ))}
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-6 py-3 font-bold shadow-lg hidden md:block animate-pulse">
              50% OFF
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div
            className="flex gap-2"
            role="tablist"
            aria-label="Carousel navigation"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
                role="tab"
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-background/40 hover:bg-background/60"
                )}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
