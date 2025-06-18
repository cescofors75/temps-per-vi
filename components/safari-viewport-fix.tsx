"use client"

import { useEffect } from 'react';

export function SafariViewportFix() {
  useEffect(() => {
    // Detectar cualquier navegador en iOS (Safari, Chrome, Firefox, etc.)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    if (isIOS || isMobile) {
      // Función para aplicar viewport
      const applyViewport = () => {
        // Remover cualquier meta viewport existente
        const existingViewports = document.querySelectorAll('meta[name="viewport"]');
        existingViewports.forEach(meta => meta.remove());
        
        // Crear nuevo meta viewport
        const viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        
        // Configuración específica que funciona en todos los navegadores iOS
        const viewportContent = isIOS 
          ? 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
          : 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
          
        viewportMeta.setAttribute('content', viewportContent);
        document.head.appendChild(viewportMeta);
        
        // Forzar recálculo del layout
        if (isIOS) {
          document.documentElement.style.height = '100%';
          document.body.style.height = '100%';
          
          // Forzar reflow
          setTimeout(() => {
            document.documentElement.style.height = '';
            document.body.style.height = '';
          }, 50);
        }
      };
      
      // Aplicar inmediatamente
      applyViewport();
      
      // Aplicar en eventos importantes
      const events = ['load', 'resize', 'orientationchange'];
      const handleViewportUpdate = () => {
        setTimeout(applyViewport, 100);
      };
      
      events.forEach(event => {
        window.addEventListener(event, handleViewportUpdate);
      });
      
      // Cleanup
      return () => {
        events.forEach(event => {
          window.removeEventListener(event, handleViewportUpdate);
        });
      };
    }
  }, []);
  
  return null;
}

