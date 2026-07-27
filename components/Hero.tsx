'use client';

import React from 'react';
import { MapPin, Clock, Phone, ShieldCheck, Heart, Award, Star, CheckCircle2 } from 'lucide-react';
import MessengerButtons from './MessengerButtons';

interface HeroProps {
  telegramUrl?: string;
  viberUrl?: string;
  phone?: string;
  workingHours?: string;
  address?: string;
}

export default function Hero({
  telegramUrl = 'https://t.me/+380962030411',
  viberUrl = 'viber://chat?number=%2B380962030411',
  phone = '+380 96 203 04 11',
  workingHours = 'Щодня 09:00–21:00 без вихідних',
  address = 'м. Київ, вул. Кирилівська, 123',
}: HeroProps) {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/80 via-sky-50/30 to-white">
      {/* Decorative Ambient Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200/80 text-sky-800 text-xs font-bold tracking-wide mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span>Ветеринарна Клініка у Києві (вул. Кирилівська, 123)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Турбота про вашого улюбленця —{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                наш головний обов&apos;язок
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium">
              Ветеринарна клініка «Добрий Доктор» у Києві. Досвідчені лікарі, сучасне обладнання та щире ставлення до кожного пацієнта — від домашніх котів і собак до екзотичних тварин.
            </p>

            {/* CTA Buttons Block */}
            <div className="w-full sm:w-auto mb-10 bg-white/80 p-3 rounded-3xl border border-sky-100 shadow-sm backdrop-blur-xs">
              <p className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-2.5 px-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Оберіть зручний месенджер для запису та консультації:
              </p>
              <MessengerButtons
                telegramUrl={telegramUrl}
                viberUrl={viberUrl}
                size="lg"
              />
            </div>

            {/* Key Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full max-w-md">
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">10+ років досвіду</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Безболісний догляд</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Animal Cutout Visuals */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Visual Container Frame */}
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl bg-gradient-to-tr from-sky-100 via-cyan-50 to-sky-200/60 p-4 border border-sky-200/60 shadow-xl overflow-visible">
              
              {/* Background Glow Circle */}
              <div className="absolute inset-4 rounded-2xl bg-white/80 shadow-inner overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80"
                  alt="Ветеринар оглядає щасливого собаку"
                  className="w-full h-full object-cover rounded-xl opacity-90 transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Cutout Overlay Card - Happy Cat / Dog */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3 animate-float max-w-xs z-20">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80"
                    alt="Кіт пацієнт"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-xs font-bold text-slate-800">5,000+ пухнастих пацієнтів</p>
                  <p className="text-[11px] text-slate-500">Коти, собаки, ратологи</p>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-4 py-2 rounded-2xl shadow-lg border border-sky-300 flex items-center gap-2 animate-float-reverse z-20">
                <Award className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <p className="text-xs font-extrabold leading-tight">100% Довіра</p>
                  <p className="text-[10px] text-sky-100">Сучасне обладнання</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Info Badges Strip (Плашка з інфо) */}
        <div className="mt-14 pt-8 border-t border-sky-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/90 p-5 rounded-3xl border border-sky-100 shadow-sm">
            
            {/* Address */}
            <div className="flex items-start gap-3.5 p-2">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Адреса клініки</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{address}</p>
                <p className="text-xs text-slate-500 mt-0.5">Шевченківський р-н (м. Дорогожичі)</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3.5 p-2 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-2 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Графік роботи</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{workingHours}</p>
                <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Працюємо зараз
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 p-2 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-2 md:pl-6">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Телефон для зв&apos;язку</p>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors block mt-0.5"
                  id="hero-info-phone"
                >
                  {phone}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Консультація та запис на прийом</p>
              </div>
            </div>

          </div>
        </div>

        {/* Statistics Banner */}
        <div className="mt-6 bg-slate-50/90 rounded-3xl py-4 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4 border border-blue-100/80 shadow-xs">
          <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-900">10k+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Щасливих пацієнтів</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-900">12</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Професійних лікарів</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-900">24/7</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Підтримка в месенджерах</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs">👩‍⚕️</div>
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs">👨‍⚕️</div>
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+3</div>
            </div>
            <span className="text-xs font-semibold text-slate-600 ml-2 italic">Наші спеціалісти онлайн</span>
          </div>
        </div>

      </div>
    </section>
  );
}
