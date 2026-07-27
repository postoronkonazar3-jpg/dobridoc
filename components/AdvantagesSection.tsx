'use client';

import React from 'react';
import { Sparkles, Check, Heart, Shield, Award, MapPin } from 'lucide-react';

export default function AdvantagesSection() {
  const advantages = [
    {
      title: 'Досвідчені лікарі з багаторічною практикою',
      desc: 'Команда фахівців з 8-12+ роками досвіду у терапії, хірургії, офтальмології та ратології.',
      icon: Award,
      badge: '01',
    },
    {
      title: 'Сучасне діагностичне обладнання',
      desc: 'Експертні УЗД апарати, цифрова рентгенографія та експрес-лабораторія прямо в клініці.',
      icon: Shield,
      badge: '02',
    },
    {
      title: 'Приймаємо тварин будь-якого виду',
      desc: 'Від домашніх котиків і собак до морських свинок, щурів, кроликів та екзотичних улюбленців.',
      icon: Heart,
      badge: '03',
    },
    {
      title: 'Індивідуальний підхід до кожного пацієнта',
      desc: 'Адаптований безстресовий огляд без примусу та переляку для вашого чотирилапого друга.',
      icon: Sparkles,
      badge: '04',
    },
    {
      title: 'Доступні та прозорі ціни на послуги',
      desc: 'Детальна консультація щодо вартості лікування перед початком усіх маніпуляцій.',
      icon: Check,
      badge: '05',
    },
    {
      title: 'Зручне розташування в Києві',
      desc: 'м. Київ, вул. Кирилівська, 123 — зручний доїзд та парковка біля клініки.',
      icon: MapPin,
      badge: '06',
    },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Subtle Radial Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Наші ключові переваги</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Чому обирають «Добрий Доктор»
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Без закритих блоків та казенних рамок — справжня турбота та високий стандарт медицини
          </p>
        </div>

        {/* Clean Grid Layout (No overlapping absolute elements) */}
        <div className="relative">
          {/* Grid of Clean Organic Text Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start group hover:-translate-y-1 transition-transform duration-300 bg-slate-50/60 p-6 rounded-3xl border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 border border-sky-200/50 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-sky-300 group-hover:text-sky-500 transition-colors">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interspersed Center Rabbit / Exotic Pet Badge */}
          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-sky-50/60 via-cyan-50/40 to-sky-50/60 p-6 rounded-3xl border border-sky-100">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=200&q=80"
                alt="Кролик екзот"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-base font-extrabold text-slate-900">
                  Маєте екзотичного улюбленця (гризуна, равлика чи птаха)?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Наш лікар-ратолог проводитиме обстеження та надасть професійні поради щодо догляду!
                </p>
              </div>
            </div>

            <a
              href="https://t.me/dobryi_doktor_kyiv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-200 shrink-0 transition-transform active:scale-95"
            >
              Записатися до ратолога
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
