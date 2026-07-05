import { Service, Project, Testimonial } from "./types";

export const BRAND_NAME = "DIGITAL KERALA TECH";
export const SUBTITLE = "We Build Your Digital Future with AI";
export const DESCRIPTION = "We help businesses grow through AI-powered content creation, professional website development, eCommerce solutions, YouTube branding, digital marketing, and modern business automation.";

export const FOUNDER_STORY = {
  name: "Muhammed Suhaib O M",
  role: "Founder & Chief Technology Director",
  origin: "Kizhisseri, Malappuram, Kerala",
  bio: "Starting his journey as an elite mobile technician expert in motherboard repair, Muhammed Suhaib mastered the art of diagnosing complex IC networks and precision micro-soldering. He translates this exact microscopic detail, methodical problem-solving, and strict work ethic into software, AI systems, and digital agency solutions at DIGITAL KERALA TECH.",
  points: [
    { title: "Technical Precision", text: "Trained on microscopic circuits; we build code with absolute pixel perfection." },
    { title: "AI-First Ecosystem", text: "We leverage bleeding-edge generative AI models to scale your business content overnight." },
    { title: "Affordable Excellence", text: "Premium quality tailored to make high-end tech accessible to local and global businesses alike." }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "ai-video",
    title: "AI Video Creation",
    shortDesc: "Create professional AI videos for YouTube, Instagram, Facebook, and Business Promotions.",
    longDesc: "Leverage state-of-the-art AI video generation, cloned digital avatars, and advanced voice-synthesis to craft hyper-engaging videos without needing cameras, studios, or actors.",
    iconName: "Video",
    category: "AI Content",
    features: [
      "Custom AI Spokesperson & Avatars",
      "Multilingual Voice Over Dubbing",
      "Viral Reels, TikToks & YouTube Shorts",
      "Full Script-to-Video Production",
      "Corporate Promo Videos"
    ]
  },
  {
    id: "web-dev",
    title: "Website Development",
    shortDesc: "Responsive business portals, modern corporate sites, and landing pages with custom UI.",
    longDesc: "Beautiful, responsive business websites tailored for maximum conversions, loaded with modern glassmorphic designs, responsive grids, and fluid scroll animations.",
    iconName: "Globe",
    category: "Development",
    features: [
      "Custom UI/UX & Responsive Grids",
      "Landing Pages & Creative Portals",
      "Corporate & Company Portals",
      "Supercharged SEO-Friendly Code",
      "Blazing-fast Performance"
    ]
  },
  {
    id: "ecommerce",
    title: "eCommerce Website",
    shortDesc: "Full-scale online stores equipped with product catalogs, shopping carts, and easy checkout.",
    longDesc: "Complete digital storefronts designed to showcase products elegantly. Integrated with shopping carts, secure payment gateways, and backend inventory tracking.",
    iconName: "ShoppingBag",
    category: "Development",
    features: [
      "High-Performance Shopping Carts",
      "Product & Inventory Management",
      "Payment Gateway Integration",
      "Discounts & Coupons Engine",
      "Dynamic Order Tracking"
    ]
  },
  {
    id: "portfolio-dev",
    title: "Portfolio Website",
    shortDesc: "Professional resumes, personal branding, and freelancer showcase portfolios.",
    longDesc: "Stand out in your industry with an elite personal website that presents your credentials, case studies, and services with unmatched visual authority.",
    iconName: "User",
    category: "Development",
    features: [
      "Personal Branding Architectures",
      "Interactive Multi-format Galleries",
      "Easy CV/Resume Downloads",
      "Built-in Booking & Inquiries",
      "Freelancer Service Highlights"
    ]
  },
  {
    id: "ai-ads",
    title: "AI Advertisement",
    shortDesc: "High-CTR Facebook, Instagram, and YouTube ad creatives powered by copy-optimization.",
    longDesc: "Supercharge your ad spend with AI-powered target demographic research, dynamic creative copywriting, and automated high-engagement promotional visual systems.",
    iconName: "Megaphone",
    category: "Marketing",
    features: [
      "AI Copywriting & Ad Variations",
      "Viral Video Ad Production",
      "Dynamic Banner Ad Layouts",
      "High-Conversion Hook Setups",
      "Strategic Campaign Advice"
    ]
  },
  {
    id: "youtube-brand",
    title: "YouTube Branding",
    shortDesc: "Channel setup, custom high-CTR thumbnails, banner art, SEO titles, and tags.",
    longDesc: "Build a solid YouTube empire. We optimize everything from high-CTR thumbnail layouts to backend keywords and video tagging to make you trend faster.",
    iconName: "Youtube",
    category: "Branding",
    features: [
      "High-CTR Thumbnail Designs",
      "Sleek Brand Banners & Logos",
      "SEO Description & Tags Systems",
      "Full Video Script & Title Writing",
      "Channel Intro & Transition Elements"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic & Social Design",
    shortDesc: "Business logos, social media banners, posters, flyers, brochures, and stationery.",
    longDesc: "Our creative designers build memorable brand identities. From professional corporate logos to print-ready flyers, business posters, and consistent social layouts.",
    iconName: "Palette",
    category: "Design",
    features: [
      "Scalable Vector SVG Logos",
      "High-Engagement Instagram Posts",
      "Print-ready Flyers & Brochures",
      "Corporate Business Posters",
      "Consistent Brand Guideline Packs"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Ziva Premium eCommerce Store",
    category: "eCommerce",
    description: "A luxury lifestyle brand storefront equipped with high-performance instant checkout, dynamic filters, and real-time inventory synchronization.",
    client: "Ziva Fashion International",
    duration: "10 Days",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Vite", "Tailwind CSS", "Stripe API"]
  },
  {
    id: "proj-2",
    title: "Malabar Bakers Corporate Site",
    category: "Business Websites",
    description: "A stunning corporate website with fluid scroll animations, interactive custom recipe catalog, and restaurant reservation features.",
    client: "Malabar Bakers Chain",
    duration: "7 Days",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Motion", "Tailwind CSS", "Google Maps"]
  },
  {
    id: "proj-3",
    title: "Suhaib's Mobile Tech Showcase",
    category: "Portfolio",
    description: "An advanced portfolio website showcasing motherboard micro-soldering repairs, dynamic equipment logs, and booking schedules.",
    client: "OM Hardware Repair Co",
    duration: "5 Days",
    imageUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Tailwind CSS", "Lucide Icons"]
  },
  {
    id: "proj-4",
    title: "Calicut Spices AI Promo Video",
    category: "AI Videos",
    description: "An ultra-engaging, AI-generated video advertisement with customized cinematic avatars and a customized Malayalam voice-synthesis engine.",
    client: "Calicut Export Hub",
    duration: "3 Days",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    techStack: ["Gemini AI", "AI Speech Engine", "Adobe Premiere"]
  },
  {
    id: "proj-5",
    title: "Kizhisseri Mobiles Branding Logo",
    category: "Logo Design",
    description: "A comprehensive brand redesign featuring futuristic tech lines, geometric symmetry, and glowing color palettes optimized for neon signs.",
    client: "Kizhisseri Mobiles",
    duration: "4 Days",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    techStack: ["Figma", "Illustrator", "SVG Optimization"]
  },
  {
    id: "proj-6",
    title: "GlowUp Channel Rebrand System",
    category: "YouTube Branding",
    description: "Designed cohesive banners, high-CTR templates increasing organic click rates by 22%, and automatic optimized thumbnail layouts.",
    client: "GlowUp Tech Channel",
    duration: "6 Days",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    techStack: ["Figma", "Canva Team", "SEO Optimization"]
  },
  {
    id: "proj-7",
    title: "Eranad Tourism Festival Posters",
    category: "Social Media Designs",
    description: "A highly shareable, colorful poster and carousel campaign celebrating Malappuram local tourism and historical landmarks.",
    client: "Eranad Tourism Board",
    duration: "4 Days",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    techStack: ["Illustrator", "Photoshop", "Social Media Templates"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Faisal Rahman",
    company: "Ziva Fashion Store",
    text: "DIGITAL KERALA TECH built our online store with incredible speed and style. The glassmorphic layout is beautiful, and our mobile visitors are converting better than ever!",
    stars: 5
  },
  {
    id: "test-2",
    author: "Ananya Nair",
    company: "Creative Studio",
    text: "The AI video ad campaigns DKT created for our Facebook page were exceptional. The custom cloned voice sounds extremely professional, bringing a huge lift to our metrics.",
    stars: 5
  },
  {
    id: "test-3",
    author: "Sharafudheen",
    company: "Eranad Traders",
    text: "Muhammed Suhaib's attention to detail is legendary. He treats our website with the same meticulous micro-precision he uses for advanced mobile hardware. Highly recommended!",
    stars: 5
  }
];

export const FAQS = [
  {
    question: "What is your main specialty at DIGITAL KERALA TECH?",
    answer: "We are an AI-powered full-service digital agency. We specialize in cutting-edge Website Development, eCommerce portals, viral AI Content Creation (Spokespersons, Video ads), and premium YouTube Growth Branding packages."
  },
  {
    question: "How does AI help in video content and ad creation?",
    answer: "Using state-of-the-art Generative AI, we can clone high-quality voices, write viral-optimized copy, generate digital avatars, and edit videos rapidly. This lowers production costs by up to 80% while keeping content output high."
  },
  {
    question: "How fast can you deliver a website?",
    answer: "Landing pages and portfolios can be delivered in 3 to 5 days, while larger corporate and eCommerce websites typically take 7 to 10 days. We keep our schedules lightning-fast."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely! We provide continuous 24/7 technical support, security patches, performance updates, and SEO consultations to keep your digital storefront operating flawlessly."
  }
];
