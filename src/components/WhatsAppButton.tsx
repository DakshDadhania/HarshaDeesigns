"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const phoneNumber = "+917283998801";
  const defaultMessage = "Hello! I'm interested in Harsha Deesigns wall textures. Could we schedule a consultation?";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show popup when at top (within 100px)
      if (currentScrollY < 100) {
        setShowOnlineStatus(true);
      } 
      // Hide popup when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowOnlineStatus(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const quickMessages = [
    {
      title: "Lime Wash Consultation",
      message: "Hi! I'd like to explore breathable lime wash textures for my interiors. Can you guide me on shades and site preparation?"
    },
    {
      title: "Exterior Protection Plan",
      message: "Hello! I need recommendations for exterior texture with weather protection inspired by Birla Opus."
    },
    {
      title: "Luxury Finish Package",
      message: "Hi! I'm planning DUCO, decorative paint, and wood polish for my project. Can we discuss timelines and mock-ups?"
    },
    {
      title: "Texture Sampling Visit",
      message: "Hello! Can you arrange a site visit to review texture samples and Birla Opus-inspired palettes?"
    }
  ];

  const handleQuickMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Messages Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 sm:bottom-24 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)]"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Contact</h3>
                  <p className="text-sm text-green-100">Choose a message to send</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 flex-shrink-0"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
              {quickMessages.map((msg, index) => (
                <motion.button
                  key={msg.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuickMessage(msg.message)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors duration-300 border border-gray-200 hover:border-green-200 touch-target"
                >
                  <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">{msg.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{msg.message}</p>
                </motion.button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 touch-target"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Custom Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-target focus-ring"
            aria-label="WhatsApp Contact"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Online Status - Mobile optimized */}
      <AnimatePresence>
        {!isOpen && showOnlineStatus && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 sm:bottom-20 right-4 z-40"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-44 sm:max-w-48">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">We're Online!</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Click to chat with us
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton; 