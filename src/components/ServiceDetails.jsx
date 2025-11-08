import { useEffect, useMemo, useState } from 'react';

const details = {
  amazon: {
    title: 'Amazon Store Setup & Management',
    hero: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
    body: `Full-service launch and optimization: catalog, variations, A+ content, inventory, account health, and growth playbooks.`,
    media: [
      'https://images.unsplash.com/photo-1529336953121-ad039f1c3d3b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  ppc: {
    title: 'PPC Campaign Optimization',
    hero: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    body: `From audits to scale: search term mining, negation, bid rules, placements, and creatives that convert.`,
    media: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  seo: {
    title: 'SEO Product Listings',
    hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    body: `Data-backed titles, bullets, and backend terms aligned to search intent for maximum visibility.`,
    media: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  multi: {
    title: 'Multi-Platform Setup (Shopify, Etsy, eBay, Walmart)',
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    body: `Omnichannel presence with tailored storefronts and operational cohesion across platforms.`,
    media: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  graphic: {
    title: 'Graphic Design (Logos, A+ Content, Packaging)',
    hero: 'https://images.unsplash.com/photo-1529336953121-ad039f1c3d3b?q=80&w=1600&auto=format&fit=crop',
    body: `Brand visuals that earn attention and trust across ads, stores, and product pages.`,
    media: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  brand: {
    title: 'Brand Identity Design',
    hero: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    body: `Logo systems, typography, color, and usage guidelines for consistent brand storytelling.`,
    media: [
      'https://images.unsplash.com/photo-1509592149239-5d37b5a59b29?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  social: {
    title: 'Social Media Ads',
    hero: 'https://images.unsplash.com/photo-1509592149239-5d37b5a59b29?q=80&w=1600&auto=format&fit=crop',
    body: `Creative strategy and production for paid social that stops the scroll.`,
    media: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  photo: {
    title: 'Photo Editing & Retouching',
    hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    body: `Studio-grade product and lifestyle enhancement for polished brand presentation.`,
    media: [
      'https://images.unsplash.com/photo-1529336953121-ad039f1c3d3b?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  reimb: {
    title: 'Amazon Reimbursement Handling',
    hero: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop',
    body: `Audits, case filing, and recovery of lost FBA inventory and fee discrepancies.`,
    media: [
      'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1000&auto=format&fit=crop',
    ],
  },
  consult: {
    title: 'Consulting & Strategy',
    hero: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    body: `Fractional support, audits, and strategic roadmaps tailored to your goals.`,
    media: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    ],
  },
};

export default function ServiceDetails({ route }) {
  const [hash, setHash] = useState(route || window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const key = useMemo(() => {
    const parts = (hash || '#').split('/');
    return parts[2] || '';
  }, [hash]);

  const data = details[key];

  if (!data) return null;

  return (
    <section className="relative bg-[#0f1724] text-white">
      <div className="h-56 sm:h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url(${data.hero})` }} />
      <div className="container mx-auto px-6 py-10">
        <button
          onClick={() => (window.location.hash = '#/')}
          className="mb-6 inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2"
        >
          ← Back to Home
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold">{data.title}</h2>
        <p className="mt-3 text-white/80 max-w-3xl">{data.body}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.media.map((m) => (
            <img key={m} src={m} alt="media" className="w-full h-48 object-cover rounded-lg border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}
