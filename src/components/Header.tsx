"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+917283998801";
    const message = "Hello! I'm interested in bespoke wall textures and decorative finishes. Please share consultation details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Updated Contact Info */}
      <div className="bg-slate-900/95 backdrop-blur-sm text-white py-1.5 hidden md:block border-b border-white/10">
        <div className="container-custom px-4">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Helly Panchal · +91 72839 98801</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Haresh Panchal · +91 87580 88805</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Sardar Rajmarg Road, Anand 388001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-white/85 backdrop-blur-xl shadow-lg border-b border-white/20" 
            : "bg-white/95 backdrop-blur-md"
        }`}
        style={{ marginTop: isScrolled ? "0" : "30px" }}
      >
        <div className="container-custom px-4">
          <div className="flex items-center justify-between py-2 sm:py-3">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group focus-ring rounded-lg p-1"
              onClick={handleMobileLinkClick}
            >
              <div className="relative">
                <img 
                  src="/images/logo.jpg" 
                  alt="Harsha Deesigns Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Harsha <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Deesigns</span>
                </h1>
                <p className="text-xs text-slate-600 leading-tight">Where protection meets fascination</p>
              </div>
              {/* Mobile Logo Text */}
              <div className="sm:hidden">
                <h1 className="text-base font-bold text-slate-900 leading-tight">
                  Harsha <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Deesigns</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-medium transition-colors duration-300 py-1.5 px-2 rounded-lg group focus-ring text-sm ${
                      isActive ? 'text-green-600' : 'text-slate-700 hover:text-green-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={handleWhatsAppQuote}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Request Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-300 flex items-center justify-center focus-ring"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={handleMobileLinkClick}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl relative z-50"
              >
                <div className="container-custom py-4 pb-6 safe-bottom px-4">
                  <nav className="mobile-spacing">
                  {/* Mobile Contact Info */}
                  <div className="md:hidden mb-4 p-4 bg-slate-50 rounded-xl">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Helly Panchal · +91 72839 98801</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Haresh Panchal · +91 87580 88805</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">hello.harshadeesigns@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={handleMobileLinkClick}
                            className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 touch-target focus-ring ${
                              isActive 
                                ? 'text-green-600 bg-green-50' 
                                : 'text-slate-700 hover:text-green-600 hover:bg-slate-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="pt-4 border-t border-slate-200"
                  >
                    <button
                      onClick={() => {
                        handleWhatsAppQuote();
                        handleMobileLinkClick();
                      }}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                    >
                      Request Consultation
                    </button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header; 