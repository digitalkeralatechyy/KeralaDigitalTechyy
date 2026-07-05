export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  category: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  duration: string;
  imageUrl: string;
  techStack: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  text: string;
  stars: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
