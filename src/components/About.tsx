import { motion } from "motion/react";
import { Check, Cpu, Award, Users, Compass, ChevronRight } from "lucide-react";
import { FOUNDER_STORY } from "../data";

export default function About() {
  const specialties = [
    "AI Content Creation",
    "Website Development",
    "eCommerce Solutions",
    "Digital Marketing",
    "YouTube Growth",
    "Creative Branding"
  ];

  const valueProps = [
    "Modern Designs",
    "AI Powered Solutions",
    "Fast Delivery",
    "Affordable Pricing",
    "SEO Friendly",
    "Mobile Responsive",
    "24/7 Support",
    "Secure Websites"
  ];

  return (
    <section id="about" className="py-24 relative bg-[#030305] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[35rem] h-[35rem] glow-orb-purple opacity-10" />
      <div className="absolute bottom-[10%] right-[-15%] w-[35rem] h-[35rem] glow-orb-blue opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Brand Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission, Specialties and Why Choose Us */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                <Compass className="w-4 h-4 text-brand-purple animate-pulse" />
                <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase">Our Agency Story</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight"
              >
                About <span className="text-gradient-purple-blue">DIGITAL KERALA TECH</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                DIGITAL KERALA TECH is a modern digital agency helping local and global businesses grow by harnessing cutting-edge AI technologies. Our mission is to provide premium digital services with affordable pricing and professional, unmatched quality.
              </motion.p>
            </div>

            {/* Specialties Bullet Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono tracking-widest uppercase text-gray-400 font-bold">
                Our Primary Specialties:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    <span className="text-sm font-semibold text-gray-200">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-sm font-mono tracking-widest uppercase text-gray-400 font-bold">
                Why Brands Choose Us:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {valueProps.map((prop, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="glass-card rounded-xl p-3 flex flex-col items-center justify-center text-center border border-white/5 hover:border-brand-purple/20 transition-all duration-300"
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-2">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-gray-300">{prop}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story (Beautiful Meticulous Hardware Technician Focus) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-purple/20 to-transparent blur-2xl" />
              
              <div className="space-y-6">
                
                {/* Micro Circuit Line background graphic */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white">
                      <Cpu className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">Precision Legacy</h3>
                      <p className="text-[10px] text-gray-500 font-mono">Micro-Soldering to Code</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-purple">Malappuram, IN</span>
                </div>

                {/* Narrative */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase font-bold">
                    Meet Our Founder
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                    {FOUNDER_STORY.name}
                  </h4>
                  <p className="text-xs text-gray-500 italic">
                    {FOUNDER_STORY.role} • {FOUNDER_STORY.origin}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {FOUNDER_STORY.bio}
                  </p>
                </div>

                {/* Values points list */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {FOUNDER_STORY.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-purple/15 transition-all duration-300">
                      <div className="mt-1 flex items-center justify-center">
                        {idx === 0 && <Award className="w-4 h-4 text-brand-purple" />}
                        {idx === 1 && <Cpu className="w-4 h-4 text-brand-blue" />}
                        {idx === 2 && <Users className="w-4 h-4 text-brand-indigo" />}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white">{pt.title}</h5>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-normal">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Micro credit signature */}
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono mt-6 pt-2 border-t border-white/5">
                  <span>Meticulous Engineering</span>
                  <span>Est. 2026</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
