"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Zap, Users, CheckCircle, Factory, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "18+", label: "Years Crafting Textures", icon: Award },
    { number: "450+", label: "Projects Delivered", icon: Factory },
    { number: "35+", label: "Specialist Artisans", icon: Users },
    { number: "12", label: "Texture Collections", icon: CheckCircle },
  ];

  const whyChooseUs = [
    {
      title: "Interior & Exterior Mastery",
      description: "Lime wash, lime plaster, stucco, and protective exterior coatings tailored to Gujarat's climate conditions.",
      icon: Shield
    },
    {
      title: "Design-Led Detailing",
      description: "Collaborative sampling, mock-ups, and colour consultation to align textures with architectural narratives.",
      icon: CheckCircle
    },
    {
      title: "Premium Material Library",
      description: "Birla Opus certified textures and high-performance finishes selected for durability, washability, and sheen balance.",
      icon: Zap
    },
    {
      title: "Seamless Project Execution",
      description: "Dedicated site supervisors, safety-first practices, and tidy handovers for residential and commercial sites.",
      icon: Award
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* About Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Harsha Deesigns</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2007, Harsha Deesigns curates handcrafted wall textures, lime finishes, decorative paints, and wood polishes that elevate spaces with timeless character and artisanal precision.
          </p>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To shape evocative spaces where textured surfaces tell stories— marrying heritage craft techniques with modern palettes inspired by Birla Opus collections for enduring, personalised environments.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To deliver bespoke texture solutions with meticulous surface preparation, premium materials, and disciplined site execution—ensuring every wall reflects the client's lifestyle and stands up to daily use.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-8 mb-20 border border-slate-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Harsha Deesigns</span>?
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We translate texture inspiration into enduring surfaces through curated materials, sample-based approvals, and disciplined craftsmanship on every site across Gujarat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
              className="glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white mt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Signature Texture & Finish Portfolio
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-slate-200">
              From breathable lime wash and lime plaster to decorative paint, wood polish, DUCO, and stucco finishes, we choreograph complete wall transformations with premium material systems inspired by Birla Opus texture collections.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              We manage sampling, mock-ups, execution schedules, and final protection—ensuring each surface ages gracefully while reflecting our clients' design intent across residences, hospitality venues, and commercial spaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 