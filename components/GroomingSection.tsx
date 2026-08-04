'use client';

import React, { useState } from 'react';
import { Scissors, CheckCircle2, Sparkles, Phone, Maximize2, X, Calendar } from 'lucide-react';

interface GroomingSectionProps {
  phone?: string;
}

const GROOMING_PHOTOS = [
  {
    url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785867953/photo_2026-08-04_16-45-24_c21jeu.jpg',
    title: 'Дбайливий догляд за шерстю',
    caption: 'Результат професійної стрижки та догляду',
  },
  {
    url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785867953/photo_2026-08-04_16-34-11_gywvho.jpg',
    title: 'Комплексний грумінг',
    caption: 'Акуратна стрижка та гігієнічні процедури',
  },
  {
    url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785867953/photo_2026-08-04_16-11-30_vrzbla.jpg',
    title: 'Моделювання та тримінг',
    caption: 'Індивідуальний підхід до кожного улюбленця',
  },
];

const GROOMING_SERVICES = [
  'Стрижка котів і собак',
  'Вичісування підшерстку',
  'Тримінг',
  'Стрижка кігтів, чистка вушок',
];

export default function GroomingSection({ phone = '+380 96 203 04 11' }: GroomingSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="grooming" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Scissors className="w-3.5 h-3.5 text-sky-600" />
            <span>Професійний догляд</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Грумінг для котів та собак
          </h2>

          <p className="text-slate-600 text-base mt-3">
            Дбайливий гігієнічний та естетичний догляд за шерстю, шкірою, кігтями та вушками ваших хвостиків.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Checklist */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1.5 rounded-full w-fit mb-4 border border-sky-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>За попереднім записом</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Що входить у послугу:
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Наші майстри знаходять підхід навіть до найчутливіших тваринок, гарантуючи безпеку, охайність та комфорт під час усіх процедур.
              </p>

              <ul className="space-y-3.5 mb-8">
                {GROOMING_SERVICES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 bg-sky-50/60 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Бажаєте записати улюбленця на грумінг?
                </span>
              </div>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Зателефонувати: {phone}
              </a>
            </div>
          </div>

          {/* Right Column: Real Works Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Реальні роботи нашого грумера:
              </span>
              <span className="text-xs text-sky-600 font-medium">Натисніть на фото для перегляду</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {GROOMING_PHOTOS.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo.url)}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                        <Maximize2 className="w-3 h-3" />
                        Збільшити
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-sky-600 transition-colors">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl p-2 sm:p-4 border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto}
                alt="Грумінг робота"
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
