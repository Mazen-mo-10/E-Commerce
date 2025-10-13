import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "phones",
    name: "Phones",
    slug: "phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  },
  {
    id: "computers",
    name: "Computers",
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  },
  {
    id: "smartwatch",
    name: "SmartWatch",
    slug: "smartwatch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: "camera",
    name: "Camera",
    slug: "camera",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
  },
  {
    id: "headphones",
    name: "HeadPhones",
    slug: "headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: "gaming",
    name: "Gaming",
    slug: "gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    description:
      "The most advanced iPhone ever with Dynamic Island, Always-On display, and pro camera system.",
    price: 999,
    originalPrice: 1099,
    images: [
      "https://github.com/Mazen-mo-10/imgs/blob/main/iphoneImg1.png?raw=true",
      "https://github.com/Mazen-mo-10/imgs/blob/main/img1IPhone.png?raw=true",
      "https://github.com/Mazen-mo-10/imgs/blob/main/img2IPhone.png?raw=true",
      "https://github.com/Mazen-mo-10/imgs/blob/main/iphoneImg5.png?raw=true",
    ],
    category: "phones",
    rating: 4.8,
    reviewCount: 524,
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "samsung-galaxy-s23",
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Epic performance with built-in S Pen and advanced camera system.",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
    ],
    category: "phones",
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "google-pixel-8",
    name: "Google Pixel 8 Pro",
    description:
      "Google's most advanced AI and camera features in a stunning design.",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
    ],
    category: "phones",
    rating: 4.6,
    reviewCount: 289,
    inStock: true,
  },
  {
    id: "macbook-pro-16",
    name: 'MacBook Pro 16"',
    description:
      "The most powerful MacBook Pro ever with M3 Max chip and stunning Liquid Retina XDR display.",
    price: 2499,
    originalPrice: 2799,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=800&fit=crop",
    ],
    category: "computers",
    rating: 4.9,
    reviewCount: 643,
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15",
    description:
      "Premium laptop with InfinityEdge display and powerful performance.",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop",
    ],
    category: "computers",
    rating: 4.6,
    reviewCount: 324,
    inStock: true,
  },
  {
    id: "surface-laptop-5",
    name: "Microsoft Surface Laptop 5",
    description: "Sleek and powerful laptop with touchscreen display.",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=800&fit=crop",
    ],
    category: "computers",
    rating: 4.5,
    reviewCount: 198,
    inStock: true,
  },
  {
    id: "apple-watch-9",
    name: "Apple Watch Series 9",
    description:
      "The ultimate device for a healthy life with advanced health sensors.",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?w=800&h=800&fit=crop",
    ],
    category: "smartwatch",
    rating: 4.8,
    reviewCount: 891,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "samsung-watch-6",
    name: "Samsung Galaxy Watch 6",
    description:
      "Advanced fitness tracking and health monitoring in a stylish design.",
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    ],
    category: "smartwatch",
    rating: 4.6,
    reviewCount: 456,
    inStock: true,
  },
  {
    id: "sony-a7iv",
    name: "Sony A7 IV",
    description: "Professional full-frame mirrorless camera with 33MP sensor.",
    price: 2499,
    images: [
      "https://github.com/Mazen-mo-10/imgs/blob/main/SonyCamImg.png?raw=true",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop",
    ],
    category: "camera",
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "canon-r6",
    name: "Canon EOS R6 Mark II",
    description: "High-performance hybrid camera for photos and videos.",
    price: 2399,
    images: [
      "https://github.com/Mazen-mo-10/imgs/blob/main/CanonEOSR6Mark.png?raw=true",
    ],
    category: "camera",
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    description:
      "Industry-leading noise cancellation with premium sound quality.",
    price: 399,
    originalPrice: 449,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    ],
    category: "headphones",
    rating: 4.9,
    reviewCount: 1234,
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    description:
      "Active noise cancellation with Adaptive Audio and personalized spatial audio.",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=800&fit=crop",
    ],
    category: "headphones",
    rating: 4.7,
    reviewCount: 876,
    inStock: true,
  },
  {
    id: "ps5-console",
    name: "PlayStation 5",
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD.",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=800&fit=crop",
    ],
    category: "gaming",
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    isFeatured: true,
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    description:
      "The fastest, most powerful Xbox ever with 4K gaming at up to 120fps.",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&h=800&fit=crop",
    ],
    category: "gaming",
    rating: 4.7,
    reviewCount: 1876,
    inStock: true,
  },
  {
    id: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    description:
      "Enjoy vibrant colors and crisp contrast on the 7-inch OLED screen.",
    price: 349,
    images: [
      "https://github.com/Mazen-mo-10/imgs/blob/main/NintendoSwitch.png?raw=true",
    ],
    category: "gaming",
    rating: 4.6,
    reviewCount: 1452,
    inStock: true,
  },
];
