import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function AnalyticsTracker() {
  const location = useLocation();

  // 1. Initialize Google Analytics dynamically
  useEffect(() => {
    if (!GA_ID) return;

    // Check if gtag script is already added
    const existingScript = document.getElementById('google-analytics-script');
    if (!existingScript) {
      // Create and append gtag script tag
      const script = document.createElement('script');
      script.id = 'google-analytics-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      // Create dataLayer and gtag function globally
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, {
        send_page_view: false, // Prevent duplicate page views on load
      });
    }
  }, []);

  // 2. Track page views when routes change (React Router SPA tracking)
  useEffect(() => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
}
