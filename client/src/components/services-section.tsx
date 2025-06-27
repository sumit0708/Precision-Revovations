import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Bath, Home, TreePine, PaintbrushVertical, Layers, Check } from "lucide-react";

const services = [
  {
    title: "Kitchen Renovation",
    description: "Complete kitchen makeovers including custom cabinets, countertops, flooring, and modern appliances.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Custom Cabinetry", "Premium Countertops", "Modern Appliances", "Lighting Design"]
  },
  {
    title: "Bathroom Renovation",
    description: "Luxury bathroom transformations with premium fixtures, modern designs, and spa-like finishes.",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Luxury Fixtures", "Custom Tiling", "Vanity Installation", "Heated Floors"]
  },
  {
    title: "Home Projects",
    description: "Complete home renovations, additions, and major structural improvements for growing families.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Room Additions", "Basement Finishing", "Whole Home Renos", "Structural Work"]
  },
  {
    title: "Outdoor Decks",
    description: "Custom deck construction and outdoor living spaces perfect for entertaining and relaxation.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Custom Design", "Premium Materials", "Railings & Stairs", "Outdoor Lighting"]
  },
  {
    title: "House Painting",
    description: "Professional interior and exterior painting services using premium paints and expert techniques.",
    icon: PaintbrushVertical,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Premium Finishes"]
  },
  {
    title: "Flooring Work",
    description: "Professional flooring installation including hardwood, laminate, tile, and luxury vinyl options.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    features: ["Hardwood Floors", "Tile Installation", "Luxury Vinyl", "Carpet Installation"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-secondary mb-6">Our Renovation Services</h2>
          <p className="text-xl text-construction-text max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive renovation services to transform every space in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={`${service.title} renovation work showcasing professional quality`} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-construction-primary/10 p-3 rounded-lg mr-4">
                      <IconComponent className="text-construction-primary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-construction-secondary">{service.title}</h3>
                  </div>
                  <p className="text-construction-text mb-4">{service.description}</p>
                  <ul className="text-sm text-construction-text space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-green-500 mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-construction-primary text-white hover:bg-blue-700 transition-colors duration-200 font-semibold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
