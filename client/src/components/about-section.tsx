import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9★", label: "Customer Rating" },
    { number: "100%", label: "Licensed & Insured" }
  ];

  const serviceAreas = [
    "Toronto", "Blue Mountain", "Mississauga", "Collingwood",
    "Brampton", "Wasaga Beach", "Vaughan", "Barrie"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-construction-secondary mb-6">Serving GTA & Blue Mountain</h2>
            <p className="text-lg text-construction-text mb-6 leading-relaxed">
              With over 15 years of experience, Elite Renovations has been transforming homes across the Greater Toronto Area and Blue Mountain region. Our team of skilled craftsmen and designers work together to bring your renovation dreams to life.
            </p>
            <p className="text-lg text-construction-text mb-8 leading-relaxed">
              We pride ourselves on exceptional quality, attention to detail, and transparent communication throughout every project. From initial consultation to final walkthrough, we ensure your complete satisfaction.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 bg-white shadow-sm">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-construction-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-construction-text">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white p-6 shadow-sm border-l-4 border-construction-primary">
              <CardContent className="p-0">
                <h3 className="font-semibold text-construction-secondary mb-2">Our Service Areas</h3>
                <p className="text-construction-text text-sm mb-3">We proudly serve homeowners throughout:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-construction-text">
                  {serviceAreas.map((area, index) => (
                    <div key={index}>• {area}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team working on home renovation project" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            {/* Floating testimonial card */}
            <Card className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border max-w-xs">
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="flex text-construction-accent text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-construction-text mb-3">
                  "Outstanding work on our kitchen renovation. Professional, on-time, and exceeded expectations!"
                </p>
                <div className="text-xs text-gray-500">- Sarah M., Toronto</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
