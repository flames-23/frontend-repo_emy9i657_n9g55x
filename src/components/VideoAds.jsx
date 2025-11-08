import { useEffect, useRef } from 'react';

const VIDEOS = [
  {
    src: 'https://images.unsplash.com/photo-1580437017351-75766a55c1ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9kdWN0JTIwTGF1bmNoJTIwQWR8ZW58MHwwfHx8MTc2MjU2MTQyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    title: 'Product Launch Ad',
  },
  {
    src: 'https://images.unsplash.com/photo-1580437017351-75766a55c1ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9kdWN0JTIwTGF1bmNoJTIwQWR8ZW58MHwwfHx8MTc2MjU2MTQyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    poster: 'https://images.unsplash.com/photo-1529336953121-ad039f1c3d3b?q=80&w=800&auto=format&fit=crop',
    title: 'Lifestyle Creative Ad',
  },
  {
    src: 'https://images.unsplash.com/photo-1526958938731-27f1ccdb1817?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaWZlc3R5bGUlMjBDcmVhdGl2ZSUyMEFkfGVufDB8MHx8fDE3NjI1NjE0MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    poster: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    title: 'Store Strategy Reel',
  },
];

export default function VideoAds() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const videos = Array.from(container.querySelectorAll('video'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section id="video-ads" className="relative bg-[#0f1724] text-white py-16">
      <div className="container mx-auto px-6" ref={containerRef}>
        <h3 className="text-2xl md:text-3xl font-semibold text-center">Ad Video Samples</h3>
        <p className="text-white/70 text-center mt-2 max-w-2xl mx-auto">
          Autoplaying muted reels — they pause automatically when off-screen.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <figure key={v.src} className="rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <video
                src={v.src}
                poster={v.poster}
                muted
                loop
                playsInline
                controls
                className="w-full h-56 object-cover"
                onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
              />
              <figcaption className="p-4 text-center text-sm text-white/80">{v.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
