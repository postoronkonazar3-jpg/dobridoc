'use client';

import React, { useState } from 'react';
import { UserCheck, Award, GraduationCap, Clock, ChevronRight, X, Heart } from 'lucide-react';

export default function DoctorsSection() {
  const [activeDoctorModal, setActiveDoctorModal] = useState<any | null>(null);

  const doctors = [
    {
      id: 1,
      name: 'Олена Ковальчук',
      title: 'Головний лікар, Хірург-Офтальмолог',
      experience: '12 років',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      education: 'Національний університет біоресурсів і природокористування України (НУБіП)',
      specialization: 'Складні асистовані хірургічні втручання, офтальмологія, анестезіологія',
      certificates: 'Член Європейської асоціації ветеринарних хірургів (ESVV), сертифікат з мікрохірургії ока',
      quote: 'Для мене кожна тварина — це особистість з власною душею, яка потребує ласки та турботи.',
    },
    {
      id: 2,
      name: 'Максим Бойко',
      title: 'Лікар-Терапевт, УЗД-діагност',
      experience: '8 років',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      education: 'Харківська державна зооветеринарна академія',
      specialization: 'УЗД-діагностика внутрішніх органів, кардіологія, внутрішні хвороби',
      certificates: 'Курси підвищення кваліфікації з ультрасонографії дрібних домашніх тварин',
      quote: 'Вчасна діагностика — це 90% успішного одужання вашого улюбленця.',
    },
    {
      id: 3,
      name: 'Анна Мельник',
      title: 'Ветеринарний Дерматолог, Стоматолог',
      experience: '7 років',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      education: 'Білоцерківський національний аграрний університет',
      specialization: 'Лікування важких форм алергій, чистка та гігієна зубів ультразвуком',
      certificates: 'Сертифікований член Української ветеринарної дерматологічної спілки',
      quote: 'Здорова шкіра та міцні зуби — запорука довгого та активного життя чотирилапого.',
    },
    {
      id: 4,
      name: 'Дмитро Шевченко',
      title: 'Лікар-Ратолог (Екзотичні тварини)',
      experience: '9 років',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      education: 'НУБіП України, факультет ветеринарної медицини',
      specialization: 'Лікування кроликів, морських свинок, щурів, хом\'яків та дрібних екзотів',
      certificates: 'Спеціалізація з медицини диких та екзотичних ссавців (FECAVA)',
      quote: 'Навіть найменший гризун заслуговує на найвищий рівень медичної допомоги.',
    },
  ];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50/60 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Команда кваліфікованих медиків</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Наші фахівці
          </h2>

          <p className="text-slate-600 text-base mt-3">
            У клініці працює команда досвідчених лікарів, які щодня допомагають сотням тварин почуватися краще.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-64 overflow-hidden bg-sky-50">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-700 shadow-sm border border-sky-100 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-500" />
                    <span>Досвід: {doctor.experience}</span>
                  </div>
                </div>

                {/* Doctor Bio Details */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {doctor.name}
                  </h3>

                  <p className="text-xs font-bold text-sky-600 mt-1 mb-3">
                    {doctor.title}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    <span className="font-semibold text-slate-700">Освіта:</span> {doctor.education}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveDoctorModal(doctor)}
                  className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white rounded-2xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-sky-100"
                >
                  <span>Детальніше про лікаря</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner After Doctors Section */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-sky-100 shadow-sm text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
            <Heart className="w-6 h-6 text-sky-600" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            Бажаєте потрапити до конкретного фахівця?
          </h3>
          <p className="text-sm text-slate-600 mt-1.5 max-w-lg">
            Наші лікарі ведуть прийом за попереднім записом. Напишіть нам у месенджер у зручний для вас час!
          </p>
        </div>

      </div>

      {/* Doctor Bio Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-sky-100 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveDoctorModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
              <img
                src={activeDoctorModal.photo}
                alt={activeDoctorModal.name}
                className="w-24 h-24 rounded-2xl object-cover shrink-0 border-2 border-sky-200 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                  Досвід роботи: {activeDoctorModal.experience}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                  {activeDoctorModal.name}
                </h3>
                <p className="text-sm font-semibold text-sky-600">{activeDoctorModal.title}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  Освіта:
                </p>
                <p className="text-slate-600">{activeDoctorModal.education}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <Award className="w-4 h-4 text-sky-600" />
                  Спеціалізація та підвищення кваліфікації:
                </p>
                <p className="text-slate-600">{activeDoctorModal.specialization}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 italic text-sky-900">
                &ldquo;{activeDoctorModal.quote}&rdquo;
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="w-full py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors"
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
