import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code, Play, ShieldCheck, Activity } from "lucide-react";
import { SUBTITLE, DESCRIPTION } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#030305]"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] glow-orb-purple opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] glow-orb-blue opacity-25 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Glowing Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-brand-purple animate-spin" style={{ animationDuration: "10s" }} />
              <span className="text-xs font-semibold text-brand-purple tracking-wide uppercase">
                Now Powered by Gemini 3.5 AI
              </span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-none"
            >
              DIGITAL KERALA{" "}
              <span className="text-gradient-purple-blue drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                TECH
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-sans font-semibold text-brand-indigo/90"
            >
              {SUBTITLE}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed"
            >
              {DESCRIPTION}
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-br from-brand-purple to-brand-blue group-hover:from-brand-purple group-hover:to-brand-blue hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300"
              >
                <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-[#030305] rounded-full group-hover:bg-opacity-0 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/10 hover:border-brand-purple/50 bg-white/5 hover:bg-brand-purple/5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 text-center flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
              </a>
            </motion.div>

            {/* Micro proof points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/5 w-full mt-4"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-sans">99%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Precision Code</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-sans">10x</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">AI Efficiency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-sans">24/7</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Tech Support</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Content - Stunning High Fidelity Mockup inspired by VEVOX */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[450px]">
            {/* Background Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-20 hidden sm:flex items-center space-x-3"
            >
              <div className="p-2 bg-brand-purple/20 rounded-xl text-brand-purple">
                <Code className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Full-Stack Dev</span>
                <span className="text-[10px] text-gray-400">Microsecond load times</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-20 hidden sm:flex items-center space-x-3"
            >
              <div className="p-2 bg-brand-blue/20 rounded-xl text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Hardware Precision</span>
                <span className="text-[10px] text-gray-400">Diagnosed & optimized</span>
              </div>
            </motion.div>

            {/* Glowing Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 blur-3xl rounded-full opacity-60 animate-pulse-slow" />

            {/* The VEVOX Laptop + Mobile Interface Mockup */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-video rounded-2xl bg-gradient-to-tr from-brand-purple/20 via-white/5 to-brand-blue/20 p-[1px] shadow-2xl"
            >
              {/* Device body background */}
              <div className="w-full h-full bg-[#07070b]/90 rounded-2xl p-4 overflow-hidden flex flex-col justify-between relative">
                
                {/* Header (URL bar & action dots) */}
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="px-4 py-0.5 rounded-full bg-white/5 text-[9px] text-gray-500 font-mono tracking-wide w-48 text-center truncate">
                    digitalkeralatech.com
                  </div>
                  <div className="w-8 h-2 bg-transparent" />
                </div>

                {/* Dashboard mock grid */}
                <div className="grid grid-cols-12 gap-3 mt-3 flex-1">
                  
                  {/* Left Column (Logo & Heading) */}
                  <div className="col-span-7 flex flex-col justify-between py-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">dkt agency</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                        We build brands <br />
                        <span className="text-brand-purple font-sans font-black">using advanced AI</span>
                      </h3>
                      <p className="text-[9px] text-gray-400 leading-relaxed max-w-[170px]">
                        Microscopic software perfection engineered in Malappuram.
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 bg-brand-purple/20 text-brand-purple border border-brand-purple/30 rounded-full px-2.5 py-1 text-[9px] font-semibold w-max mt-2">
                      <Play className="w-2.5 h-2.5 fill-brand-purple" />
                      <span>Launch Brand</span>
                    </div>
                  </div>

                  {/* Right Column (Visual Analytics Charts) */}
                  <div className="col-span-5 bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[8px] text-gray-400">
                        <span>Overview</span>
                        <Activity className="w-3 h-3 text-brand-blue" />
                      </div>
                      <div className="text-sm font-bold text-white mt-1">24.8K</div>
                      <div className="text-[7px] text-green-400 font-medium">+15.5% this month</div>
                    </div>

                    {/* mini chart bars */}
                    <div className="flex items-end space-x-1 h-12 pt-2">
                      <div className="w-full bg-brand-purple/20 rounded-t-sm h-[30%]" />
                      <div className="w-full bg-brand-purple/40 rounded-t-sm h-[45%]" />
                      <div className="w-full bg-brand-purple/60 rounded-t-sm h-[60%]" />
                      <div className="w-full bg-brand-blue/60 rounded-t-sm h-[40%]" />
                      <div className="w-full bg-brand-blue/80 rounded-t-sm h-[75%]" />
                      <div className="w-full bg-gradient-to-t from-brand-purple to-brand-blue rounded-t-sm h-[95%]" />
                    </div>
                  </div>
                </div>

                {/* Grid social rows */}
                <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-white/5">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-[7px] block text-gray-500 uppercase tracking-wider font-mono">Instagram</span>
                    <span className="text-[10px] font-bold text-brand-purple">12.4K</span>
                    <span className="text-[6px] block text-green-400">+8.2%</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-[7px] block text-gray-500 uppercase tracking-wider font-mono">YouTube</span>
                    <span className="text-[10px] font-bold text-brand-blue">8.7K</span>
                    <span className="text-[6px] block text-green-400">+15.3%</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-[7px] block text-gray-500 uppercase tracking-wider font-mono">Facebook</span>
                    <span className="text-[10px] font-bold text-white">3.6K</span>
                    <span className="text-[6px] block text-green-400">+5.7%</span>
                  </div>
                </div>

                {/* Floating Micro Phone Mockup overlap - iconic VEVOX style! */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-4 right-4 w-28 aspect-[9/19] rounded-xl bg-black border border-white/20 p-[3px] shadow-2xl hidden md:block"
                >
                  <div className="w-full h-full bg-[#050508] rounded-[9px] p-1.5 flex flex-col justify-between overflow-hidden relative">
                    {/* Notch */}
                    <div className="w-10 h-1.5 bg-black rounded-full mx-auto" />
                    
                    {/* Phone internal screen */}
                    <div className="flex-1 flex flex-col justify-between pt-2">
                      <div className="space-y-1">
                        <div className="w-4 h-1 bg-white/20 rounded-full" />
                        <div className="text-[6px] font-bold text-white tracking-wider leading-tight">
                          We grow brands <span className="text-brand-purple">rapidly</span>
                        </div>
                      </div>

                      {/* Phone central orb visual */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue p-[1px] mx-auto my-1 flex items-center justify-center relative">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                          <span className="text-[5px] text-brand-purple uppercase tracking-tighter">AI Core</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-blue rounded-full blur-[2px] opacity-60 -z-10" />
                      </div>

                      <div className="bg-white/5 border border-white/10 p-1 rounded-md text-center">
                        <span className="text-[5px] block text-gray-500">ENGAGEMENT</span>
                        <span className="text-[7px] font-bold text-green-400">+28.5%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
