'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Phone, MapPin, CheckCircle2, ShieldCheck, Stethoscope, FileText, Sparkles } from 'lucide-react';
import MessengerButtons from '@/components/MessengerButtons';

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  badge?: string;
  items: ServiceItem[];
}

const priceListData: ServiceCategory[] = [
  {
    id: 'consultation',
    title: 'Консультація лікаря',
    items: [
      { name: 'Первинний клінічний огляд тварини', price: '500.00 грн' },
      { name: 'Вторинний огляд тварини', price: '300.00 грн' },
      { name: 'Консультація вузького спеціаліста (дерматолог, хірург, стоматолог)', price: '700.00 грн' },
      { name: 'Повторна консультація вузького спеціаліста (дерматолог, хірург, стоматолог)', price: '450.00 грн' },
    ],
  },
  {
    id: 'vaccination',
    title: 'Комплексна вакцинація та чіпування',
    items: [
      { name: 'Комплексна вакцинація (інфекційні хвороби + сказ)', price: '1 500.00 грн' },
      { name: 'Комплексна вакцинація від інфекційних хвороб', price: '1 200.00 грн' },
      { name: 'Комплексна вакцинація Нобівак DHPPI + LR', price: '1 500.00 грн' },
      { name: 'Комплексна вакцинація Нобівак Tricat Trio + R', price: '1 500.00 грн' },
      { name: 'Вакцинація від сказу', price: '600.00 грн' },
      { name: 'Оформлення ветеринарного паспорта', price: '100.00 грн' },
      { name: 'Чіпування тварини з реєстрацією чіпу', price: '700.00 грн' },
    ],
  },
  {
    id: 'therapy',
    title: 'Терапевтичні процедури',
    items: [
      { name: 'Ін’єкція: підшкірна, внутрішньом’язова', price: '100.00 грн' },
      { name: 'Встановлення внутрішньовенного катетера', price: 'від 100.00 грн' },
      { name: 'Інфузійна терапія з постійною швидкістю 1 категорії', price: 'від 450.00 грн' },
      { name: 'Інфузійна терапія з постійною швидкістю 2 категорії', price: 'від 600.00 грн' },
      { name: 'Інфузійна терапія з постійною швидкістю 3 категорії', price: 'від 700.00 грн' },
    ],
  },
  {
    id: 'hygiene',
    title: 'Гігієнічні та лікувальні обробки',
    items: [
      { name: 'Обрізання кігтів котам, гризунам', price: '150.00 грн' },
      { name: 'Обрізання кігтів собакам', price: '200.00 грн' },
      { name: 'Видалення кліща', price: 'від 50.00 грн' },
      { name: 'Отоскопія', price: '100.00 грн' },
      { name: 'Спорожнення параанальних залоз котам', price: '300.00 грн' },
      { name: 'Спорожнення параанальних залоз собакам', price: '350.00 грн' },
      { name: 'Промивання параанальних залоз', price: '450.00 грн' },
    ],
  },
  {
    id: 'diagnostics',
    title: 'Діагностичні процедури та аналізи',
    items: [
      { name: 'Загальний аналіз крові', price: '600.00 грн' },
      { name: 'Біохімічний аналіз крові розгорнутий', price: '1 100.00 грн' },
      { name: 'Комплексний аналіз крові (біохімічний та загальний)', price: '1 500.00 грн' },
      { name: 'Аналіз крові дирофіляріоз, цукор, згортання', price: 'від 150.00 грн' },
      { name: 'Аналіз крові на бабезіоз', price: 'від 200.00 грн' },
      { name: 'Аналіз крові коагулограма', price: 'від 800.00 грн' },
      { name: 'Біохімічний аналіз крові 1 показник', price: 'від 150.00 грн' },
      { name: 'Аналіз крові на інфекційні та паразитарні захворювання (експрес-тест)', price: 'від 650.00 грн' },
      { name: 'Аналіз крові на гормони', price: 'від 250.00 грн' },
      { name: 'Аналіз сечі', price: '500.00 грн' },
      { name: 'Аналіз калу на яйця глист', price: 'від 400.00 грн' },
      { name: 'Цитологічне дослідження (1 скло)', price: 'від 500.00 грн' },
      { name: 'Онкоцитологія', price: 'від 800.00 грн' },
      { name: 'Гістологічне дослідження', price: 'від 1 000.00 грн' },
      { name: 'Змив мазок з прямої кишки на простійших', price: 'від 600.00 грн' },
    ],
  },
  {
    id: 'dental',
    title: 'Стоматологічні процедури',
    badge: 'У вартість послуги не входить анестезія',
    items: [
      { name: 'Дентальний огляд / консультація стоматолога', price: '400.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером коту (без дентальної візіографії та видалень)', price: '3 500.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером собака до 5 кг (без дентальної візіографії та видалень)', price: '4 000.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером собака 5 – 10 кг (без дентальної візіографії та видалень)', price: '4 500.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером собака 10 – 20 кг (без дентальної візіографії та видалень)', price: '5 000.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером собака 20 – 30 кг (без дентальної візіографії та видалень)', price: '5 500.00 грн' },
      { name: 'Санація ротової порожнини УЗ-скалером собака 30 – 40 кг (без дентальної візіографії та видалень)', price: '6 000.00 грн' },
      { name: 'Видалення постійного зубу (премоляр, моляр) І ступіню', price: '150.00 грн' },
      { name: 'Видалення постійного зубу (премоляр, моляр) ІІ ступіню', price: '300.00 грн' },
      { name: 'Видалення постійного зубу (премоляр, моляр) ІІІ ступіню', price: '500.00 грн' },
    ],
  },
  {
    id: 'surgery',
    title: 'Хірургічні процедури',
    badge: 'Без урахування вартості наркозу та витратних матеріалів (якщо не вказано інше)',
    items: [
      { name: 'Хірургічна обробка ран', price: 'від 100.00 грн' },
      { name: 'Діагностична лапаратомія', price: 'від 2 500.00 грн' },
      { name: 'Герніопластика – ушивання грижі', price: 'від 2 500.00 грн' },
      { name: 'Ентеротомія – операція на кишечнику', price: 'від 6 000.00 грн' },
      { name: 'Уретростомія – операція на уретрі', price: 'від 7 000.00 грн' },
      { name: 'Цистостомія – операція на сечовому міхурі', price: 'від 5 000.00 грн' },
      { name: 'Кесарів розтин', price: 'від 5 000.00 грн' },
      { name: 'Видалення новоутворення', price: 'від 500.00 грн' },
      { name: 'Унілатеральна мастектомія кішки', price: '4 000.00 грн' },
      { name: 'Унілатеральна мастектомія собаки', price: '5 000.00 грн' },
      { name: 'Операція по усуненню пролапса слізної залози на одному оці', price: 'від 2 500.00 грн' },
    ],
  },
  {
    id: 'neutering',
    title: 'Комплексна кастрація та стерилізація',
    badge: 'У вартість включена анестезія. Антибіотикотерапія підбирається індивідуально і сплачується окремо',
    items: [
      { name: 'Комплексна стерилізація кішки (до 4 кг)', price: '3 000.00 грн' },
      { name: 'Комплексна стерилізація кішки (від 4 кг)', price: '3 000.00 грн' },
      { name: 'Комплексна кастрація кота (до 4 кг)', price: '2 000.00 грн' },
      { name: 'Комплексна кастрація кота (від 4 кг)', price: '2 500.00 грн' },
      { name: 'Комплексна кастрація кота крипторха (одностороннього)', price: 'від 3 500.00 грн' },
      { name: 'Комплексна кастрація кобеля до 5 кг', price: '3 500.00 грн' },
      { name: 'Комплексна кастрація кобеля від 5 до 10 кг', price: '4 500.00 грн' },
      { name: 'Комплексна кастрація кобеля від 10 до 15 кг', price: '5 500.00 грн' },
      { name: 'Комплексна кастрація кобеля від 15 до 25 кг', price: '6 500.00 грн' },
      { name: 'Комплексна кастрація кобеля від 25 до 35 кг', price: '7 500.00 грн' },
      { name: 'Комплексна стерилізація суки до 5 кг', price: '4 000.00 грн' },
      { name: 'Комплексна стерилізація суки від 5 до 10 кг', price: '5 000.00 грн' },
      { name: 'Комплексна стерилізація суки від 10 до 15 кг', price: '7 000.00 грн' },
      { name: 'Комплексна стерилізація суки від 15 до 25 кг', price: '7 500.00 грн' },
      { name: 'Комплексна стерилізація суки від 25 до 35 кг', price: '8 500.00 грн' },
    ],
  },
  {
    id: 'euthanasia',
    title: 'Евтаназія та ритуальні послуги',
    items: [
      { name: 'Евтаназія котів та малих собак', price: '1 500.00 грн' },
      { name: 'Евтаназія собак великих порід', price: '2 500.00 грн' },
      { name: 'Евтаназія гризуна', price: '1 000.00 грн' },
      { name: 'Кремація індивідуальна до 10 кг', price: '3 500.00 грн' },
      { name: 'Кремація індивідуальна 10–25 кг', price: '3 800.00 грн' },
      { name: 'Кремація індивідуальна 25–40 кг', price: '4 200.00 грн' },
      { name: 'Кремація індивідуальна 40–50 кг', price: '4 500.00 грн' },
      { name: 'Кремація індивідуальна більше 50 кг', price: '5 000.00 грн' },
      { name: 'Кремація загальна до 10 кг', price: '2 250.00 грн' },
      { name: 'Кремація загальна 10–25 кг', price: '2 750.00 грн' },
      { name: 'Кремація загальна 25–40 кг', price: '3 650.00 грн' },
      { name: 'Кремація загальна 40–50 кг', price: '3 850.00 грн' },
      { name: 'Кремація загальна більше 50 кг', price: '4 150.00 грн' },
    ],
  },
];

export default function PricesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const telegramUrl = 'https://t.me/+380962030411';
  const viberUrl = 'viber://chat?number=%2B380962030411';
  const phone = '+380 96 203 04 11';

  // Filter logic
  const filteredData = priceListData
    .map((category) => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      const matchingItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );

      if (matchingItems.length === 0) return null;

      return {
        ...category,
        items: matchingItems,
      };
    })
    .filter(Boolean) as ServiceCategory[];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На головну</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-3 py-2 rounded-xl hover:bg-sky-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs transition-colors shadow-xs"
              >
                Telegram
              </a>
              <a
                href={viberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#7360f2] hover:bg-[#5f4ccb] text-white font-bold text-xs transition-colors shadow-xs"
              >
                Viber
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Section (No Images, Pure Typography & Layout) */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Прейскурант послуг 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Прайс-лист ветеринарної клініки «Добрий Доктор»
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Офіційні та фіксовані розцінки на первинні огляди, терапію, вакцинацію, стоматологію, хірургію та лабораторні аналізи.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-sky-200 font-semibold">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>м. Київ, вул. Кирилівська, 123</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Без прихованих доплат</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        
        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-5">
          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Введіть назву послуги (наприклад: 'вакцинація', 'УЗ', 'стерилізація', 'аналіз')..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md"
              >
                Очистити
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Усі категорії ({priceListData.reduce((acc, c) => acc + c.items.length, 0)})
            </button>
            {priceListData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Disclaimer Box */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Зверніть увагу:</p>
            <p className="mt-0.5 text-amber-800 leading-relaxed">
              Точна вартість комплексних хірургічних втручань та інтенсивної терапії залежить від маси тварини, загального клінічного стану та кількості необхідних медикаментів і витратних матеріалів. Фінальна кошторисна вартість узгоджується з лікарем до початку маніпуляцій.
            </p>
          </div>
        </div>

        {/* Service Tables List */}
        {filteredData.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-extrabold text-slate-800">
              Послуг за запитом «{searchQuery}» не знайдено
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Спробуйте змінити пошукове слово або оберіть категорію вище
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded-xl hover:bg-sky-700 transition-colors"
            >
              Скинути фільтри
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredData.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <span>{category.title}</span>
                  </h2>
                  {category.badge && (
                    <span className="text-[11px] font-bold bg-sky-500/20 border border-sky-400/30 text-sky-200 px-3 py-1 rounded-full w-fit">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <th className="py-3.5 px-6">Найменування послуги</th>
                        <th className="py-3.5 px-6 text-right w-44 sm:w-56">Вартість</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm font-medium">
                      {category.items.map((item, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-sky-50/50 transition-colors group"
                        >
                          <td className="py-3.5 px-6 text-slate-800 group-hover:text-sky-900 leading-snug">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-6 text-right text-sky-700 font-extrabold whitespace-nowrap">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-cyan-700 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Потрібна додаткова консультація чи запис?
            </h3>
            <p className="text-sky-100 text-xs sm:text-sm mt-1 max-w-xl">
              Наші адміністратори та лікарі готові відповісти на всі питання у зручному для вас месенджері.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <MessengerButtons
              telegramUrl={telegramUrl}
              viberUrl={viberUrl}
              size="md"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Ветеринарна клініка «Добрий Доктор». м. Київ, вул. Кирилівська, 123.</p>
          <Link href="/" className="text-sky-400 hover:underline font-bold">
            Повернутися на головну сторінку
          </Link>
        </div>
      </footer>
    </div>
  );
}
