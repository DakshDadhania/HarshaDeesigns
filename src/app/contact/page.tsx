"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+917283998801";
    const message = "Hello! I'm interested in Harsha Deesigns wall textures and finishes. Could we schedule a consultation?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    productInterest: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to FormSpree
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["Helly Panchal · +91 72839 98801", "Haresh Panchal · +91 87580 88805"],
      description: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello.harshadeesigns@gmail.com"],
      description: "We respond within one business day"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Sardar Rajmarg Road", "Anand - 388001, Gujarat"],
      description: "Studio visits by appointment"
    },
    
  ];

  const offices = [
    {
      title: "Design Studio & Sample Library",
      address: "Sardar Rajmarg Road, Anand - 388001, Gujarat",
      phone: "+91 72839 98801",
      email: "hello.harshadeesigns@gmail.com",
      hours: "Mon-Sat: 10:00 AM - 6:00 PM",
      mapLink: "https://maps.app.goo.gl/Hayy4KYkqmjBwwHD8"
    },
    {
      title: "Project Coordination Desk",
      address: "On-site across Gujarat with central coordination from Anand",
      phone: "+91 87580 88805",
      email: "hello.harshadeesigns@gmail.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      mapLink: "https://maps.app.goo.gl/Hayy4KYkqmjBwwHD8"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center safe-top">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <h1 className="heading-xl mb-4 sm:mb-6">
                Plan Your <span className="text-green-200">Texture Project</span>
              </h1>
              <p className="body-lg max-w-3xl mx-auto leading-relaxed">
                Share your design vision and surfaces—we will translate them into bespoke lime wash, stucco, decorative paint, DUCO, or wood polish finishes inspired by Birla Opus textures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-4 sm:mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="body-lg text-gray-600 max-w-2xl mx-auto px-4">
                Connect with our artisans and supervisors for bespoke wall texture consultations and project planning.
              </p>
            </motion.div>

            <div className="mobile-grid mb-12 sm:mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 sm:p-8 text-center card-hover"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
                  </div>
                  <h3 className="heading-sm text-gray-900 mb-3 sm:mb-4">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium mb-1 text-sm sm:text-base">{detail}</p>
                  ))}
                  <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 sm:p-8 shadow-lg order-2 lg:order-1"
              >
                <h3 className="heading-md text-gray-900 mb-4 sm:mb-6">Share Your Requirement</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Tell us about your surfaces, finishes, and timeline. We will reply with curated texture suggestions, sample plans, and execution schedules within one business day.
                </p>

                <form action="https://formspree.io/f/movwwakp" method="POST" className="mobile-spacing">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-10 sm:pl-12"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-10 sm:pl-12"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="form-input pl-10 sm:pl-12"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input pl-10 sm:pl-12"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select a product</option>
                        <option value="texture-work">Texture Work</option>
                        <option value="decorative-paint">Decorative Paint</option>
                        <option value="wood-polish">Wood Polish</option>
                        <option value="duco-paint">DUCO Paint</option>
                        <option value="stucco">Stucco / Venetian</option>
                        <option value="consultation">Site Consultation</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="form-textarea pl-10 sm:pl-12"
                        placeholder="Tell us about your project scope, surface area, finish preferences, timeline, and any Birla Opus textures that inspire you..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full focus-ring"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>

              {/* Company Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mobile-spacing order-1 lg:order-2"
              >
                {/* Map */}
                <div className="glass-card rounded-2xl h-48 sm:h-64 flex items-center justify-center mb-6 sm:mb-8 overflow-hidden">
                  <div className="text-center p-6">
                    <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-600 font-medium mb-2">Visit Our Studio</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Sardar Rajmarg Road, Anand - 388001</p>
                    <a 
                      href="https://maps.app.goo.gl/Hayy4KYkqmjBwwHD8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm focus-ring"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="space-y-4 sm:space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="glass-card p-4 sm:p-6 shadow-lg card-hover"
                    >
                      <h4 className="heading-sm text-gray-900 mb-3 sm:mb-4">{office.title}</h4>
                      <div className="mobile-spacing text-gray-600 text-sm sm:text-base">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="break-all">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="heading-lg text-gray-900 mb-4 sm:mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="body-lg text-gray-600 max-w-2xl mx-auto px-4">
                Quick answers to common questions about our wall textures, finishes, and site process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  question: "Do you provide on-site mock-ups?",
                  answer: "Yes. We prepare wall or panel mock-ups so you can evaluate colour, depth, and sheen before full execution."
                },
                {
                  question: "Which regions do you serve?",
                  answer: "We primarily serve Gujarat—Anand, Vadodara, Ahmedabad, Surat, Rajkot—and take select outstation projects on request."
                },
                {
                  question: "Can you match Birla Opus inspirations?",
                  answer: "Absolutely. We reference Birla Opus texture families and customise shades to align with your interior palette."
                },
                {
                  question: "How do you protect completed surfaces?",
                  answer: "We apply protective sealers, schedule curing windows, and share maintenance guides for long-lasting finishes."
                },
                {
                  question: "What details help you quote accurately?",
                  answer: "Surface area, substrate condition, finish preference, timeline, and reference images help us share precise budgets."
                },
                {
                  question: "Do you work with architects and designers?",
                  answer: "Yes, we collaborate with architects, interior designers, and PMC teams to align textures with the overall design vision."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
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
              className="px-4"
            >
              <h2 className="heading-lg mb-4 sm:mb-6">
                Ready to Elevate Your Walls?
              </h2>
              <p className="body-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with our texture specialists for curated material selections, site supervision, and a seamless finish journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <button 
                  onClick={handleWhatsAppQuote}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-target focus-ring"
                >
                  Book Consultation
                </button>
                <button 
                  onClick={handleWhatsAppQuote}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl touch-target focus-ring"
                >
                  Schedule Site Visit
                </button>
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

export default ContactPage; 