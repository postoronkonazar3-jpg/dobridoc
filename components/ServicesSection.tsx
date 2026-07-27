'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Scissors,
  Sparkles,
  Syringe,
  Activity,
  HeartPulse,
  Smile,
  Bug,
  ChevronRight,
  Info,
  X,
  CheckCircle2,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function ServicesSection() {
  const [activeModalService, setActiveModalService] = useState<any | null>(null);

  const services = [
    {
      id: 'therapy',
      icon: Stethoscope,
      title: 'Терапія та консультації',
      description: 'Огляд, консультація лікаря-терапевта, діагностика загального стану здоров\'я тварини.',
      details: [
        'Первинний та повторний огляд терапевта',
        'Складання індивідуальної схеми лікування',
        'Вимірювання тиску, температури, огляд слизових',
        'Консультації з раціону харчування та догляду',
      ],
      badge: 'Популярна послуга',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      id: 'surgery',
      icon: Scissors,
      title: 'Хірургія',
      description: 'Планові та ургентні хірургічні втручання, кастрація/стерилізація, обробка ран.',
      details: [
        'Стерилізація та кастрація котів і собак',
        'Абдомінальна та м\'якотканинна хірургія',
        'Первинна хірургічна обробка та зшивання ран',
        'Інгаляційний/ін\'єкційний безболісний наркоз',
      ],
      badge: 'Сучасний наркоз',
      color: 'from-blue-600 to-sky-500',
    },
    {
      id: 'dentistry',
      icon: Smile,
      title: 'Стоматологія',
      description: 'Огляд порожнини рота, гігієнічна чистка, лікування та видалення зубів.',
      details: [
        'Ультразвукова зняття зубного каменю та полірування',
        'Видалення молочних та зруйнованих зубів',
        'Лікування пародонтиту та стоматиту',
        'Рекомендації з гігієни зубів удома',
      ],
      badge: 'Безпечний ультразвук',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      id: 'dermatology',
      icon: Bug,
      title: 'Дерматологія',
      description: 'Діагностика та лікування шкірних захворювань, алергій, паразитарних інфекцій.',
      details: [
        'Мікроскопічні зіскрібки та люмінесцентна діагностика',
        'Виявлення та лікування харчових та сезонних алергій',
        'Лікування отодектозу (вушного кліща) та грибків',
        'Підбір протипаразитарних препаратів',
      ],
      badge: 'Експрес-зіскрібок',
      color: 'from-sky-600 to-indigo-500',
    },
    {
      id: 'diagnostics',
      icon: Activity,
      title: 'Діагностика',
      description: 'УЗД, рентген, лабораторні аналізи крові та сечі.',
      details: [
        'Ультразвукове дослідження органів черевної порожнини',
        'Біохімічний та загальний аналіз крові (15 хв)',
        'Аналіз сечі, калу та цитологічні дослідження',
        'Цифрова рентгенографія',
      ],
      badge: 'Результати за 15 хв',
      color: 'from-indigo-500 to-sky-500',
    },
    {
      id: 'vaccination',
      icon: Syringe,
      title: 'Вакцинація та чіпування',
      description: 'Планові щеплення за календарем, чіпування для ідентифікації тварини.',
      details: [
        'Комплексні вакцини для котів, собак та кроликів',
        'Міжнародне мікрочіпування з внесенням до бази',
        'Оформлення ветеринарного паспорта єврозразка',
        'Профілактична дегельмінтизація',
      ],
      badge: 'Європаспорт',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      id: 'grooming',
      icon: Sparkles,
      title: 'Грумінг',
      description: 'Гігієнічні та естетичні стрижки, догляд за шерстю та кігтями.',
      details: [
        'Гігієнічна стрижка котів та собак без седації',
        'Чистка вушок, вичісування підшерстку, обрізання кігтів',
        'Купання професійними гіпоалергенними шампунями',
        'Експрес-линька для короткошерстих порід',
      ],
      badge: 'Без седації',
      color: 'from-sky-400 to-blue-500',
    },
    {
      id: 'exotic',
      icon: HeartPulse,
      title: 'Прийом екзотичних тварин',
      description: 'Консультації та лікування гризунів і дрібних екзотичних ссавців.',
      details: [
        'Лікар-ратолог для морських свинок, щурів, хом\'яків',
        'Прийом та огляд кроликів, фреток, шиншил',
        'Обрізання зубок гризунам спеціальним бором',
        'Консультації з утримання та годування екзотів',
      ],
      badge: 'Досвідчений ратолог',
      color: 'from-cyan-600 to-sky-600',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
            <span>Ветеринарна допомога</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Наші послуги
          </h2>

          <p className="text-slate-600 text-base mt-3">
            Пропонуємо широкий спектр ветеринарних послуг для тварин будь-якого віку та розміру.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`} />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-500 text-sky-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Trigger Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full py-2 text-xs font-bold text-sky-600 hover:text-sky-800 bg-sky-50 hover:bg-sky-100/80 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Детальніше про послугу</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Price List Banner Under Services Block */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-cyan-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-400/30">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-100 text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-sky-300" />
              <span>Офіційний прейскурант</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Бажаєте ознайомитися з повним прайс-листом послуг та цін?
            </h3>
            <p className="text-sky-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Перегляньте детальні розцінки на первинні та повторні огляди, комплексне вакцинування, діагностику, стоматологію, хірургію та лабораторні аналізи.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/prices"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 group"
            >
              <span>Переглянути повний прайс-лист</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-600" />
            </Link>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-sky-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                {React.createElement(activeModalService.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {activeModalService.badge}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{activeModalService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6">{activeModalService.description}</p>

            <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100 mb-6">
              <p className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-3">
                Що входить у послугу:
              </p>
              <ul className="space-y-2">
                {activeModalService.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-2 border-t border-slate-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                Зрозуміло
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
