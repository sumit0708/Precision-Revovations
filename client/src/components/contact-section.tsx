import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Star } from "lucide-react";

const contactFormSchema = insertContactSubmissionSchema.extend({
  phone: insertContactSubmissionSchema.shape.phone.optional(),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      projectDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(416) 555-0123",
      subtitle: "Mon-Fri 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eliterenos.ca",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Greater Toronto Area",
      subtitle: "Blue Mountain Region"
    }
  ];

  const whyChooseUs = [
    "Licensed & Fully Insured",
    "15+ Years of Experience",
    "Free Detailed Quotes",
    "Warranty on All Work",
    "Local GTA & Blue Mountain"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-secondary mb-6">Get Your Free Quote</h2>
          <p className="text-xl text-construction-text max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for a free consultation and detailed quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-2xl shadow-lg p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-construction-secondary mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-construction-secondary mb-2">
                    Thank You!
                  </h4>
                  <p className="text-construction-text mb-4">
                    Your message has been sent successfully. We'll contact you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-construction-text">
                              First Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John" 
                                {...field} 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-construction-text">
                              Last Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Doe" 
                                {...field} 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-construction-text">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="john@example.com" 
                              {...field} 
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-construction-text">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="(416) 555-0123" 
                              {...field} 
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-construction-text">
                            Service Needed
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors">
                                <SelectValue placeholder="Select a service..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Kitchen Renovation">Kitchen Renovation</SelectItem>
                              <SelectItem value="Bathroom Renovation">Bathroom Renovation</SelectItem>
                              <SelectItem value="Home Projects">Home Projects</SelectItem>
                              <SelectItem value="Outdoor Decks">Outdoor Decks</SelectItem>
                              <SelectItem value="House Painting">House Painting</SelectItem>
                              <SelectItem value="Flooring Work">Flooring Work</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-construction-text">
                            Project Details
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your renovation project..." 
                              {...field} 
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-primary focus:border-transparent transition-colors"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full bg-construction-primary text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Clock className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-construction-secondary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-construction-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <IconComponent className="text-construction-primary h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-construction-secondary mb-1">{info.title}</h4>
                          <p className="text-construction-text">{info.content}</p>
                          <p className="text-sm text-gray-500">{info.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-construction-primary text-white rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Why Choose Elite Renovations?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-construction-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
