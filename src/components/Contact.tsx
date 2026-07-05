import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { BRAND_NAME } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simple verification validations
    if (!formData.name.trim()) {
      setError("Please specify your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please specify a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please specify your phone number.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please type a message.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate server response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#040407] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[40%] left-[-10%] w-[35rem] h-[35rem] glow-orb-purple opacity-10" />
      <div className="absolute bottom-[5%] right-[-10%] w-[35rem] h-[35rem] glow-orb-blue opacity-15" />

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
            <Mail className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase">Contact Center</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            Launch Your Brand <span className="text-gradient-purple-blue">Today</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-sm sm:text-base"
          >
            Fill out the inquiry form below, and Muhammed Suhaib and our technical solutions team will review your requirements and reach out within 12 hours.
          </motion.p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {BRAND_NAME} Headquarters
              </h3>
              
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple flex-shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-bold">Office Location</h4>
                    <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                      Kizhisseri, Malappuram district,<br />Kerala, India - PIN 673641
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-bold">Email Communications</h4>
                    <p className="text-sm font-semibold text-white mt-1 hover:text-brand-purple transition-colors duration-200">
                      <a href="mailto:digitalkeralatech@gmail.com">digitalkeralatech@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-indigo flex-shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-bold">Direct Support</h4>
                    <p className="text-sm font-semibold text-white mt-1 hover:text-brand-purple transition-colors duration-200">
                      <a href="tel:+919876543210">+91 98765 43210</a>
                    </p>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple flex-shrink-0 shadow-inner">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-bold">Operation Window</h4>
                    <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                      24/7 Mon - Sun • Urgent Support Available
                    </p>
                  </div>
                </div>

              </div>

              {/* Secure Trust Stamp */}
              <div className="pt-6 border-t border-white/5 flex items-center space-x-3 text-gray-500 text-xs font-mono">
                <ShieldCheck className="w-5 h-5 text-brand-purple" />
                <span>Secure HTTPS data channel</span>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 font-sans tracking-wide block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Muhammed Suhaib"
                      className="w-full bg-white/5 border border-white/10 hover:border-brand-purple/30 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 font-sans tracking-wide block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. custom@domain.com"
                      className="w-full bg-white/5 border border-white/10 hover:border-brand-purple/30 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 shadow-inner"
                    />
                  </div>

                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-300 font-sans tracking-wide block">
                    Phone Number (WhatsApp Preferred)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-white/5 border border-white/10 hover:border-brand-purple/30 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 shadow-inner"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-300 font-sans tracking-wide block">
                    Tell us about your project or goal
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe what you want to build (AI content, custom eCommerce, corporate website etc.)..."
                    className="w-full bg-white/5 border border-white/10 hover:border-brand-purple/30 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 shadow-inner resize-none"
                  />
                </div>

                {/* Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-xs text-red-400 font-semibold text-center"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-br from-brand-purple to-brand-blue group-hover:from-brand-purple group-hover:to-brand-blue hover:text-white focus:ring-4 focus:outline-none focus:ring-brand-purple/50 shadow-md transition-all duration-300"
                >
                  <span className="relative w-full py-4 transition-all ease-in duration-75 bg-[#050508] rounded-[11px] group-hover:bg-opacity-0 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Success Modal Drawer */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md glass-panel-heavy rounded-3xl p-8 text-center shadow-2xl z-10"
            >
              <div className="w-16 h-16 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-white">Transmission Successful</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Your message has been secure-routed directly to the DIGITAL KERALA TECH command desk in Malappuram. Muhammed Suhaib and the team will contact you shortly.
              </p>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full mt-8 py-3.5 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-lg hover:shadow-brand-purple/20 hover:scale-[1.02] transition-all duration-300"
              >
                Return to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
