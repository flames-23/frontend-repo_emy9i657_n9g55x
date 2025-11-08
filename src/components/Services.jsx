import React from 'react';

const services = [
  {
    key: 'video-ads',
    title: 'High-Impact Video Ads',
    desc: 'Thumb-stopping ads for Meta, TikTok & YouTube that drive ROAS.',
    img: 'https://images.unsplash.com/photo-1603575449299-b5d26d8f1008?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.coverr.co/videos/coverr-product-presentation-6893/1080p.mp4',
  },
  {
    key: 'shorts-reels',
    title: 'Reels & Shorts Editing',
    desc: 'Fast, captioned, trend-aware edits designed for retention.',
    img: 'https://images.unsplash.com/photo-1523246191644-00bce8be9b9b?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.coverr.co/videos/coverr-colorful-smoke-8641/1080p.mp4',
  },
  {
    key: 'motion-graphics',
    title: 'Motion Graphics',
    desc: '2D/3D logo animations, explainers & app promos.',
    img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec6fe4e?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.coverr.co/videos/coverr-abstract-shapes-9953/1080p.mp4',
  },
  {
    key: 'brand-visuals',
    title: 'Brand Visual Systems',
    desc: 'Lower-thirds, intros/outros, overlays & templates.',
    img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.coverr.co/videos/coverr-macro-keyboard-keys-3931/1080p.mp4',
  },
];

const Services = () => {
  const openDetails = (key) => {
    window.location.hash = `/service/${key}`;
  };

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.key}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="aspect-video w-full overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src={s.video}
                muted
                playsInline
                loop
                autoPlay
                preload="metadata"
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-300">{s.desc}</p>
              <button
                onClick={() => openDetails(s.key)}
                className="mt-3 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold transition hover:bg-indigo-500"
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
