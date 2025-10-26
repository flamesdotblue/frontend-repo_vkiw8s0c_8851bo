import React from 'react';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'bn', label: 'বাংলা' },
];

export default function LanguageSelector({ value, onChange }) {
  return (
    <div className="w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Languages className="h-5 w-5 text-emerald-600" />
          <h3 className="font-semibold">Choose Language</h3>
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Interact with the assistant, upload files, and read reports in your preferred language.
      </p>
    </div>
  );
}
