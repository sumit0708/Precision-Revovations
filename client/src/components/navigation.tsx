import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-construction-primary">Elite Renovations</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-construction-text hover:text-construction-primary transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-construction-text hover:text-construction-primary transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-construction-text hover:text-construction-primary transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-construction-text hover:text-construction-primary transition-colors duration-200 font-medium"
              >
                Gallery
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-construction-primary text-white hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get Quote
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-construction-text hover:text-construction-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block px-3 py-2 text-construction-text hover:text-construction-primary w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block px-3 py-2 text-construction-text hover:text-construction-primary w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block px-3 py-2 text-construction-text hover:text-construction-primary w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block px-3 py-2 text-construction-text hover:text-construction-primary w-full text-left"
            >
              Gallery
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="block mx-3 my-2 bg-construction-primary text-white text-center"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
