import { Button } from "@/components/ui/button";
import { Calendar, Images, Star, CheckCircle, Award } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-construction-neutral to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-construction-secondary leading-tight mb-6">
              Transform Your Home Into Your Dream Space
            </h1>
            <p className="text-xl text-construction-text mb-8 leading-relaxed">
              Professional renovation services across GTA and Blue Mountain. From kitchens to complete home makeovers, we bring your vision to life with exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-construction-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('gallery')} 
                variant="outline"
                className="border-2 border-construction-primary text-construction-primary px-8 py-4 rounded-lg hover:bg-construction-primary hover:text-white transition-all duration-200 font-semibold text-lg"
              >
                <Images className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-construction-text">
              <div className="flex items-center">
                <Star className="text-construction-accent mr-1 h-4 w-4 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-1 h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="text-construction-accent mr-1 h-4 w-4" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern home renovation showcasing contemporary kitchen design" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-construction-secondary">500+ Projects</p>
                  <p className="text-sm text-construction-text">Successfully Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
