'use client';

import React, { useRef, useEffect } from 'react';
import { Video, ShieldCheck, HeartPulse, Award } from 'lucide-react';

export default function VideoTourSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays automatically on mount
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented by browser:', err);
      });
    }
  }, []);

  return (
    <section id="video-tour" className="py-16 lg:py-24 bg-gradient-to-b from-white via-sky-50/40 to-slate-50/60 border-y border-sky-100/60 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200/80 text-sky-800 text-xs font-extrabold tracking-wider uppercase mb-4 shadow-2xs">
            <Video className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>Відеоекскурсія</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Онлайн знайомство з клінікою
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Запрошуємо вас у віртуальний тур ветеринарною клінікою <span className="font-bold text-sky-900">«Добрий Доктор»</span>. 
            Подивіться на наші сучасні кабінети i затишні зони очікування
          </p>
        </div>

        {/* Main Video & Feature Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Video Player Box - Wide Horizontal Landscape */}
          <div className="lg:col-span-8 relative group">
            <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden bg-slate-950 shadow-2xl border-4 border-white/80 ring-1 ring-slate-900/10">
              
              {/* HTML5 Video Element - AutoPlay Muted Looping */}
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/daq51lz0x/video/upload/v1785518225/video_2026-07-31_20-16-04_bpoqdo.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                className="w-full h-auto aspect-video sm:aspect-[16/9] object-cover block"
              />
            </div>
          </div>

          {/* Side Feature Highlights */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                100% прозорість роботи
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Усі процедури виконуються за сучасними міжнародними протоколами доказової ветеринарії.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Досвідчені фахівці
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                Лікарі з багаторічним досвідом та щирою любов&apos;ю до кожного чотирилапого пацієнта.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
