'use client';

import React, { useState } from 'react';
import { Settings, X, Check, RefreshCw, Send, Phone, MapPin, Clock } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    telegramUrl: string;
    viberUrl: string;
    phone: string;
    workingHours: string;
    address: string;
  };
  onSave: (newConfig: {
    telegramUrl: string;
    viberUrl: string;
    phone: string;
    workingHours: string;
    address: string;
  }) => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  config,
  onSave,
}: SettingsModalProps) {
  const [formData, setFormData] = useState(config);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const resetDefault = () => {
    const defaultConfig = {
      telegramUrl: 'https://t.me/+380962030411',
      viberUrl: 'viber://chat?number=%2B380962030411',
      phone: '+380 96 203 04 11',
      workingHours: 'Щодня 09:00–21:00 без вихідних',
      address: 'м. Київ, вул. Кирилівська, 123',
    };
    setFormData(defaultConfig);
    onSave(defaultConfig);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-sky-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Налаштування контактів та месенджерів
            </h3>
            <p className="text-xs text-slate-500">
              Вкажіть актуальні посилання замовника для миттєвого оновлення кнопок на сайті
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-sky-500" />
              Посилання на Telegram (t.me/...):
            </label>
            <input
              type="text"
              value={formData.telegramUrl}
              onChange={(e) => setFormData({ ...formData, telegramUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="https://t.me/your_clinic"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-purple-600" />
              Посилання на Viber:
            </label>
            <input
              type="text"
              value={formData.viberUrl}
              onChange={(e) => setFormData({ ...formData, viberUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="viber://chat?number=%2B380962030411"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              Номер телефону клініки:
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="+380 (44) 123-45-67"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-600" />
              Графік роботи:
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Щодня 09:00–21:00"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              Адреса клініки:
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="м. Київ, вул. О. Ольжича, 14"
              required
            />
          </div>

          <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={resetDefault}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Скинути</span>
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-200 flex items-center gap-1.5 transition-transform active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>Застосувати</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
