import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import LanguageSelector from './components/LanguageSelector';
import SymptomIntakeCard from './components/SymptomIntakeCard';
import FeatureHighlights from './components/FeatureHighlights';

export default function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-zinc-50">
      <HeroCover />

      <main className="container mx-auto px-6 -mt-16 md:-mt-24 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold">Your Health Home</h2>
              <p className="text-sm text-zinc-300 mt-1">
                Begin with the assistant below. You can upload images or PDFs and receive AI triage with explainable insights.
              </p>
            </div>
          </div>
          <LanguageSelector value={language} onChange={setLanguage} />
        </div>

        <SymptomIntakeCard language={language} />

        <FeatureHighlights />
      </main>

      <footer className="mt-16 py-8 border-t border-white/10 text-center text-sm text-zinc-400">
        Made for accessible, AI-assisted healthcare. Multilingual. Secure. Human-in-the-loop.
      </footer>
    </div>
  );
}
