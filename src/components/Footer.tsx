import { Cpu, Youtube, Facebook, Instagram, Linkedin, Heart, Shield } from "lucide-react";
import { BRAND_NAME, SUBTITLE } from "../data";

export default function Footer() {
  const currentYear = 2026;

  const servicesLinks = [
    { name: "Website Development", href: "#services" },
    { name: "AI Video Creation", href: "#services" },
    { name: "eCommerce", href: "#services" },
    { name: "Portfolio", href: "#services" },
    { name: "Graphic Design", href: "#services" },
    { name: "YouTube Branding", href: "#services" }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-[#020204] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      
      {/* Decorative backlights */}
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] glow-orb-purple opacity-5" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] glow-orb-blue opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Logo & Intro Brand info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2 group w-max">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue p-[1px]">
                <div className="flex items-center justify-center w-full h-full bg-[#020204] rounded-[11px] group-hover:bg-transparent transition-all duration-300">
                  <Cpu className="w-4 h-4 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <span className="font-sans font-extrabold tracking-wider text-white text-lg">
                {BRAND_NAME}
              </span>
            </a>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              {SUBTITLE}. We engineer micro-precision websites, high-conversion eCommerce storefronts, and elite AI-generated video promotions.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-purple/20 border border-white/5 hover:border-brand-purple/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links map */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-400 uppercase font-bold">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-500 hover:text-brand-purple transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-400 uppercase font-bold">Services Offered</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {servicesLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs sm:text-sm text-gray-500 hover:text-brand-purple transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright rows */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
          <p>© {currentYear} {BRAND_NAME}. All Rights Reserved.</p>
          <div className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-brand-purple mr-1" />
            <span>Meticulously Crafted by Muhammed Suhaib O M</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
