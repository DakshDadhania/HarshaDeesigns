"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Home, Info, Briefcase, Phone, Shield, FileText, Map } from "lucide-react";

const SitemapPage = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Welcome to Harsha Deesigns" },
        { name: "About Us", href: "/about", description: "Learn about our company and journey" },
        { name: "Services", href: "/products", description: "Explore our wall texture and finishing services" },
        { name: "Contact", href: "/contact", description: "Get in touch with us" },
      ]
    },
    {
      title: "Our Services",
      icon: Briefcase,
      links: [
        { name: "Texture Work", href: "/products#texture-work", description: "Lime wash, lime plaster & Birla Opus finishes" },
        { name: "Decorative Paint", href: "/products#decorative-paint", description: "Metallic, suede, and artistic paint techniques" },
        { name: "Wood Polish", href: "/products#wood-polish", description: "PU, melamine & oil finishes for timber" },
        { name: "DUCO Paint", href: "/products#duco-paint", description: "High-gloss & satin spray finishes" },
        { name: "Stucco Finish", href: "/products#stucco-finish", description: "Venetian plaster & microcement" },
      ]
    },
    {
      title: "Legal & Information",
      icon: Shield,
      links: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", href: "/terms", description: "Our service terms and conditions" },
        { name: "Sitemap", href: "/sitemap", description: "You are here" },
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Map className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Navigate through all pages and services of Harsha Deesigns
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-green-600 group-hover:text-green-700 mb-1">
                            {link.name}
                          </h3>
                          <p className="text-sm text-gray-600">{link.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Our team is here to help. Contact us for any questions about our services or to schedule a consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SitemapPage;

