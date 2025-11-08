import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SLIDES = [
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
];

export default function HeaderHero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const profileSrc = useMemo(
    () =>
      // A lightweight placeholder avatar; replace with provided base64 if available
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop',
    []
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0f1724]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Fading slideshow overlay for texture */}
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center`} 
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === active ? 0.25 : 0,
              filter: 'saturate(0.9) blur(0px)'
            }}
          />
        ))}
      </div>

      {/* Gradient for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0f1724cc] via-[#0f1724aa] to-[#0f1724]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center text-white">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img
              src={profileSrc}
              alt="Ahmad Raza"
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
            />
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#32CD32] blur-lg opacity-30" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Ahmad Raza
            </h1>
            <p className="mt-2 text-[#cfe8ff]/90 text-sm sm:text-base">
              Graphic Designer • E-commerce & PPC Specialist
            </p>
            <p className="mt-1 text-[#cfe8ff]/70 text-xs sm:text-sm">
              Currently pursuing Chemical Engineering (2nd Year)
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:raza0754455@gmail.com?subject=Project%20Inquiry"
              className="rounded-full bg-[#1E90FF] hover:bg-[#1877d8] text-white/95 px-5 py-2 transition shadow-lg shadow-[#1E90FF]/30"
            >
              Contact / Hire
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
            We design, optimize, and scale online stores.
          </h2>
          <p className="mt-3 text-white/80">
            Amazon • Shopify • Etsy • Walmart — Listings, PPC, Creatives, & Store Strategy.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('video-ads')}
              className="rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 backdrop-blur-md transition"
            >
              Watch Ad Samples
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="rounded-lg bg-gradient-to-r from-[#1E90FF] to-[#32CD32] hover:opacity-90 px-5 py-2 shadow-lg shadow-[#1E90FF]/30"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
