import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid, Eye, Calendar, User, Code, Layers, X, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Business Websites",
    "eCommerce",
    "Portfolio",
    "AI Videos",
    "Logo Design",
    "YouTube Branding",
    "Social Media Designs"
  ];

  // Filter projects based on active Category
  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#040407] overflow-hidden">
      {/* Backlight Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[35rem] h-[35rem] glow-orb-purple opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[35rem] h-[35rem] glow-orb-blue opacity-10 animate-pulse-slow" style={{ animationDelay: "3s" }} />

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
            <Layers className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple tracking-wider uppercase">Our Work Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            Our Case Studies & <span className="text-gradient-purple-blue">Creations</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-sm sm:text-base"
          >
            Browse through our premium business solutions, high-converting eCommerce stores, personal brand portfolios, viral AI promotional videos, and brand designs.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-brand-purple to-brand-blue border-transparent text-white shadow-lg shadow-brand-purple/20 scale-[1.03]"
                  : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-brand-purple uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Dark hover glass overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-white font-semibold text-xs transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors duration-300 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech badging rows */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-semibold text-gray-500 font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-semibold text-gray-500 font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Case Study Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl glass-panel-heavy rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover Image */}
                <div className="relative aspect-video w-full bg-gray-900">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/20" />
                  
                  {/* Category overlay */}
                  <div className="absolute bottom-6 left-6 sm:left-10 z-10 flex items-center space-x-2">
                    <div className="px-3 py-1 rounded-full bg-brand-purple text-[10px] font-bold text-white uppercase tracking-wider">
                      {selectedProject.category}
                    </div>
                  </div>
                </div>

                {/* Case Study Metadata */}
                <div className="p-6 sm:p-10 space-y-6">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-bold">Featured Case Study</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Client & Specs details cards row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-brand-purple">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-gray-500 block">Client</span>
                        <span className="text-xs font-bold text-white">{selectedProject.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-brand-blue">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-gray-500 block">Project Speed</span>
                        <span className="text-xs font-bold text-white">{selectedProject.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-brand-indigo">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-gray-500 block">Precision Build</span>
                        <span className="text-xs font-bold text-white">Pixel Perfect</span>
                      </div>
                    </div>
                  </div>

                  {/* Full Tech stack display */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 font-bold flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-brand-purple mr-1.5 animate-pulse" />
                      Integrated Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-bold text-gray-200 font-mono bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Close modal call */}
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-gray-400 hover:text-white border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    >
                      Close Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
