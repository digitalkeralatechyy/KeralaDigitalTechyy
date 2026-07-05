import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Cpu, ShieldAlert, Sparkles } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Greetings! I am **DKT-AI**, your DIGITAL KERALA TECH business assistant. ⚡\n\nHow can I help you accelerate your digital presence today? Click a prompt below or ask me anything about our custom services, pricing, or our founder **Muhammed Suhaib**!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about Muhammed Suhaib",
    "What services do you offer?",
    "Why choose DKT?",
    "How do I get a custom quote?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Map message history to send to server
      const formattedHistory = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          text: m.text
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          history: formattedHistory
        })
      });

      if (!response.ok) {
        throw new Error("Failed to contact chat server");
      }

      const data = await response.json();
      
      const modelMsg: ChatMessage = {
        id: `msg-${Date.now()}-model`,
        role: "model",
        text: data.text,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      // Fallback local response in case of API issues
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now()}-error`,
        role: "model",
        text: "I apologize, but I am having trouble reaching the core AI server. However, as **DKT-AI**, I can tell you that **DIGITAL KERALA TECH** is ready to build your custom websites, eCommerce stores, and premium AI videos. Feel free to use the contact form to reach Muhammed Suhaib directly!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] cursor-pointer relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X className="w-6 h-6" key="close" />
          ) : (
            <MessageSquare className="w-6 h-6 animate-pulse" key="chat" />
          )}
        </AnimatePresence>
        
        {/* Unread dot indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-pink border-2 border-black rounded-full animate-ping" />
        )}
      </motion.button>

      {/* Chat Drawer/Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[400px] h-[550px] rounded-3xl glass-panel-heavy border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white shadow">
                  <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white flex items-center">
                    <span>DKT AI COMPANION</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-purple ml-1.5 animate-pulse" />
                  </h4>
                  <span className="text-[10px] font-mono text-green-400 font-bold block">● ONLINE / READY</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Message Box */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-purple text-white rounded-tr-none shadow"
                        : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Container */}
            {messages.length === 1 && (
              <div className="px-5 pb-3 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">Suggested:</span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[10px] font-semibold text-gray-300 hover:text-white bg-white/5 border border-white/5 hover:border-brand-purple/30 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  placeholder="Ask about Suhaib, Web Dev, pricing..."
                  className="flex-1 bg-white/5 border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-500 transition-all duration-200"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
