import React, { useEffect, useMemo, useState } from 'react';
import HeaderHero from './components/HeaderHero';
import Services from './components/Services';
import VideoAds from './components/VideoAds';
import AboutContact from './components/AboutContact';
import ServiceDetails from './components/ServiceDetails';

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isDetail = useMemo(() => hash.startsWith('#/service/'), [hash]);
  const serviceKey = useMemo(() => (isDetail ? hash.split('/')[2] : ''), [hash, isDetail]);

  return (
    <div className="font-[Poppins] bg-[#0f1724] text-white selection:bg-[#1E90FF]/30">
      {isDetail ? (
        <ServiceDetails
          serviceKey={serviceKey}
          onBack={() => {
            window.location.hash = '#/';
          }}
        />
      ) : (
        <>
          <HeaderHero />
          <Services />
          <VideoAds />
          <AboutContact />
          {/* Floating WhatsApp */}
          <a
            href="https://wa.me/923015723055"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl transition hover:scale-105"
            aria-label="WhatsApp Chat"
          >
            WA
          </a>
        </>
      )}
    </div>
  );
}
