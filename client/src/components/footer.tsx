import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "Kitchen Renovation",
    "Bathroom Renovation", 
    "Home Projects",
    "Outdoor Decks",
    "House Painting",
    "Flooring Work"
  ];

  return (
    <footer className="bg-construction-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Elite Renovations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming homes across GTA and Blue Mountain with exceptional craftsmanship and personalized service. Your trusted partner for all renovation needs.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="hover:text-white transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(416) 555-0123</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@eliterenos.ca</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>GTA & Blue Mountain</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elite Renovations. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
}
