import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to dynamically render Lucide icons
  const renderIcon = (name: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section id="services" className="py-24 relative bg-[#040407] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] glow-orb-purple opacity-15" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] glow-orb-blue opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Icons.Cpu className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase">Our Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            Elite Solutions to{" "}
            <span className="text-gradient-purple-blue">Scale Your Brand</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            We merge cutting-edge artificial intelligence with extreme human craftsmanship to build experiences that stand out, load instantaneously, and convert.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="glass-card rounded-2xl p-6 sm:p-8 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Hover Sparkle trail */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/20 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brand-purple group-hover:to-brand-blue transition-all duration-300 shadow-inner">
                  {renderIcon(service.iconName, "w-6 h-6 group-hover:scale-110 transition-transform duration-300")}
                </div>

                <h3 className="text-xl font-bold text-white mt-6 group-hover:text-brand-purple transition-colors duration-300 flex items-center justify-between">
                  <span>{service.title}</span>
                  <Icons.ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-brand-purple" />
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Read More button */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                <span>Explore Core Features</span>
                <Icons.ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300 text-brand-purple" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Dialog Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl glass-panel-heavy rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icons.X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-start space-x-4 pt-4 sm:pt-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-lg">
                    {renderIcon(selectedService.iconName, "w-7 h-7")}
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-bold">
                      {selectedService.category} Service
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Long Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-6">
                  {selectedService.longDesc}
                </p>

                {/* Core Features List */}
                <div className="mt-8">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold mb-4 flex items-center">
                    <Icons.ShieldCheck className="w-4 h-4 text-brand-purple mr-2" />
                    Core Deliverables Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center space-x-3 bg-white/5 border border-white/5 rounded-xl p-3"
                      >
                        <Icons.CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0" />
                        <span className="text-sm text-gray-200 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Call to Action */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-400 text-center sm:text-left leading-relaxed">
                    Have custom metrics or questions about this workflow? Let's discuss today.
                  </p>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300"
                  >
                    Discuss Project
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
