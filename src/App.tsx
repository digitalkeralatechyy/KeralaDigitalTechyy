import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AIChatWidget from "./components/AIChatWidget";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-brand-purple selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

