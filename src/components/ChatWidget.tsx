import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const SUGGESTIONS = [
  "Run site safety audit",
  "Optimize procurement log",
  "Predict delay risks",
  "Review compliance docs"
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Neural Agent initialized. How can I optimize your workflow today?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (content: string) => {
    if (!content.trim()) return;
    
    setChatHistory(prev => [...prev, { role: 'user', content }]);
    setMessage('');
    setIsTyping(true);

    // Simulated AI Response
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: `Analysis complete. I've processed your request regarding "${content}". Found 3 optimization points in current site operations.` 
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[500px]"
          >
            {/* Header */}
            <div className="p-4 bg-primary/5 border-b border-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Matrixly Neural Agent</div>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Encrypted Link Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleChat} 
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-background/50">
              {chatHistory.map((chat, i) => (
                <div key={i} className={cn("flex", chat.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-pretty",
                    chat.role === 'user' 
                      ? "bg-primary text-primary-foreground rounded-tr-none" 
                      : "bg-muted text-foreground rounded-tl-none border border-border"
                  )}>
                    {chat.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border flex gap-1 items-center">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="size-1 bg-primary rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="size-1 bg-primary rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="size-1 bg-primary rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2 bg-background/50 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(s)}
                  className="text-[10px] font-bold uppercase tracking-tight px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(message); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask the Agent..."
                  className="w-full bg-muted text-foreground rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/50 text-sm"
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-2 p-2 text-primary hover:text-primary/80 transition-colors disabled:opacity-30"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-muted-foreground uppercase font-bold tracking-widest">
                <Sparkles size={10} /> Powered by Matrixly L4 Model
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className={cn(
          "size-14 rounded-full flex items-center justify-center shadow-lg transition-all border-2",
          isOpen ? "bg-background border-border text-foreground" : "bg-primary border-primary text-primary-foreground shadow-primary/20"
        )}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
      >
        {isOpen ? <X size={24} /> : <div className="relative"><MessageSquare size={24} /><div className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full border-2 border-primary animate-bounce" /></div>}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
