import React from 'react';

const AboutContact = () => {
  return (
    <section className="bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">About Ahmad Raza</h3>
            <p className="text-slate-300">
              Creative video editor and motion designer specializing in performance ads,
              reels/shorts, and brand animations. I combine pace, typography, and sound design
              to communicate clearly and convert.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="rounded-lg bg-white/5 p-3">100+ Ads Delivered</li>
              <li className="rounded-lg bg-white/5 p-3">Meta & TikTok Ready</li>
              <li className="rounded-lg bg-white/5 p-3">DaVinci, AE, PR</li>
              <li className="rounded-lg bg-white/5 p-3">Fast Turnarounds</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <a href="mailto:ahmadraza@example.com" className="block underline-offset-4 hover:underline">ahmadraza@example.com</a>
              <a href="tel:+923001234567" className="block underline-offset-4 hover:underline">+92 300 1234567</a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="block underline-offset-4 hover:underline">WhatsApp</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block underline-offset-4 hover:underline">LinkedIn</a>
            </div>
            <a
              href="mailto:ahmadraza@example.com?subject=Hire%20for%20Video%20Editing"
              className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ahmad Raza — All rights reserved.
      </footer>
    </section>
  );
};

export default AboutContact;
