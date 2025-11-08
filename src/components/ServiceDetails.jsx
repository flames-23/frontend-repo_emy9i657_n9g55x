import React, { useMemo } from 'react';

const DATA = {
  'video-ads': {
    title: 'High-Impact Video Ads',
    hero: 'https://images.unsplash.com/photo-1613252039760-cf2e69429f6d?q=80&w=1600&auto=format&fit=crop',
    body:
      'Direct-response ads optimized for attention, clarity, and conversion. I focus on fast hooks, tight pacing, typography, and strong CTAs to maximize ROAS across Meta, TikTok, and YouTube.',
    gallery: [
      'https://cdn.coverr.co/videos/coverr-product-presentation-6893/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-smartwatch-promo-4823/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-urban-fashion-shoot-3786/1080p.mp4',
    ],
  },
  'shorts-reels': {
    title: 'Reels & Shorts Editing',
    hero: 'https://images.unsplash.com/photo-1552084117-56a987666449?q=80&w=1600&auto=format&fit=crop',
    body:
      'Retention-focused social edits with captions, punch-in/punch-out, memes, and motion accents. Built for watch time and shareability.',
    gallery: [
      'https://cdn.coverr.co/videos/coverr-colorful-smoke-8641/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-night-city-neon-2574/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-abstract-shapes-9953/1080p.mp4',
    ],
  },
  'motion-graphics': {
    title: 'Motion Graphics',
    hero: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    body:
      'Logo stings, app promos, and explainers with clean animation principles and modern design.',
    gallery: [
      'https://cdn.coverr.co/videos/coverr-abstract-shapes-9953/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-liquid-shapes-4720/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-gradient-waves-8074/1080p.mp4',
    ],
  },
  'brand-visuals': {
    title: 'Brand Visual Systems',
    hero: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    body:
      'Reusable templates and graphics: intros/outros, lower-thirds, and overlays for consistent content pipelines.',
    gallery: [
      'https://cdn.coverr.co/videos/coverr-macro-keyboard-keys-3931/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-digital-interface-9100/1080p.mp4',
      'https://cdn.coverr.co/videos/coverr-ui-elements-2887/1080p.mp4',
    ],
  },
};

const ServiceDetails = ({ serviceKey, onBack }) => {
  const data = useMemo(() => DATA[serviceKey], [serviceKey]);

  if (!data) return null;

  return (
    <div className="text-white">
      <div className="relative h-60 w-full overflow-hidden sm:h-80">
        <img src={data.hero} alt={data.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-5 left-5 text-2xl font-bold sm:text-3xl">{data.title}</div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-slate-300">{data.body}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {data.gallery.map((src, i) => (
            <video key={i} className="aspect-video w-full rounded-xl border border-white/10 object-cover" src={src} muted playsInline loop autoPlay preload="metadata" />
          ))}
        </div>
        <button onClick={onBack} className="mt-8 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
