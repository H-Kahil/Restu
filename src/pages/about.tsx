import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Restu</h1>

          <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-amber-500">
                Our Story
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2020, Restu began with a simple mission: to deliver
                exceptional food experiences to your doorstep. What started as a
                small operation has grown into a beloved service connecting
                customers with their favorite local restaurants.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our team of food enthusiasts is dedicated to curating the best
                dining options in your area, ensuring that every meal delivered
                is of the highest quality and arrives fresh at your door.
              </p>
            </section>

            <Separator className="bg-gray-800" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-amber-500">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Restu, we believe that great food should be accessible to
                everyone. Our mission is to connect people with the best local
                restaurants and provide a seamless ordering experience from
                start to finish.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We're committed to supporting local businesses and helping them
                reach new customers through our platform. By partnering with
                restaurants that share our values of quality, sustainability,
                and exceptional service, we're building a community around great
                food.
              </p>
            </section>

            <Separator className="bg-gray-800" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-amber-500">
                Why Choose Restu?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                  <h3 className="font-bold text-lg mb-2">Curated Selection</h3>
                  <p className="text-gray-400">
                    We carefully select our restaurant partners to ensure you
                    have access to the best dining options in your area.
                  </p>
                </div>

                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                  <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-gray-400">
                    Our efficient delivery network ensures your food arrives hot
                    and fresh, just as if you were dining in the restaurant.
                  </p>
                </div>

                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                  <h3 className="font-bold text-lg mb-2">
                    AI-Powered Recommendations
                  </h3>
                  <p className="text-gray-400">
                    Our smart algorithm learns your preferences to suggest
                    dishes you'll love, helping you discover new favorites.
                  </p>
                </div>

                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                  <h3 className="font-bold text-lg mb-2">
                    Seamless Experience
                  </h3>
                  <p className="text-gray-400">
                    From browsing to checkout, we've designed every step of the
                    ordering process to be intuitive and hassle-free.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bg-gray-800" />

            <section>
              <h2 className="text-2xl font-bold mb-4 text-amber-500">
                Join Our Team
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We're always looking for passionate individuals to join our
                growing team. Whether you're a developer, designer, or food
                enthusiast, we'd love to hear from you.
              </p>
              <Button className="mt-4 bg-amber-500 hover:bg-amber-600 text-black">
                View Career Opportunities
              </Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
