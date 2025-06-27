import { Button } from "@/components/ui/button";
import { SearchCode } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern kitchen renovation with large island and pendant lighting",
    title: "Kitchen Renovation"
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Luxurious bathroom renovation with freestanding soaking tub and marble tiles",
    title: "Bathroom Renovation"
  },
  {
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Custom outdoor deck construction with modern outdoor furniture and lighting",
    title: "Deck Construction"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Living room renovation with hardwood flooring and modern design",
    title: "Flooring Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Home exterior painting and renovation showing fresh paint and modern curb appeal",
    title: "Exterior Painting"
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Finished basement renovation showing complete transformation into living space",
    title: "Basement Finishing"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-secondary mb-6">Our Work Gallery</h2>
          <p className="text-xl text-construction-text max-w-3xl mx-auto">
            Browse through our portfolio of completed projects and see the quality craftsmanship that sets us apart.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <SearchCode className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-construction-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg">
            <SearchCode className="mr-2 h-5 w-5" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
