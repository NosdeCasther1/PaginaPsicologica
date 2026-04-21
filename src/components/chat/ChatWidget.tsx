"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Minus } from 'lucide-react';

// Tipos
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll al recibir mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmed,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error('Error en la respuesta del servidor');

      // Leer el stream de texto
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      };
      setMessages(prev => [...prev, assistantMessage]);

      if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });

            // createTextStreamResponse devuelve texto plano directo
            // Pero intentamos parsear el formato data-stream (0:"...") por compatibilidad
            const lines = chunk.split('\n');
            let hasDataStream = false;

            for (const line of lines) {
              if (line.startsWith('0:')) {
                hasDataStream = true;
                try {
                  const text = JSON.parse(line.slice(2));
                  assistantContent += text;
                } catch {
                  // ignorar líneas no parseables
                }
              }
            }

            // Si no hay formato data-stream, es texto plano directo
            if (!hasDataStream && chunk.trim()) {
              assistantContent += chunk;
            }

            setMessages(prev =>
              prev.map(m =>
                m.id === assistantMessage.id
                  ? { ...m, content: assistantContent }
                  : m
              )
            );
          }
        }

        // Si el stream terminó vacío (ej: rate limit o error silencioso), mostrar error
        if (!assistantContent.trim()) {
          setMessages(prev =>
            prev.map(m =>
              m.id === assistantMessage.id
                ? { ...m, content: 'Lo siento, no pude procesar tu mensaje en este momento. Por favor intenta nuevamente en unos segundos.' }
                : m
            )
          );
        }
    } catch (error) {
      console.error('[Chat Error]:', error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: 'Lo siento, hubo un error al procesar tu mensaje. Intenta nuevamente.',
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const cn = (...classes: (string | boolean | undefined)[]) =>
    classes.filter(Boolean).join(' ');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana de Chat */}
      {isOpen && (
        <div
          className={cn(
            "bg-white rounded-2xl shadow-2xl border border-neutral-100 flex flex-col transition-all duration-300 ease-in-out mb-4 overflow-hidden",
            isMinimized ? "h-14 w-72" : "h-[500px] w-[350px] md:w-[400px]"
          )}
        >
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Asistente Virtual</p>
                {!isMinimized && <p className="text-[10px] opacity-80">En línea ahora</p>}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                {isMinimized ? <MessageCircle size={18} /> : <Minus size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50"
              >
                {messages.length === 0 && (
                  <div className="text-center py-10 px-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="text-blue-600" size={24} />
                    </div>
                    <p className="text-neutral-500 text-sm">
                      ¡Hola! Soy tu asistente de recepción. ¿En qué puedo ayudarte hoy?
                    </p>
                  </div>
                )}

                {messages.map(m => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        m.role === 'user' ? "bg-blue-600" : "bg-neutral-200"
                      )}
                    >
                      {m.role === 'user'
                        ? <User size={14} className="text-white" />
                        : <Bot size={14} className="text-neutral-600" />}
                    </div>
                    <div
                      className={cn(
                        "p-3 rounded-2xl text-sm shadow-sm",
                        m.role === 'user'
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-white text-neutral-800 border border-neutral-100 rounded-tl-none"
                      )}
                    >
                      {m.content || (m.role === 'assistant' && isLoading ? '...' : m.content)}
                    </div>
                  </div>
                ))}

                {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                  <div className="flex gap-3 max-w-[85%] mr-auto">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-neutral-600" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-neutral-100 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-neutral-100 bg-white"
              >
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    disabled={isLoading}
                    className="w-full pl-4 pr-12 py-3 bg-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all border-none disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
                  >
                    {isLoading
                      ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      : <Send size={16} />}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}

      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
          suppressHydrationWarning
        >
          <div className="absolute -top-2 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </div>
          <MessageCircle className="group-hover:rotate-12 transition-transform" size={28} />
        </button>
      )}
    </div>
  );
}
