export default function AboutContact() {
  return (
    <section className="bg-[#0b1220] text-white">
      {/* About */}
      <div className="container mx-auto px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">About & Summary</h3>
        <div className="mt-8 max-w-3xl mx-auto text-center text-white/80">
          <p>
            I'm Ahmad Raza — a Graphic Designer & E-commerce Specialist focused on Amazon, Shopify, Etsy, and Walmart.
            I help brands design compelling creatives, optimize listings, scale PPC, and build growth-ready storefronts.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <li className="bg-white/5 border border-white/10 rounded-lg p-4">Amazon PPC scaling to profitable ACOS</li>
            <li className="bg-white/5 border border-white/10 rounded-lg p-4">Shopify SEO & conversion optimization</li>
            <li className="bg-white/5 border border-white/10 rounded-lg p-4">Branding, packaging, and A+ content</li>
          </ul>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['Amazon PPC','Listing SEO','Shopify','Graphic Design','Helium10','Klaviyo','Etsy','Walmart','FBA Ops'].map(t => (
              <span key={t} className="text-xs rounded-full bg-white/10 border border-white/10 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#0f1724]">
        <div className="container mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center">Contact</h3>
          <div className="mt-8 max-w-3xl mx-auto text-center text-white/80 space-y-2">
            <p>Email: <a className="text-[#1E90FF] hover:underline" href="mailto:raza0754455@gmail.com">raza0754455@gmail.com</a></p>
            <p>Phone: <a className="hover:underline" href="tel:+923001177381">0300-1177381</a></p>
            <p>WhatsApp: <a className="text-[#32CD32] hover:underline" href="https://wa.me/923015723055" target="_blank" rel="noreferrer">Chat now</a></p>
            <p>LinkedIn: <a className="hover:underline" href="https://www.linkedin.com/in/yousaf-raza-660a5b38a/" target="_blank" rel="noreferrer">Profile</a></p>
            <div className="pt-4">
              <a
                href="mailto:raza0754455@gmail.com?subject=Project%20Inquiry"
                className="inline-flex rounded-lg bg-gradient-to-r from-[#1E90FF] to-[#32CD32] px-6 py-2 shadow-lg hover:opacity-90"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0b1220]">
        <div className="container mx-auto px-6 py-8 text-center text-white/60 text-sm">
          © 2025 Ahmad Raza — Raza Creative Solutions · Portfolio & References available on request
        </div>
      </footer>
    </section>
  );
}
