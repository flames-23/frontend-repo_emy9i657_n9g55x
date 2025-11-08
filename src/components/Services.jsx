import { useMemo } from 'react';

const services = [
  {
    key: 'amazon',
    title: 'Amazon Store Setup & Management',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Awesome_Bokeh_08_Videvo.mov',
    desc: 'End-to-end store creation, catalog, A+ content, backend hygiene, and operations.',
  },
  {
    key: 'ppc',
    title: 'PPC Campaign Optimization',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/premium/video0223/large_watermarked/_import_61f7d9d8e1aca8.91665277_FPpreview.mp4',
    desc: 'Keyword research, bid strategies, dayparting, and conversion rate lifts.',
  },
  {
    key: 'seo',
    title: 'SEO Product Listings',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Awesome_Bokeh_03_Videvo.mov',
    desc: 'Title, bullets, backend terms, and data-driven content optimization.',
  },
  {
    key: 'multi',
    title: 'Multi-Platform Setup (Shopify, Etsy, eBay, Walmart)',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Time_Lapse_Night_Sky_02_Videvo.mov',
    desc: 'Unified presence with tailored storefronts across channels.',
  },
  {
    key: 'graphic',
    title: 'Graphic Design (Logos, A+ Content, Packaging)',
    img: 'https://images.unsplash.com/photo-1529336953121-ad039f1c3d3b?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-05/large_preview/Camera_Lens_Spinning.mp4',
    desc: 'High-impact visuals that boost brand perception and CTR.',
  },
  {
    key: 'brand',
    title: 'Brand Identity Design',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Awesome_Bokeh_18_Videvo.mov',
    desc: 'Cohesive brand systems, guides, and cross-channel consistency.',
  },
  {
    key: 'social',
    title: 'Social Media Ads',
    img: 'https://images.unsplash.com/photo-1509592149239-5d37b5a59b29?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2015-03/large_preview/Particles_Glow_07_Videvo.mov',
    desc: 'Thumb-stopping creatives and performance-first messaging.',
  },
  {
    key: 'photo',
    title: 'Photo Editing & Retouching',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Awesome_Bokeh_01_Videvo.mov',
    desc: 'Studio-grade product edits and lifestyle retouching.',
  },
  {
    key: 'reimb',
    title: 'Amazon Reimbursement Handling',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Awesome_Bokeh_05_Videvo.mov',
    desc: 'Identify, file, and recover lost FBA funds and fees.',
  },
  {
    key: 'consult',
    title: 'Consulting & Strategy',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    video: 'https://cdn.videvo.net/videvo_files/video/free/2014-12/large_preview/Time_Lapse_Night_Sky_01_Videvo.mov',
    desc: 'Roadmaps, audits, and growth frameworks for your brand.',
  },
];

export default function Services() {
  const cards = useMemo(() => services, []);

  return (
    <section id="services" className="relative bg-[#0b1220] text-white py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">Services</h3>
        <p className="text-white/70 text-center mt-2 max-w-2xl mx-auto">
          Images + autoplay videos on each card. Click to view detailed pages.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((s) => (
            <article key={s.key} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md hover:translate-y-[-2px] transition shadow-lg">
              <div className="relative h-40 w-full overflow-hidden">
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition" />
              </div>
              <div className="p-5 space-y-3">
                <h4 className="text-lg font-medium">{s.title}</h4>
                <p className="text-sm text-white/70">{s.desc}</p>
                <video
                  src={s.video}
                  muted
                  loop
                  controls
                  playsInline
                  className="mt-2 w-full rounded-md border border-white/10"
                  onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
                />
                <div className="pt-2">
                  <a
                    href={`#/service/${s.key}`}
                    className="inline-flex items-center gap-2 text-[#1E90FF] hover:text-white transition"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
