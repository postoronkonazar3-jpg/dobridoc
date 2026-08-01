'use client';

import React from 'react';
import { CheckCircle2, HeartHandshake, Stethoscope, Sparkles, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Лікарі мають високу кваліфікацію та багаторічний досвід роботи;',
    'Ми використовуємо сучасне обладнання для діагностики та лікування;',
    'Пропонуємо доступні та прозорі ціни на всі послуги;',
    'Забезпечуємо індивідуальний підхід до кожного пацієнта та його власника;',
    'Зручне розташування.',
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage with Soft Rounded Corners */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100 bg-sky-50">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80"
                alt="Лікар-ветеринар з турботою тримає кота"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Турбота як про власних
                    </p>
                    <p className="text-xs text-slate-600">
                      Щире та дбайливе ставлення до кожного чотирилапого пацієнта
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 w-max">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              <span>Про ветеринарну клініку</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Про клініку «Добрий Доктор»
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-normal">
              Ветеринарна клініка «Добрий Доктор» надає повний спектр послуг для догляду за здоров&apos;ям ваших домашніх улюбленців. Наша команда висококваліфікованих лікарів готова допомогти у будь-яких питаннях — від планової вакцинації до складних хірургічних втручань.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Ми розуміємо, що ваші тварини — це не просто тварини, а справжні члени родини, тому ставимося до кожного пацієнта з любов&apos;ю, увагою та професіоналізмом.
            </p>

            {/* Highlights List */}
            <div className="mb-8">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                Наша клініка пишається тим, що:
              </p>
              
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Guarantee Note */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Професійна діагностика та турбота
                </p>
                <p className="text-xs text-slate-500">
                  Високі стандарти лікування, сучасне обладнання та повна прозорість призначення.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
