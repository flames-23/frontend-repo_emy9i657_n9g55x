import React, { useEffect, useRef } from 'react';

const ads = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-urban-fashion-shoot-3786/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop',
    title: 'Urban Fashion Ad'
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-cafe-latte-art-6811/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    title: 'Coffee Brand Spot'
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-smartwatch-promo-4823/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop',
    title: 'Smartwatch Promo'
  }
];

const VideoAds = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="video-ads" className="mx-auto max-w-6xl px-6 py-20 text-white">
      <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Video Ad Samples</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {ads.map((ad, i) => (
          <figure key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <video
              ref={(el) => (refs.current[i] = el)}
              className="aspect-video w-full rounded-xl object-cover"
              src={ad.src}
              poster={ad.poster}
              muted
              playsInline
              loop
              preload="metadata"
            />
            <figcaption className="px-2 pb-2 pt-3 text-sm text-slate-300">{ad.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default VideoAds;
