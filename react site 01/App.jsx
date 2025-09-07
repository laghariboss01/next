import React, { useState } from 'react';

// NextDev Galaxy — Chrome/Silver/Gold theme single-file React component

export default function NextDevGalaxyLanding() {
    const [navOpen, setNavOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [login, setLogin] = useState({ user: 'muhammadkhan01', pass: 'moon@812012' });
    const [order, setOrder] = useState({ name: '', email: '', whatsapp: '', service: 'Website & AI Chatbot', budget: '', details: '' });
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

                    <nav className="hidden md:flex items-center gap-4">
                        {['Home', 'About', 'Services', 'Products', 'Portfolio', 'Pricing', 'Blog', 'Careers', 'Resources', 'Roadmap', 'FAQ', 'Contact', 'Privacy'].map((n) => (
                            <a key={n} href={`#${n.toLowerCase()}`} className="px-3 py-2 hover:bg-white/5 rounded-md transition">{n}</a>
                        ))}
                        <button onClick={() => setShowLogin(true)} className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Owner Login</button>
                        <button onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })} className="ml-2 px-4 py-2 rounded-lg border border-white/10">Order Now</button>
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(v => !v)} className="p-2 rounded-md border border-white/10">Menu</button>
                    </div>
                </div>

                {navOpen && (
                    <div className="md:hidden px-6 pb-6">
                        <div className="flex flex-col gap-2">
                            {['Home', 'About', 'Services', 'Products', 'Portfolio', 'Pricing', 'Blog', 'Careers', 'Resources', 'Roadmap', 'FAQ', 'Contact', 'Privacy'].map((n) => (
                                <a key={n} href={`#${n.toLowerCase()}`} className="px-3 py-2 hover:bg-white/5 rounded-md transition">{n}</a>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-400 to-yellow-600">NextDev Galaxy — Crafting AI & Digital Products</h2>
                        <p className="mt-4 text-gray-300 max-w-xl">We design premium digital experiences and build practical AI products. Orders and queries are handled directly via WhatsApp for fast response.</p>

                        <div className="mt-6 flex gap-3">
                            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Explore Services</button>
                            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-2xl border border-white/10">See Portfolio</button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-tr from-white/10 to-yellow-600/20 p-8 rounded-3xl shadow-2xl">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">Quick Order</h3>
                            <p className="text-sm text-gray-300">Orders will be sent via WhatsApp: {ownerWhats}</p>
                        </div>

                        <form id="order-form" onSubmit={submitOrder} className="mt-6 grid gap-3">
                            <input required value={order.name} onChange={(e) => setOrder({ ...order, name: e.target.value })} placeholder="Your name" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
                            <input required value={order.service} onChange={(e) => setOrder({ ...order, service: e.target.value })} placeholder="Service (e.g., Website, AI Model)" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
                            <input value={order.budget} onChange={(e) => setOrder({ ...order, budget: e.target.value })} placeholder="Budget (optional)" className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
                            <textarea value={order.details} onChange={(e) => setOrder({ ...order, details: e.target.value })} placeholder="Project details" rows={4} className="w-full bg-transparent border border-white/10 rounded-md px-3 py-2" />
                            <div className="flex gap-2">
                                <button type="submit" className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Send via WhatsApp</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section id="privacy" className="py-12">
                    <h3 className="text-2xl font-bold">Privacy Policy</h3>
                    <p className="mt-3 text-gray-300 max-w-3xl">NextDev Galaxy respects your privacy. Any data you share (name, order details, budget) is used only for project communication and is not shared with third parties. Orders are processed exclusively via WhatsApp at {ownerWhats}. By submitting an order you consent to be contacted for project purposes only.</p>
                </section>

                <footer className="mt-12 border-t border-white/5 pt-6 text-sm text-gray-400">
                    <div className="flex items-center justify-between">
                        <div>© {new Date().getFullYear()} NextDev Galaxy — All rights reserved.</div>
                        <div className="flex gap-4">
                            <a href="#privacy">Privacy</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
