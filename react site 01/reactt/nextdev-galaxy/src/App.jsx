import React, { useState } from 'react';

export default function NextDevGalaxyLanding() {
  const [navOpen, setNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState({ user: 'muhammadkhan01', pass: 'moon@812012' });
  const [order, setOrder] = useState({ name: '', service: 'Website & AI Chatbot', budget: '', details: '' });
  const ownerWhats = '03328662897';

  function submitOrder(e) {
    e.preventDefault();
    const waText = encodeURIComponent(`Hello NextDev Galaxy, I want to order: ${order.service}. Name: ${order.name}. Budget: ${order.budget}. Details: ${order.details}`);
    window.open(`https://wa.me/92${ownerWhats.replace(/^0+/, '')}?text=${waText}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 antialiased">
      <header className="backdrop-blur-sm bg-black/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 via-gray-200 to-yellow-600 flex items-center justify-center shadow-2xl">
              <span className="font-extrabold tracking-wide text-lg text-black">NDG</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-400 to-yellow-600">NextDev Galaxy</h1>
              <p className="text-xs text-gray-400 -mt-1">Innovation • AI • Product Engineering</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-400 to-yellow-600">NextDev Galaxy — Crafting AI & Digital Products</h2>
            <p className="mt-4 text-gray-300 max-w-xl">We design premium digital experiences and build practical AI products. Orders and queries are handled directly via WhatsApp for fast response.</p>
          </div>

          <div className="bg-gradient-to-tr from-white/10 to-yellow-600/20 p-8 rounded-3xl shadow-2xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Quick Order</h3>
              <p className="text-sm text-gray-300">Orders will be sent via WhatsApp: {ownerWhats}</p>
            </div>

            <form id="order-form" onSubmit={submitOrder} className="mt-6 grid gap-3">
              <input required value={order.name} onChange={(e)=>setOrder({...order, name: e.target.value})} placeholder="Your name" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
              <input required value={order.service} onChange={(e)=>setOrder({...order, service: e.target.value})} placeholder="Service" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
              <input value={order.budget} onChange={(e)=>setOrder({...order, budget: e.target.value})} placeholder="Budget (optional)" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
              <textarea value={order.details} onChange={(e)=>setOrder({...order, details: e.target.value})} placeholder="Project details" rows={4} className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
              <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Send via WhatsApp</button>
            </form>
          </div>
        </section>

        <section id="privacy" className="py-12">
          <h3 className="text-2xl font-bold">Privacy Policy</h3>
          <p className="mt-3 text-gray-300 max-w-3xl">NextDev Galaxy respects your privacy. Any data you share (name, order details, budget) is used only for project communication and is not shared with third parties. Orders are processed exclusively via WhatsApp. By submitting an order you consent to be contacted for project purposes only.</p>
        </section>

        <footer className="mt-12 border-t border-white/5 pt-6 text-sm text-gray-400">
          <div className="flex items-center justify-between">
            <div>© {new Date().getFullYear()} NextDev Galaxy — All rights reserved.</div>
            <a href="#privacy">Privacy</a>
          </div>
        </footer>
      </main>
    </div>
  );
}