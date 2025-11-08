"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Layers, Brush, Sparkles, Droplet, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+917283998801";
    const message = "Hello! I'm planning surface finishes with Harsha Deesigns. Please share consultation slots.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    {
      id: 1,
      title: "Texture Work",
      subtitle: "Hand-trowelled lime wash & plaster finishes",
      description: "Breathable lime systems, travertine effects, and Birla Opus inspired palettes tailored for interiors and facades with layered depth and soft tactility.",
      image: "/images/demo-texture-service-1.svg",
      features: [
        "Custom samples and mock-ups",
        "Breathable, low VOC formulations",
        "Option of matte, eggshell, or satin breaks",
        "Protective sealers for long-term performance"
      ],
      icon: Layers,
      gradient: "from-emerald-500 to-emerald-600",
      link: "/products"
    },
    {
      id: 2,
      title: "Decorative Paint",
      subtitle: "Feature walls with artisanal paint techniques",
      description: "Metallic, suede, and micro-texture paint treatments executed with precision to enrich lobbies, bedrooms, and retail zones.",
      image: "/images/demo-texture-service-2.svg",
      features: [
        "Moodboard and colour consultation",
        "Birla Opus and global paint library",
        "Laser-guided masking for crisp patterns",
        "Aftercare guidance for stain resistance"
      ],
      icon: Brush,
      gradient: "from-green-500 to-teal-500",
      link: "/products"
    },
    {
      id: 3,
      title: "Wood Polish",
      subtitle: "Rich polish systems for furniture & panelling",
      description: "Italian PU, melamine, and oil finishes that highlight timber grain while delivering durable sheen control and smooth touch.",
      image: "/images/demo-texture-service-3.svg",
      features: [
        "Shade matching and grain enhancement",
        "Low-odour application sequence",
        "Dust-free sanding protocols",
        "Topcoat selection for usage patterns"
      ],
      icon: Sparkles,
      gradient: "from-amber-500 to-rose-500",
      link: "/products"
    },
    {
      id: 4,
      title: "DUCO Paint",
      subtitle: "High-gloss and satin spray for shutters & kitchens",
      description: "Factory-grade HVLP spraying, precision masking, and oven curing support for wardrobes, kitchens, and bespoke furniture.",
      image: "/images/demo-texture-service-4.svg",
      features: [
        "Smooth mirror-finish results",
        "Wide RAL and NCS colour selection",
        "Scratch and stain resistant topcoats",
        "On-site or booth finishing options"
      ],
      icon: Droplet,
      gradient: "from-sky-500 to-indigo-500",
      link: "/products"
    },
    {
      id: 5,
      title: "Stucco Finish",
      subtitle: "Venetian and microcement textures",
      description: "Multi-coat stucco layers polished to luminescent depth, ideal for statement ceilings, arches, and feature walls.",
      image: "/images/demo-texture-service-5.svg",
      features: [
        "Multi-stage polishing for sheen",
        "Moisture and crack resistance",
        "Precision on curves and niches",
        "Protective wax or sealer options"
      ],
      icon: Layers,
      gradient: "from-slate-500 to-slate-700",
      link: "/products"
    }
  ];

  // Show only 3 products on mobile, all products on larger screens
  const displayedProducts = isMobile ? products.slice(0, 3) : products;

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Products Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4 sm:mb-6 text-slate-900">
            Our <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Signature Services</span>
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Bespoke wall textures, decorative paintwork, and finishing solutions crafted with premium Birla Opus materials and artisanal techniques.
          </p>
        </motion.div>

        {/* Main Products Grid */}
        <div className="mobile-product-grid mb-16 sm:mb-20">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-80 sm:h-72 md:h-80 lg:h-72">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-14 h-14 sm:w-14 sm:h-14 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <product.icon className="w-7 h-7 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-7 lg:p-8">
                <h3 className="heading-sm text-slate-900 mb-3">{product.title}</h3>
                <p className="text-green-600 font-medium mb-4 text-base sm:text-lg">{product.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-base sm:text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-600">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/products"
                  className={`group/btn inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 w-full touch-target focus-ring text-base sm:text-lg`}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
            <div className="relative z-10">
              <h3 className="heading-md mb-4 sm:mb-6">
                Need Bulk Orders?
              </h3>
              <p className="body-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300 px-4">
                We offer competitive pricing for bulk orders and can customize packaging 
                according to your specific requirements. Contact us for detailed quotations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <button 
                  onClick={handleWhatsAppQuote}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg touch-target focus-ring"
                >
                  Request Quote
                </button>
                <Link 
                  href="/products"
                  className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:border-white touch-target focus-ring"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection; 