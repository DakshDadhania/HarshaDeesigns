"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Layers, Brush, Sparkles, Droplet, Hammer, CheckCircle, ArrowRight, Download, Eye } from "lucide-react";

const ProductsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = (serviceName?: string) => {
    const phoneNumber = "+917283998801";
    const message = serviceName 
      ? `Hello! I'm interested in ${serviceName} by Harsha Deesigns. Could you share consultation slots and next steps?`
      : "Hello! I'm exploring Harsha Deesigns wall textures and finishes. Please share consultation details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const mainProducts = [
    {
      id: 1,
      title: "Texture Work",
      subtitle: "Lime wash, lime plaster & Birla Opus inspired finishes",
      description: "Layered lime systems, micro-textures, and bespoke colour stories bring walls to life with breathable, low-VOC elegance.",
      image: "/images/texturepaint.jpg",
      features: [
        "Surface diagnostics and substrate preparation",
        "Custom mock-ups for tone and texture depth",
        "Birla Opus certified material combinations",
        "Protective sealers for long-term durability",
        "Option of matte, eggshell, or satin topcoats",
        "Detailed aftercare documentation"
      ],
      icon: Layers,
      gradient: "from-emerald-500 to-emerald-600",
      applications: ["Living rooms", "Feature walls", "Façades", "Double-height spaces", "Hospitality lobbies", "Retail concepts"]
    },
    {
      id: 2,
      title: "Decorative Paint",
      subtitle: "Metallic, suede, and artistic paint techniques",
      description: "Statement walls with metallic sheens, suede softness, or textured glazes executed with precision masking and layering.",
      image: "/images/decorativepaint.jpg",
      features: [
        "Colour and moodboard consultation",
        "Laser-guided masking for crisp detailing",
        "Full-scale sampling for design approval",
        "Low odour application workflow",
        "Integration with lighting and art plans",
        "Maintenance-friendly topcoat options"
      ],
      icon: Brush,
      gradient: "from-teal-500 to-green-500",
      applications: ["Bedrooms", "Boutique retail", "Restaurants", "Lobbies", "Ceiling murals", "Installations"]
    },
    {
      id: 3,
      title: "Wood Polish",
      subtitle: "PU, melamine & oil finishes for timber",
      description: "Rich polish systems that enhance grain, deliver smooth touch, and protect cabinetry, panelling, and doors.",
      image: "/images/woodcoating2.jpg",
      features: [
        "Dust-free sanding and prep protocols",
        "Shade matching to veneer and laminate",
        "Custom sheen control from matte to high gloss",
        "Stain, moisture, and scratch resistance",
        "On-site and workshop finishing options",
        "Periodic maintenance guidance"
      ],
      icon: Sparkles,
      gradient: "from-amber-500 to-rose-500",
      applications: ["Wardrobes", "Wall panelling", "Doors", "Furniture", "Ceiling rafters", "Reception desks"]
    },
    {
      id: 4,
      title: "DUCO Paint",
      subtitle: "High-gloss & satin spray finishes",
      description: "Factory-grade HVLP spraying for shutters, kitchens, and custom furniture with mirror-like smoothness.",
      image: "/images/demo-texture-service-4.svg",
      features: [
        "Booth and on-site spray setups",
        "Extensive RAL, NCS, and bespoke colour selection",
        "Multi-layer priming for adhesion strength",
        "Scratch and stain resistant topcoats",
        "Precision masking for hardware and glass",
        "Care instructions post installation"
      ],
      icon: Droplet,
      gradient: "from-sky-500 to-indigo-500",
      applications: ["Kitchen shutters", "Wardrobes", "Display units", "Doors", "Furniture", "Architectural joinery"]
    },
    {
      id: 5,
      title: "Stucco Finish",
      subtitle: "Venetian plaster & microcement",
      description: "Multi-layer stucco and microcement finishes burnished to a luminous sheen for luxury interiors and feature ceilings.",
      image: "/images/stucco.jpg",
      features: [
        "Multi-coat application for depth and strength",
        "Hand-burnished surfaces for natural movement",
        "Moisture and hairline crack resistance",
        "Compatible with curved walls and arches",
        "Optional wax or sealer protection",
        "Custom colour toning to match décor"
      ],
      icon: Hammer,
      gradient: "from-slate-500 to-slate-700",
      applications: ["Ceilings", "Arches", "Bathrooms", "Lobby features", "Columns", "Hospitality suites"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-green-200">Signature Services</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Bespoke wall textures, decorative paintwork, wood polish, DUCO, and stucco finishes crafted with Birla Opus inspired materials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Products */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service <span className="text-gradient">Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our turnkey finishing solutions for residences, hospitality, and commercial spaces.
              </p>
            </motion.div>

            <div className="space-y-20">
              {mainProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center mb-6`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-xl text-green-600 font-medium mb-6">{product.subtitle}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => handleWhatsAppQuote(product.title)}
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                      >
                        <Download className="w-5 h-5" />
                        <span>Book Consultation</span>
                      </button>
                      <button 
                        onClick={() => handleWhatsAppQuote(product.title)}
                        className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Request Samples</span>
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="aspect-[4/3] h-80 sm:h-80 md:h-96 w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Craftsmanship <span className="text-gradient">Standards</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From surface preparation to final sealing, every step is documented, supervised, and executed by specialists to guarantee enduring beauty.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Material Authenticity",
                      description: "Certified Birla Opus textures and premium finishing systems sourced directly from manufacturers"
                    },
                    {
                      title: "Surface Preparation",
                      description: "Moisture checks, crack repairs, and primer systems tailored to each substrate"
                    },
                    {
                      title: "Skilled Execution",
                      description: "Dedicated artisans trained in textures, DUCO spraying, and wood polish techniques"
                    },
                    {
                      title: "Aftercare Support",
                      description: "Detailed maintenance guides and touch-up support for long-term performance"
                    }
                  ].map((standard, index) => (
                    <motion.div
                      key={standard.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{standard.title}</h3>
                        <p className="text-gray-600">{standard.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
                  <div className="text-3xl font-semibold text-green-700 mb-4">Crafted With Care</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Artisan-Led Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every finish is supervised from sampling to handover, ensuring the final outcome mirrors the approved textures and timelines.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Bespoke Textures?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                We align our craft with your design vision—book a consultation to plan samples, schedules, and execution for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppQuote()}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Consultation
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProductsPage; 