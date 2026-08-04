'use client';

import React from 'react';
import { Heart, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  phone?: string;
  address?: string;
}

export default function Footer({
  phone = '+380 96 203 04 11',
  address = 'м. Київ, вул. Кирилівська, 123',
}: FooterProps) {
  const footerLinks = [
    { href: '#hero', label: 'Головна' },
    { href: '#about', label: 'Про клініку' },
    { href: '#services', label: 'Послуги' },
    { href: '#grooming', label: 'Грумінг' },
    { href: '#hotel', label: 'Зоо-Готель' },
    { href: '#promos', label: 'Чому ми' },
    { href: '/prices', label: 'Прайс-лист' },
    { href: '#contacts', label: 'Контакти' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-2xl overflow-hidden p-0.5 border border-slate-700 bg-white">
                <img
                  src="https://res.cloudinary.com/daq51lz0x/image/upload/v1785002394/images_hqbltb.jpg"
                  alt="Добрий Доктор Логотип"
                  className="w-full h-full object-cover rounded-[14px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Добрий Доктор
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Ветеринарна клініка «Добрий Доктор» у Києві. Професійна турбота, кваліфікований медперсонал, сучасне обладнання та безмежна любов до тварин.
            </p>
          </div>

          {/* Anchor Links Menu */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
                Навігація по сайту
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {footerLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ветеринарна клініка «Добрий Доктор». Усі права захищені.</p>
          <p className="flex items-center gap-1">
            Створено з турботою про чотирилапого пацієнта
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
          </p>
        </div>

      </div>
    </footer>
  );
}
