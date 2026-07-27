'use client';

import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Send, ShieldAlert, Heart } from 'lucide-react';
import MessengerButtons from './MessengerButtons';

interface ContactsSectionProps {
  telegramUrl?: string;
  viberUrl?: string;
  phone?: string;
  workingHours?: string;
  address?: string;
}

export default function ContactsSection({
  telegramUrl = 'https://t.me/+380962030411',
  viberUrl = 'viber://chat?number=%2B380962030411',
  phone = '+380 96 203 04 11',
  workingHours = 'Щодня 09:00–21:00 (без вихідних)',
  address = 'м. Київ, вул. Кирилівська, 123',
}: ContactsSectionProps) {
  return (
    <section id="contacts" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Як нас знайти та зв&apos;язатися</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Контакти клініки
          </h2>

          <p className="text-slate-600 text-base mt-3">
            Записуйтесь на прийом або ставте будь-які запитання через месенджери чи телефоном
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contacts & Large Messenger CTA Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Адреса</p>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5">{address}</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-sky-600" />
                    <span>Подільський район (м. Тараса Шевченка / Почайна)</span>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/80">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Графік прийому</p>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5">{workingHours}</p>
                  <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Без перерви та вихідних
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/80">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-900">Контактний телефон</p>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base font-extrabold text-sky-600 hover:text-sky-700 transition-colors block mt-0.5"
                    id="contacts-main-phone"
                  >
                    {phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Messenger CTA Card (Replacing standard forms) */}
            <div className="bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-sky-200 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                  ⚡ Швидкий запис 24/7
                </span>
                <h3 className="text-xl font-extrabold text-white mt-3 mb-2">
                  Записуйтесь напряму у месенджерах
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-6">
                  Ми свідомо відмовилися від формальних анкет та передзвонів. Просто напишіть нам у Telegram чи Viber — адміністратор відповість протягом кількох хвилин!
                </p>
              </div>

              <MessengerButtons
                telegramUrl={telegramUrl}
                viberUrl={viberUrl}
                size="lg"
                layout="col"
              />
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative min-h-[380px] lg:min-h-full flex flex-col">
            
            {/* Map iframe embedding location ( вул. Кирилівська 123, Київ ) */}
            <iframe
              title="Розташування ветеринарної клініки Добрий Доктор на карті Києва"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.38779951307!2d30.485123476838637!3d50.4713789860851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce0839e44d37%3A0xb35a396263bb4be0!2zdmVsLiBLeXJ5bGl2c2thLCAxMjMsIEt5aXY!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Overlay Badge on Map */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-slate-900">Добрий Доктор</p>
                <p className="text-[11px] text-slate-500">вул. Кирилівська, 123, Київ</p>
              </div>
              <a
                href="https://maps.app.goo.gl/BEJSJXRf2APmHPA57"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto p-2 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1"
                id="contacts-open-google-maps"
              >
                <span>Маршрут в Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
