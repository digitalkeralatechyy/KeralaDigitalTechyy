import { motion } from "motion/react";
import { Star, MessageSquareCode, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-[#030305] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[30%] right-[5%] w-[30rem] h-[30rem] glow-orb-purple opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[30rem] h-[30rem] glow-orb-blue opacity-10 animate-pulse-slow" style={{ animationDelay: "2.5s" }} />

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
            <MessageSquareCode className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase">Client Reviews</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            What Our Partners <span className="text-gradient-purple-blue">Say About Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-sm sm:text-base"
          >
            Read reviews from local Malappuram and global enterprises who scaled their systems and visual branding with DIGITAL KERALA TECH.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Floating Quote icon decorative */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-brand-purple/10 transition-colors duration-300">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Stars Row */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed relative z-10 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center space-x-3.5">
                {/* Simulated Avatar initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white text-xs font-black shadow-md uppercase">
                  {testimonial.author.slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] font-mono tracking-wider text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
