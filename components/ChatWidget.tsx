import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hey! I'm InkBot. Interested in becoming a pro tattoo artist? Ask me anything about our courses.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const stream = await sendMessageToGemini(userMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      let fullText = '';
      
      // Initialize empty bot message
      setMessages(prev => [...prev, {
        id: botMsgId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: fullText } : msg
        ));
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {/* Updated bottom position for mobile to sit above sticky CTA (approx 80px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center shadow-2xl transition-all duration-300 rounded-full md:rounded-none ${
          isOpen ? 'bg-black rotate-90 mb-0' : 'bg-black hover:bg-gray-800 mb-0'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="text-white w-5 h-5 md:w-6 md:h-6" /> : <MessageSquare className="text-white w-5 h-5 md:w-6 md:h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-36 right-4 md:bottom-24 md:right-6 z-40 w-[calc(100%-2rem)] md:w-full max-w-[360px] transform overflow-hidden bg-white border border-black shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-black p-4 border-b border-black">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center bg-white">
              <Bot className="h-5 w-5 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-white uppercase tracking-wider text-sm">InkBot Assistant</h3>
              <p className="text-xs text-gray-400 flex items-center">
                <span className="mr-2 inline-block h-1.5 w-1.5 bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 custom-scrollbar bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 text-sm ${
                  msg.role === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-200'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3">
                 <Loader2 className="h-4 w-4 animate-spin text-black" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 bg-white p-3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about courses..."
              className="flex-1 bg-gray-50 px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black border border-gray-200"
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className="flex h-9 w-9 items-center justify-center bg-black text-white transition-colors hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;