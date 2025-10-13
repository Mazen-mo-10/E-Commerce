import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  const stats = [
    { value: "10.5k", label: "Sellers active on our site" },
    { value: "33k", label: "Monthly product sales" },
    { value: "45.5k", label: "Happy customers" },
    { value: "25k", label: "Annual gross sales" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Launched in 2015, EShop is South Asia's premier online shopping marketplace with an active presence in multiple countries. Supported by a wide range of tailored marketing, data, and service solutions, EShop has established itself as the number one destination for online shopping.
                </p>
                <p>
                  EShop has more than 10,500 sellers and 300 brands and serves 3 million customers across the region. Our platform offers a diverse selection of products across various categories, ensuring that customers can find everything they need in one convenient location.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Our Store"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg border bg-card hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary group-hover:bg-primary-foreground/20 mb-4">
                  <svg
                    className="h-10 w-10 group-hover:text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team works tirelessly to provide you with the best online shopping experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg bg-secondary aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://twitter.com"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
