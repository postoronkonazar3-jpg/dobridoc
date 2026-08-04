'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface PromoItem {
  id: string;
  title: string;
  imageUrl: string;
}

const PROMO_ITEMS: PromoItem[] = [
  {
    id: 'vaccination',
    title: 'Щорічна вакцинація',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_1_2026-08-01_19-01-55_q02q1w.jpg',
  },
  {
    id: 'nutrition',
    title: "Здоров'я починається з правильного харчування",
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_4_2026-08-01_19-01-55_uqgy8m.jpg',
  },
  {
    id: 'dentistry',
    title: 'Стоматологія для тварин',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_8_2026-08-01_19-01-55_hyzie4.jpg',
  },
  {
    id: 'grooming',
    title: 'Грумінг для собак і котів',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_7_2026-08-01_19-01-55_cvmltu.jpg',
  },
  {
    id: 'examination',
    title: 'Комплексне обстеження',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_5_2026-08-01_19-01-55_vx5xqc.jpg',
  },
  {
    id: 'pharmacy',
    title: 'Ветеринарна аптека',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_3_2026-08-01_19-01-55_mkz2in.jpg',
  },
  {
    id: 'surgery',
    title: 'Хірургія з турботою',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_6_2026-08-01_19-01-55_ckn3og.jpg',
  },
  {
    id: 'teeth-cleaning',
    title: 'Чистка зубів у ваших хвостиків',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_2_2026-08-01_19-01-55_tvduqr.jpg',
  },
];

interface PromosSectionProps {
  phone?: string;
}

export default function PromosSection({}: PromosSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to current item smoothly when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 320;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROMO_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROMO_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="promos" className="py-16 lg:py-24 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Only Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Чому варто звертатися до нас?
          </h2>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Попереднє зображення"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 shadow-xs hover:shadow-md transition-all flex items-center justify-center group active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Наступне зображення"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 shadow-xs hover:shadow-md transition-all flex items-center justify-center group active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider - Pure Banner Images */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROMO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative aspect-[4/3] bg-slate-200 border border-slate-200/80"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                  Збільшити
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {PROMO_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Перейти до слайду ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-sky-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Pure Image Only */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer shadow-lg"
              aria-label="Закрити"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Баннер"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

