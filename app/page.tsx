'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import SettingsModal from '@/components/SettingsModal';

export default function Home() {
  const [config, setConfig] = useState({
    telegramUrl: 'https://t.me/+380962030411',
    viberUrl: 'viber://chat?number=%2B380962030411',
    phone: '+380 96 203 04 11',
    workingHours: 'Щодня 09:00–21:00 без вихідних',
    address: 'м. Київ, вул. Кирилівська, 123',
  });

  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header / Navbar */}
      <Navbar
        telegramUrl={config.telegramUrl}
        viberUrl={config.viberUrl}
        phone={config.phone}
        workingHours={config.workingHours}
        address={config.address}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          telegramUrl={config.telegramUrl}
          viberUrl={config.viberUrl}
          phone={config.phone}
          workingHours={config.workingHours}
          address={config.address}
        />

        <AboutSection />

        <GallerySection />

        <ServicesSection />

        <DoctorsSection />

        <AdvantagesSection />

        <ContactsSection
          telegramUrl={config.telegramUrl}
          viberUrl={config.viberUrl}
          phone={config.phone}
          workingHours={config.workingHours}
          address={config.address}
        />
      </main>

      {/* Footer */}
      <Footer
        phone={config.phone}
        address={config.address}
      />

      {/* Mobile Sticky 1-Tap Messenger Bar */}
      <MobileStickyBar
        telegramUrl={config.telegramUrl}
        viberUrl={config.viberUrl}
      />

      {/* Settings Modal for Testing Customer Telegram / WhatsApp links */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        config={config}
        onSave={(newConfig) => setConfig(newConfig)}
      />
    </div>
  );
}
