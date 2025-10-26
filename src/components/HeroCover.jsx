import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm">AI-Powered Multilingual Health Scan</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Early insights for better care — secure, explainable, and multilingual.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Describe symptoms, upload reports, and get instant AI triage with risk levels and
            specialist suggestions. Consult verified doctors and download structured reports.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#intake" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl transition">
              Start Health Analysis
            </a>
            <a href="#features" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl transition">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
