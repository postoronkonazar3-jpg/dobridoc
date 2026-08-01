'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Phone, Sparkles } from 'lucide-react';

interface PromoItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
}

const PROMO_ITEMS: PromoItem[] = [
  {
    id: 'vaccination',
    title: 'Щорічна вакцинація',
    tag: 'Вакцинація',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_1_2026-08-01_19-01-55_q02q1w.jpg',
  },
  {
    id: 'nutrition',
    title: "Здоров'я починається з правильного харчування",
    tag: 'Лікувальні корми',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_4_2026-08-01_19-01-55_uqgy8m.jpg',
  },
  {
    id: 'dentistry',
    title: 'Стоматологія для тварин',
    tag: 'Стоматологія',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_8_2026-08-01_19-01-55_hyzie4.jpg',
  },
  {
    id: 'grooming',
    title: 'Грумінг для собак і котів',
    tag: 'Грумінг',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_7_2026-08-01_19-01-55_cvmltu.jpg',
  },
  {
    id: 'examination',
    title: 'Комплексне обстеження',
    tag: 'Діагностика',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_5_2026-08-01_19-01-55_vx5xqc.jpg',
  },
  {
    id: 'pharmacy',
    title: 'Ветеринарна аптека',
    tag: 'Аптека',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_3_2026-08-01_19-01-55_mkz2in.jpg',
  },
  {
    id: 'surgery',
    title: 'Хірургія з турботою',
    tag: 'Хірургія',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_6_2026-08-01_19-01-55_ckn3og.jpg',
  },
  {
    id: 'teeth-cleaning',
    title: 'Чистка зубів у ваших хвостиків',
    tag: 'Гігієна',
    imageUrl: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785600138/photo_2_2026-08-01_19-01-55_tvduqr.jpg',
  },
];

interface PromosSectionProps {
  phone?: string;
}

export default function PromosSection({ phone = '+380 96 203 04 11' }: PromosSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PromoItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to current item smoothly when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 300;
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Переваги клініки
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Чому варто звертатися до нас?
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Натисніть на банер, щоб відкрити його в повному розмірі та дізнатися більше інформації
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Попереднє промо"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 shadow-xs hover:shadow-md transition-all flex items-center justify-center group active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Наступне промо"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 shadow-xs hover:shadow-md transition-all flex items-center justify-center group active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider / Grid Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROMO_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[360px] group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Відкрити повністю
                  </span>
                </div>
              </div>

              {/* Text Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                  <span>Детальніше</span>
                  <span className="w-7 h-7 rounded-full bg-sky-50 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {selectedImage.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Закрити"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-2 sm:p-4 bg-slate-900 flex-1 flex items-center justify-center overflow-auto max-h-[65vh]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Footer Call to Action */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                Запишіться на консультацію або дізнайтесь деталі за нашим номером
              </p>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Зателефонувати: {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
