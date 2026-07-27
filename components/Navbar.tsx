'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Menu, X, Heart, Shield, Sparkles, FileText } from 'lucide-react';
import MessengerButtons from './MessengerButtons';

interface NavbarProps {
  telegramUrl?: string;
  viberUrl?: string;
  phone?: string;
  workingHours?: string;
  address?: string;
  onOpenSettings?: () => void;
}

export default function Navbar({
  telegramUrl = 'https://t.me/+380962030411',
  viberUrl = 'viber://chat?number=%2B380962030411',
  phone = '+380 96 203 04 11',
  workingHours = 'Щодня 09:00–21:00',
  address = 'м. Київ, вул. Кирилівська, 123',
  onOpenSettings,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'contacts'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Головна', id: 'hero', isExternal: false },
    { href: '/prices', label: 'Прайс-лист', id: 'prices', isExternal: true },
    { href: '#contacts', label: 'Контакти', id: 'contacts', isExternal: false },
  ];

  return (
    <>
      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-sky-100/80 py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group" id="navbar-brand-logo">
              <div className="w-11 h-11 rounded-2xl overflow-hidden p-0.5 shadow-md shadow-sky-200 group-hover:scale-105 transition-transform duration-300 border border-sky-100 bg-white">
                <img
                  src="https://res.cloudinary.com/daq51lz0x/image/upload/v1785002394/images_hqbltb.jpg"
                  alt="Добрий Доктор Логотип"
                  className="w-full h-full object-cover rounded-[14px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  Добрий Доктор
                </span>
                <span className="text-[11px] font-medium text-sky-600 tracking-wider uppercase -mt-1">
                  Ветеринарна Клініка
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-100">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/60"
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? 'bg-white text-sky-600 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-white/60'
                    }`}
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>

            {/* Header Messenger Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <MessengerButtons
                telegramUrl={telegramUrl}
                viberUrl={viberUrl}
                size="sm"
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="lg:hidden p-2 text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                title="Подзвонити"
                id="navbar-mobile-call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-2xl transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
                id="navbar-mobile-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-2 mb-2">
                {navLinks.map((link) => (
                  link.isExternal ? (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-xl text-sm font-bold transition-colors text-center bg-sky-600 text-white shadow-xs"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-center ${
                        activeSection === link.id
                          ? 'bg-sky-50 text-sky-600 font-bold border border-sky-100'
                          : 'text-slate-700 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
                  Швидкий зв&apos;язок у месенджерах
                </p>
                <MessengerButtons
                  telegramUrl={telegramUrl}
                  viberUrl={viberUrl}
                  size="md"
                  layout="col"
                />
              </div>

              <div className="mt-2 p-3 rounded-2xl bg-sky-50/60 border border-sky-100 text-xs text-slate-600 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sky-900 font-medium">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
