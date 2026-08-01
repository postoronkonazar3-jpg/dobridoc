'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const interactionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518344/photo_9_2026-07-31_20-18-40_r8sbbv.jpg',
    },
    {
      id: 2,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518344/photo_8_2026-07-31_20-18-40_laobgf.jpg',
    },
    {
      id: 3,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518344/photo_7_2026-07-31_20-18-40_tf4sjh.jpg',
    },
    {
      id: 4,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518344/photo_6_2026-07-31_20-18-40_a0hwti.jpg',
    },
    {
      id: 5,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518343/photo_6_2026-07-25_20-58-28_ng85jj.jpg',
    },
    {
      id: 6,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518343/photo_5_2026-07-31_20-18-40_gzljbd.jpg',
    },
    {
      id: 7,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518343/photo_5_2026-07-25_20-58-28_cragjv.jpg',
    },
    {
      id: 8,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518343/photo_4_2026-07-31_20-18-40_hvoi8h.jpg',
    },
    {
      id: 9,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/IMG_1733_2_xdyvsi.jpg',
    },
    {
      id: 10,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_4_2026-07-25_20-58-28_qft5vj.jpg',
    },
    {
      id: 11,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_3_2026-07-31_20-18-40_wmsn92.jpg',
    },
    {
      id: 12,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_3_2026-07-25_20-58-28_wvworj.jpg',
    },
    {
      id: 13,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_2_2026-07-25_20-58-28_rhfj11.jpg',
    },
    {
      id: 14,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_2_2026-07-31_20-18-40_irzpke.jpg',
    },
    {
      id: 15,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_1_2026-07-25_20-58-28_fmmuj8.jpg',
    },
    {
      id: 16,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518342/photo_1_2026-07-31_20-18-40_zgdeus.jpg',
    },
    {
      id: 17,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518341/IMG_1713_2_sgywzd.jpg',
    },
    {
      id: 18,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518341/2025-02-10_khrigw.jpg',
    },
    {
      id: 19,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518341/2025-12-15_giywzo.jpg',
    },
    {
      id: 20,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518341/2026-06-07_1_zsgjmv.jpg',
    },
    {
      id: 21,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518341/2025-03-31_wxqzfy.jpg',
    },
    {
      id: 22,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785518340/2025-02-07_zw2ugf.jpg',
    },
    {
      id: 23,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/475873870_1527078351301977_307969969269431202_n_ionoju.jpg',
    },
    {
      id: 24,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785002710/54523782_307798159896675_6196340392997158912_n_udriha.jpg',
    },
    {
      id: 25,
      title: 'Фотографії з клініки «Добрий Доктор»',
      url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1785587343/photo_2026-07-31_17-14-50_ofbngz.jpg',
    },
  ];

  // Tripled images list to allow seamless infinite horizontal loop
  const infiniteImageList = [...galleryImages, ...galleryImages, ...galleryImages];

  // Handle user interaction pause & 3-second resumption
  const handleUserInteraction = () => {
    setIsInteracting(true);
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
    }
    interactionTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  };

  // Continuous auto-scroll animation frame using timestamp delta
  useEffect(() => {
    let animationFrameId: number;
    let lastTime: number | null = null;

    const scrollSpeed = 65; // pixels per second

    const scrollLoop = (timestamp: number) => {
      if (lastTime === null) lastTime = timestamp;
      const deltaTime = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (scrollRef.current && !isInteracting && selectedImageIndex === null) {
        scrollRef.current.scrollLeft += scrollSpeed * deltaTime;

        const maxLoopWidth = scrollRef.current.scrollWidth / 3;
        if (maxLoopWidth > 0 && scrollRef.current.scrollLeft >= maxLoopWidth * 2) {
          scrollRef.current.scrollLeft -= maxLoopWidth;
        } else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft += maxLoopWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimerRef.current) {
        clearTimeout(interactionTimerRef.current);
      }
    };
  }, [isInteracting, selectedImageIndex]);

  const manualScroll = (direction: 'left' | 'right') => {
    handleUserInteraction();
    if (scrollRef.current) {
      const distance = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -distance : distance,
        behavior: 'smooth',
      });
    }
  };

  const openLightbox = (originalIndex: number) => {
    handleUserInteraction();
    setSelectedImageIndex(originalIndex % galleryImages.length);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    handleUserInteraction();
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5 text-sky-600" />
              <span>Фотогалерея</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Галерея клініки
            </h2>

            <p className="text-slate-600 text-base mt-2 max-w-xl">
              Атмосфера, приміщення та щирі миті турботи про чотирилапих пацієнтів.
            </p>
          </div>

          {/* Manual Scroll Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => manualScroll('left')}
              className="w-11 h-11 rounded-2xl bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95"
              title="Скролл вліво"
              aria-label="Previous photos"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => manualScroll('right')}
              className="w-11 h-11 rounded-2xl bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95"
              title="Скролл вправо"
              aria-label="Next photos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onWheel={handleUserInteraction}
        className="flex gap-5 overflow-x-auto scrollbar-none py-4 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {infiniteImageList.map((img, index) => {
          const originalIndex = index % galleryImages.length;
          return (
            <div
              key={`${img.id}-${index}`}
              onClick={() => openLightbox(originalIndex)}
              className="group relative shrink-0 w-72 sm:w-80 h-64 sm:h-72 rounded-3xl overflow-hidden bg-slate-200 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-sky-600 flex items-center justify-center mb-2 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white tracking-wide">
                  Збільшити фото
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Закрити (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Попереднє фото"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Наступне фото"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center">
            <img
              src={galleryImages[selectedImageIndex].url}
              alt={galleryImages[selectedImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Фото {selectedImageIndex + 1} з {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

