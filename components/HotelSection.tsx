'use client';

import React from 'react';
import { Home, CheckCircle2, ShieldAlert, Phone, Clock, Heart, Award } from 'lucide-react';

interface HotelSectionProps {
  phone?: string;
}

const HOTEL_PRICES = [
  { name: 'Кіт / кішка', price: '500 грн', unit: 'на добу' },
  { name: 'Собаки до 5 кг', price: '600 грн', unit: 'на добу' },
  { name: 'Собаки 5 – 10 кг', price: '700 грн', unit: 'на добу' },
  { name: 'Собаки 10 – 20 кг', price: '800 грн', unit: 'на добу' },
];

const HOTEL_BENEFITS = [
  'Індивідуальний підхід до кожного мешканця',
  'Дружелюбний та професійний персонал',
  'Щоденні прогулянки на свіжому повітрі (собаки)',
  'Дотримання всіх санітарних норм',
  'Догляд і годування',
];

export default function HotelSection({ phone = '+380 96 203 04 11' }: HotelSectionProps) {
  return (
    <section id="hotel" className="py-16 lg:py-24 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Home className="w-3.5 h-3.5 text-sky-600" />
            <span>Готель для тварин</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Зоо-Готель
          </h2>

          <p className="text-slate-700 font-semibold text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Не знаєте з ким залишити домашню тварину на період відсутності? Довірте її нам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Benefits & Mandatory Rules */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Benefits Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-sky-600" />
                <span>Наші переваги та умови перебування:</span>
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {HOTEL_BENEFITS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-800 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-2xl bg-sky-100/70 border border-sky-200 text-sky-900 text-xs font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Вигул собак входить у вартість послуги.</span>
              </div>
            </div>

            {/* Rules & Requirements Alert Box */}
            <div className="bg-amber-50/90 p-6 sm:p-8 rounded-3xl border border-amber-200/90 shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-amber-900 font-black text-sm uppercase tracking-wide">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Обов&apos;язкові вимоги для поселення:</span>
              </div>

              <p className="text-amber-950 font-bold text-xs sm:text-sm leading-relaxed">
                Ветеринарний огляд перед поселенням і наявність ветеринарного паспорта із вакцинаціями є ОБОВ&apos;ЯЗКОВИМ!
              </p>

              <p className="text-amber-900/90 text-xs sm:text-sm leading-relaxed pt-2 border-t border-amber-200/60">
                Можете залишити власний корм або скористатися нашими спеціалізованими кормами за додаткову плату. Наповнювач для туалета оплачується окремо.
              </p>
            </div>

          </div>

          {/* Right Side: Pricing Card & Phone Call CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                Прейскурант
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                Вартість готельних послуг
              </h3>
              <p className="text-xs text-sky-200 mb-6">(розрахунок за добу перебування)</p>

              {/* Price Items */}
              <div className="space-y-3 mb-8">
                {HOTEL_PRICES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-100">{item.name}</span>
                    <div className="text-right">
                      <span className="font-extrabold text-base sm:text-lg text-sky-300">{item.price}</span>
                      <span className="block text-[10px] text-slate-300 -mt-1">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/15">
              <p className="text-xs text-slate-300 mb-3 text-center">
                Забронюйте місце в Зоо-Готелі заздалегідь:
              </p>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Забронювати: {phone}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
