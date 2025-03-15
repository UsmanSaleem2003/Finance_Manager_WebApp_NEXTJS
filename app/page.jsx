import HeroSection from "@/components/customComponents/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorksData, statsData, featuresData, testimonialsData, platformData } from "@/data/main_page_data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-12">
            {platformData.map((stat, index) => (
              <div key={index} className="text-center p-12 bg-fuchsia-100 border-[1px] border-purple-200 shadow-2xl shadow-purple-300 rounded-sm  transition-transform duration-300 hover:scale-105 select-none hover:shadow-purple-400">
                <div className="text-4xl font-bold text-[#441247] mb-2 ">{stat.label}</div>
                <div className="text-gray-700 text-md">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 mt-20 bg-gradient-to-r from-blue-100 via-sky-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#221755] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="continer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Covering Every Aspect Of Your Financial Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 shadow-xl shadow-blue-100  transition-transform duration-300 hover:scale-105 select-none">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <h3 className="text-gray-600">{feature.description}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-blue-100 via-sky-100 to-emerald-100">
        <div className="continer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="continer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-xl shadow-blue-100">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-blue-600">
        <div className="continer mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4">Ready for a more secure financial future?</h2>
          <p className="ext-blue-100 mb-8 max-w-2xl mx-auto">Join a thriving community of users who trust 'FINMAN' for smarter financial management</p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
              Get Your Free Trial
            </Button>
          </Link>

        </div>
      </section>


    </div>
  );
}
