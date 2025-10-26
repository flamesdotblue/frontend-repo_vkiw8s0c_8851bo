import React from 'react';
import { Shield, Stethoscope, FileText, Video, User } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'Role-based access, verified doctors, and privacy-first data handling.'
  },
  {
    icon: FileText,
    title: 'Reports & OCR',
    desc: 'Upload PDFs or images. AI extracts key markers and generates multilingual summaries.'
  },
  {
    icon: Stethoscope,
    title: 'Doctor Collaboration',
    desc: 'Patients assign or request suggested specialists. Doctors review and approve care.'
  },
  {
    icon: Video,
    title: 'Teleconsultations',
    desc: 'Built-in scheduling and video calls for seamless remote care.'
  },
  {
    icon: User,
    title: 'Admin Oversight',
    desc: 'Real-time dashboard for approvals, metrics, and platform health.'
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-lg transition">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
