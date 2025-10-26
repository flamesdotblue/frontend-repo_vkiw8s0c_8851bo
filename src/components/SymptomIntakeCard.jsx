import React, { useRef, useState } from 'react';
import { MessageSquare, Upload, FileText, Image as ImageIcon, Activity } from 'lucide-react';

function ChatBubble({ role, text }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} w-full` }>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
        role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100'
      }`}>
        {text}
      </div>
    </div>
  );
}

export default function SymptomIntakeCard({ language }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! Describe your symptoms, medical history, and upload any images or lab reports to begin.' },
  ]);
  const [input, setInput] = useState('');
  const [risk, setRisk] = useState(null); // green | yellow | red
  const [attachments, setAttachments] = useState([]);
  const fileRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', text: input }];
    // Local mock assistant response (no backend calls here)
    const hint = 'AI triage (demo): Based on your input, we will analyze risk and suggest a specialist once files are processed.';
    setMessages([...newMsgs, { role: 'assistant', text: hint }]);
    setInput('');
  };

  const onFiles = (files) => {
    const list = Array.from(files).map((f) => ({ name: f.name, type: f.type, size: f.size }));
    setAttachments((prev) => [...prev, ...list]);
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', text: `Received ${list.length} file(s). The AI will run OCR and image analysis (demo).` },
    ]);
  };

  return (
    <section id="intake" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold">Symptom Assistant</h3>
            <span className="ml-auto text-xs text-zinc-500">Language: {language.toUpperCase()}</span>
          </div>
          <div className="p-5 h-[360px] overflow-y-auto space-y-3 bg-zinc-50/60 dark:bg-zinc-950/40">
            {messages.map((m, i) => (
              <ChatBubble key={i} role={m.role} text={m.text} />
            ))}
          </div>
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => fileRef.current?.click()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Upload className="h-4 w-4" /> Upload files
              </button>
              <input
                ref={fileRef}
                type="file"
                multiple
                className="hidden"
                accept="image/*,.pdf,.png,.jpg,.jpeg"
                onChange={(e) => onFiles(e.target.files)}
              />
              <div className="ml-auto flex items-center gap-2 text-xs">
                <span className="text-zinc-500">Risk:</span>
                <button onClick={() => setRisk('green')} className={`h-2.5 w-8 rounded-full bg-emerald-500/30 border ${risk==='green'?'border-emerald-500':'border-transparent'}`} />
                <button onClick={() => setRisk('yellow')} className={`h-2.5 w-8 rounded-full bg-amber-400/40 border ${risk==='yellow'?'border-amber-500':'border-transparent'}`} />
                <button onClick={() => setRisk('red')} className={`h-2.5 w-8 rounded-full bg-rose-500/40 border ${risk==='red'?'border-rose-500':'border-transparent'}`} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your symptoms…"
                className="flex-1 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />
              <button onClick={handleSend} className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                Send
              </button>
            </div>
            {attachments.length > 0 && (
              <div className="text-xs text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-2">
                {attachments.map((a, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    {a.type.includes('pdf') ? <FileText className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                    {a.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold">Triage Summary (Demo)</h3>
          </div>
          <ul className="text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-5 space-y-1">
            <li>Multilingual chat for symptom capture</li>
            <li>OCR for lab reports and CNN for medical images</li>
            <li>Preliminary diagnosis with confidence and risk level</li>
            <li>Doctor suggestions and tele-consult scheduling</li>
          </ul>
          <div className="space-y-2">
            <p className="text-xs text-zinc-500">Current risk indicator</p>
            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${risk==='red'?'bg-rose-500':risk==='yellow'?'bg-amber-400':risk==='green'?'bg-emerald-500':'bg-zinc-300'}`} />
              <span className="text-sm">{risk ? risk.toUpperCase() : 'Not evaluated'}</span>
            </div>
          </div>
          <button className="w-full bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-xl">
            Download Report (requires confirmed diagnosis)
          </button>
        </div>
      </div>
    </section>
  );
}
