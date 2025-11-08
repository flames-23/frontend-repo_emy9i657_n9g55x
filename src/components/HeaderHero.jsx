import React from 'react';
import Spline from '@splinetool/react-spline';

const HeaderHero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5n8y9s2rXoU8B8qJ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-28 md:flex-row md:pt-36">
        <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ahmad Raza — Creative Editor & Motion Designer
          </h1>
          <p className="text-slate-300">
            I craft fast, eye-catching video ads, reels, and animations that convert. From
            concept to delivery, I turn ideas into scroll-stopping visuals.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              onClick={() => handleScroll('video-ads')}
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/30 transition hover:scale-[1.02] hover:bg-indigo-500"
            >
              Watch Ad Samples
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              View Services
            </button>
          </div>
          <div className="pt-1 text-sm text-slate-400">Available for freelance and remote work</div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="mx-auto h-48 w-48 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur md:h-64 md:w-64">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1080&auto=format&fit=crop"
              alt="Ahmad Raza profile"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-0 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-2xl" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.15),rgba(0,0,0,0))]" />
    </section>
  );
};

export default HeaderHero;
