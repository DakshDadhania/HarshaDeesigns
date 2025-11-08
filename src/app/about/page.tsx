"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Zap, Factory, Users, Award, Shield, Globe, CheckCircle, Layers, Hammer } from "lucide-react";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+917283998801";
    const message = "Hello! I'm exploring Harsha Deesigns wall textures. Could we arrange a consultation?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const stats = [
    { number: "18+", label: "Years Crafting Textures", icon: Award },
    { number: "450+", label: "Projects Delivered", icon: Factory },
    { number: "35+", label: "Artisans & Supervisors", icon: Users },
    { number: "12", label: "Signature Collections", icon: Globe },
  ];

  const milestones = [
    { title: "2007 · Harsha Deesigns Established", description: "Helly and Haresh Panchal launch Harsha Deesigns in Anand with a focus on bespoke texture walls and lime finishes." },
    { title: "2012 · Birla Opus Collaboration", description: "Expanded material library with Birla Opus texture collections, enabling premium finishes across luxury residences." },
    { title: "2017 · Spray & Polish Division", description: "Introduced dedicated teams for DUCO spray booths and wood polish, ensuring factory-grade outcomes on site." },
    { title: "2021 · Heritage Projects", description: "Delivered lime plaster restoration across heritage hospitality spaces, refining mock-up and sampling workflows." },
    { title: "2024 · Comprehensive Finish Suite", description: "Integrated stucco, microcement, and decorative paint programs offering end-to-end surface finishing under one roof." }
  ];

  const values = [
    {
      title: "Material Integrity",
      description: "Birla Opus certified textures and globally sourced resins deliver consistent, durable finishes across climates.",
      icon: Shield
    },
    {
      title: "Craftsmanship",
      description: "Skilled artisans trained in lime wash, stucco, DUCO, and wood polish ensure impeccable detailing.",
      icon: Hammer
    },
    {
      title: "Client Collaboration",
      description: "Design workshops, sample approvals, and supervision keep every project aligned with architectural intent.",
      icon: Users
    },
    {
      title: "Sustainability",
      description: "Breathable lime systems, low-VOC paints, and dust-controlled sanding promote healthier interiors.",
      icon: Globe
    },
    {
      title: "Reliability",
      description: "Dedicated project managers, site-specific execution plans, and clean handovers build lasting trust.",
      icon: CheckCircle
    },
    {
      title: "Innovation",
      description: "Continuous research into textures, pigments, and protective topcoats keeps our finishes future-ready.",
      icon: Layers
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
                About <span className="text-green-200">Harsha Deesigns</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                EST 2007 · All about wall textures. We craft lime wash, stucco, decorative paint, wood polish, and DUCO finishes that echo timeless craftsmanship across Gujarat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 rounded-2xl p-8 card-hover"
                >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    <div className="w-12 h-1 bg-green-600 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To celebrate the beauty of textured walls by blending heritage craft with modern palettes, drawing inspiration from Birla Opus collections to enrich homes, hospitality, and retail experiences.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <div className="w-12 h-1 bg-green-700 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To deliver bespoke finishes with uncompromising surface preparation, disciplined timelines, and aftercare guidance—ensuring every project feels crafted, not coated.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A timeline of collaboration, innovation, and textural mastery across Gujarat and beyond.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-4 h-4 bg-green-600 rounded-full border-4 border-green-200 flex-shrink-0 z-10"></div>
                    
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Core Values</span>
              </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that shape every wall, ensuring our textured finishes look exceptional and last longer.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agricultural Excellence */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Texture <span className="text-gradient">Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Every surface is treated as a canvas—primed, skimmed, and layered with curated materials to achieve the desired tactility, sheen, and longevity.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Comprehensive surface analysis and substrate preparation",
                    "Mock-ups for lime wash, stucco, and decorative paint approval",
                    "Birla Opus inspired texture recipes customised per site",
                    "Dust-controlled sanding, masking, and curing protocols",
                    "Detailed maintenance guides shared post handover"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/texture4.jpg" 
                    alt="Harsha Deesigns artisans crafting wall textures"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-800/20 rounded-2xl"></div>
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
                Ready to Transform Your Walls?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a texture consultation to discover lime wash palettes, stucco finishes, DUCO treatments, and wood polish solutions tailored to your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppQuote}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Consultation
                </button>
                <a
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Services
                </a>
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

export default AboutPage; 