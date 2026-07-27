'use client';

import React from 'react';

interface MessengerButtonsProps {
  telegramUrl?: string;
  viberUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'col';
  className?: string;
  showIconOnlyOnMobile?: boolean;
}

export default function MessengerButtons({
  telegramUrl = 'https://t.me/+380962030411',
  viberUrl = 'viber://chat?number=%2B380962030411',
  size = 'md',
  layout = 'row',
  className = '',
  showIconOnlyOnMobile = false,
}: MessengerButtonsProps) {
  // Size classes
  const paddingMap = {
    sm: 'px-3.5 py-2 text-xs font-semibold rounded-xl gap-2',
    md: 'px-5 py-3 text-sm font-semibold rounded-2xl gap-2.5',
    lg: 'px-6 py-4 text-base font-bold rounded-2xl gap-3 shadow-md hover:shadow-lg',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const containerLayout = layout === 'col' ? 'flex flex-col w-full' : 'flex flex-wrap items-center';

  return (
    <div className={`${containerLayout} gap-3 ${className}`}>
      {/* Telegram Button */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 bg-[#0088cc] hover:bg-[#0077b5] text-white focus:outline-none focus:ring-4 focus:ring-sky-200 ${paddingMap[size]} ${
          layout === 'col' ? 'w-full' : ''
        }`}
        id="cta-telegram-button"
      >
        <svg
          className={`${iconSizeMap[size]} fill-current shrink-0`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.38-3.61 3.99-1.66 4.82-1.95 5.36-1.96.12 0 .38.03.55.17.14.12.18.28.2.45-.02.07-.02.16-.03.25z" />
        </svg>
        <span className={showIconOnlyOnMobile ? 'hidden sm:inline' : 'inline'}>
          Написати в Telegram
        </span>
      </a>

      {/* Viber Button */}
      <a
        href={viberUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 bg-[#7360f2] hover:bg-[#5f4ccb] text-white focus:outline-none focus:ring-4 focus:ring-purple-200 ${paddingMap[size]} ${
          layout === 'col' ? 'w-full' : ''
        }`}
        id="cta-viber-button"
      >
        <svg
          className={`${iconSizeMap[size]} fill-current shrink-0`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.78 17.5c-.56-.23-3.28-1.62-3.8-1.81-.51-.19-.89-.28-1.26.28-.38.56-1.46 1.83-1.79 2.21-.33.38-.66.42-1.22.14-.56-.28-2.38-.88-4.53-2.8-1.67-1.49-2.8-3.33-3.13-3.9-.33-.56-.03-.87.25-1.14.25-.25.56-.66.84-.99.28-.33.38-.56.56-.94.19-.38.09-.7-.05-.99-.14-.28-1.26-3.04-1.73-4.16-.45-1.09-.91-.94-1.26-.96-.33-.02-.7-.02-1.08-.02-.38 0-.99.14-1.5.7-.52.56-1.98 1.93-1.98 4.72 0 2.78 2.03 5.47 2.31 5.85.28.38 3.99 6.1 9.68 8.55 1.35.58 2.41.93 3.23 1.19 1.36.43 2.6.37 3.58.22 1.09-.16 3.28-1.34 3.75-2.63.47-1.29.47-2.39.33-2.63-.14-.23-.52-.37-1.08-.65z" />
        </svg>
        <span className={showIconOnlyOnMobile ? 'hidden sm:inline' : 'inline'}>
          Написати у Viber
        </span>
      </a>
    </div>
  );
}

