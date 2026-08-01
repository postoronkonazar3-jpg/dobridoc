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
    { href: '#gallery', label: 'Галерея' },
    { href: '#services', label: 'Послуги' },
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

            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
                id="footer-social-instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
                id="footer-social-facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
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
