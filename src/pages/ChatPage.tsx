import { useState, useRef, useEffect, type FormEvent } from "react";
import { Send, User, Sparkles, Plus, Image as ImageIcon, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import { cn } from "../utils/cn";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello Avinash! I am your personal AI Astrologer. How can I help you navigate your future today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "The stars indicate that you are entering a period of significant growth. I see a planetary alignment that favors your career goals. Would you like to know about a specific date?",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-accent">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Assistant</h1>
            <p className="text-xs text-green-500 font-medium">Always Online</p>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> New Chat
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-6 space-y-6 px-2 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex items-start gap-4 max-w-[85%]",
                msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                msg.sender === "user" ? "bg-accent/20" : "bg-white/10"
              )}>
                {msg.sender === "user" ? <User className="w-4 h-4 text-accent" /> : <Sparkles className="w-4 h-4 text-white" />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.sender === "user" 
                  ? "bg-accent text-white rounded-tr-none" 
                  : "bg-surface border border-white/5 text-white/90 rounded-tl-none shadow-lg"
              )}>
                {msg.text}
                <p className={cn(
                  "text-[10px] mt-2 opacity-50 text-right",
                  msg.sender === "user" ? "text-white" : "text-white/60"
                )}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="pt-4 border-t border-white/5">
        <form onSubmit={handleSend} className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button type="button" className="p-2 text-white/30 hover:text-accent transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your future..."
            className="w-full bg-surface/50 border border-white/10 rounded-2xl py-5 pl-14 pr-24 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all shadow-xl"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button type="button" className="hidden sm:block p-2 text-white/30 hover:text-white transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button type="button" className="hidden sm:block p-2 text-white/30 hover:text-white transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <button 
              type="submit"
              className={cn(
                "p-3 bg-accent text-white rounded-xl transition-all shadow-accent",
                !input.trim() && "opacity-50 grayscale"
              )}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        <p className="text-center text-[10px] text-white/20 mt-3">
          AI Assistant can make mistakes. Consider checking important predictions with a live expert.
        </p>
      </div>
    </div>
  );
};

export default ChatPage;
