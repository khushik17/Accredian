"use client";

import { useState } from "react";

const CHAT_TITLE = "Accredian AI Chat";
const DEFAULT_GREETING = {
  role: "assistant",
  content: "Hi! I am your Accredian assistant. Ask me about programs, enterprise training, or team upskilling.",
};

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <p
        className={`w-fit max-w-[82%] rounded-xl px-2.5 py-1.5 text-[13px] leading-5 ${
          isUser
            ? "bg-blue-600 text-white"
            : "border border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        }`}
      >
        {message.content}
      </p>
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([DEFAULT_GREETING]);

  const formatMessagesForApi = (items) =>
    items
      .filter((message) => message.role === "user" || message.role === "assistant")
      .map((message) => ({ role: message.role, content: message.content }));

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = prompt.trim();

    if (!text || isSending) {
      return;
    }

    const userMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setPrompt("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: formatMessagesForApi(nextMessages),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to fetch assistant response.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I hit an error: ${error.message}`,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-70 flex flex-col items-end gap-3">
      {isOpen ? (
        <div className="w-[90vw] max-w-xs overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
            <p className="text-sm font-semibold">{CHAT_TITLE}</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-white/20 px-2 py-1 text-xs"
            >
              Close
            </button>
          </div>

          <div className="max-h-72 space-y-2.5 overflow-y-auto bg-slate-50 p-2.5 dark:bg-slate-950">
            {messages.map((message, index) => (
              <MessageBubble key={`${message.role}-${index}`} message={message} />
            ))}
            {isSending ? <p className="text-xs text-slate-500 dark:text-slate-400">Thinking...</p> : null}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-slate-200 p-2.5 dark:border-slate-700">
            <input
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              className="flex-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400"
              placeholder="Ask something..."
            />
            <button
              type="submit"
              disabled={isSending}
              className="gradient-button ripple-button rounded-lg bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-700"
      >
        <span className="h-2 w-2 rounded-full bg-white/90" />
        Chat with us
      </button>
    </div>
  );
}
