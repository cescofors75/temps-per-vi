"use client"

import { useEffect } from 'react';

export function SafariViewportFix() {
  useEffect(() => {
    // Solo aplicar en iOS para evitar conflictos
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Función simplificada para iOS
      const applyIOSFix = () => {
        // Solo ajustar la altura del viewport sin manipular el scroll
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      // Aplicar inmediatamente
      applyIOSFix();
      
      // Solo escuchar resize para ajustar el viewport height
      const handleResize = () => {
        setTimeout(applyIOSFix, 100);
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }
  }, []);
  
  return null;
}

