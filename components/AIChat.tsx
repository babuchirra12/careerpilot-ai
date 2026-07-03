import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([
    { role: "assistant", text: "Ask me anything about your resume, interview prep, or career strategy." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input.trim() }]);
    setInput("");
    setMessages((prev) => [...prev, { role: "assistant", text: "This is a placeholder response from your AI Career Coach." }]);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5 text-white shadow-lg">
      <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">AI Chat</div>
      <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4 max-h-72 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`rounded-2xl p-3 ${message.role === "assistant" ? "bg-slate-800" : "bg-slate-950 text-slate-100"}`}>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{message.role}</p>
            <p className="mt-1 text-sm text-slate-100">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="flex-1 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-white outline-none"
          placeholder="Type your question"
        />
        <button
          onClick={sendMessage}
          className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
