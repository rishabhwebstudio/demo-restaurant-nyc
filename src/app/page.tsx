"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Utensils,
  Wine,
  Sparkles,
  Menu as MenuIcon,
  X,
  ExternalLink,
  ChefHat,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function BarbarescoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const signatureDishes = [
    {
      name: "Ravioli di casa",
      price: "$25",
      badge: "Handmade Daily",
      description:
        "Delicate house-made pasta parcels stuffed with creamy whole-milk ricotta and organic spinach, finished in a browned sage butter emulsion and aged 24-month Parmigiano-Reggiano.",
      image:
        "https://images.unsplash.com/photo-1587740896339-96a76170508d?w=800&q=80",
      alt: "Freshly made artisanal ravioli with sage butter and parmesan",
    },
    {
      name: "Pappardelle con pollo e verdure",
      price: "$27",
      badge: "Chef's Recommendation",
      description:
        "Ribbons of fresh hand-cut pappardelle pasta tossed with tender braised free-range chicken, sweet shallots, and crisp seasonal market vegetables in a light white wine and extra-virgin olive oil brodo.",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3d5d628165b?w=800&q=80",
      alt: "Pappardelle pasta tossed with braised chicken and fresh garden vegetables",
    },
    {
      name: "Salmone ai semi di sesamo",
      price: "$33",
      badge: "Fresh Catch",
      description:
        "Pan-roasted North Atlantic salmon filet encrusted in toasted sesame seeds, served atop sautéed baby market greens and seasonal vegetables, dressed with a citrus-infused balsamic glaze.",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
      alt: "Sesame-crusted pan roasted salmon fillet with fresh sautéed greens",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo on Left */}
          <a href="#" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-zinc-100 group-hover:text-amber-500 transition-colors uppercase">
              Barbaresco
            </span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-medium">
              Ristorante • Upper East Side NYC
            </span>
          </a>

          {/* Nav Links in Middle */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a
              href="#menu"
              className="hover:text-amber-500 transition-colors py-1"
            >
              Menu
            </a>
            <a
              href="#about"
              className="hover:text-amber-500 transition-colors py-1"
            >
              Our Story
            </a>
            <a
              href="#location"
              className="hover:text-amber-500 transition-colors py-1"
            >
              Location &amp; Hours
            </a>
            <a
              href="tel:2125172288"
              className="hover:text-amber-500 transition-colors py-1 flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>(212) 517-2288</span>
            </a>
          </nav>

          {/* Styled Reserve Table Button on Right */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:2125172288"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-950/30"
            >
              <Phone className="w-4 h-4" />
              <span>Reserve Table</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:2125172288"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-3.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none rounded-lg border border-zinc-800 bg-zinc-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-500" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 space-y-4">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-300 hover:text-amber-500 py-2 border-b border-zinc-900"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-300 hover:text-amber-500 py-2 border-b border-zinc-900"
            >
              Our Story
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-300 hover:text-amber-500 py-2 border-b border-zinc-900"
            >
              Location &amp; Hours
            </a>
            <div className="pt-2">
              <a
                href="tel:2125172288"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Reserve Table • (212) 517-2288</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section: Full Height with Background Image & Dark Overlay */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Centered Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/80 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-amber-500 mb-6 backdrop-blur-sm shadow-md">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Authentic Italian Tradition • Upper East Side, Manhattan</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-tight mb-6">
              Warm, Upscale Dining on <br className="hidden sm:inline" />
              <span className="text-amber-500">Lexington Avenue</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10">
              Experience the timeless elegance of classic Italian cuisine in New York City.
              From scratch-made pastas folded daily to hand-selected Piedmontese vintages,
              we bring authentic old-school hospitality to every table.
            </p>

            {/* Two Styled CTA Buttons Side-by-Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:2125172288"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40"
              >
                <Phone className="w-5 h-5" />
                <span>Reserve a Table • (212) 517-2288</span>
              </a>
              <a
                href="#menu"
                className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Utensils className="w-5 h-5 text-amber-500" />
                <span>Explore Menu</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <p className="text-xl md:text-2xl font-bold text-amber-500">100% Fresh</p>
                <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  Handmade Pastas Daily
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-amber-500">7 Days a Week</p>
                <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  12:00 PM – 11:00 PM
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-xl md:text-2xl font-bold text-amber-500">NYC Classic</p>
                <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  843 Lexington Ave
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid Section */}
        <section id="menu" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 block">
              Culinary Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
              Signature Dishes
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Every dish honors ancestral Italian culinary heritage, prepared with premium
              imported Italian ingredients and fresh seasonal produce.
            </p>
          </div>

          {/* CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-zinc-950/80 backdrop-blur text-zinc-200 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700">
                        {dish.badge}
                      </span>
                    </div>

                    {/* Amber Price Tag */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-zinc-950/90 text-amber-500 text-base font-bold px-3 py-1 rounded-lg border border-amber-500/40 shadow-md">
                        {dish.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-500 transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-amber-500 font-bold text-lg md:hidden">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="tel:2125172288"
                    className="w-full bg-zinc-800 hover:bg-amber-600 hover:text-white text-zinc-200 text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 border border-zinc-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500 group-hover:text-white" />
                    <span>Order / Reserve Dish</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Banner */}
          <div className="mt-14 p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-600/20 items-center justify-center text-amber-500 flex-shrink-0">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-100">
                  Daily Chef Specials &amp; Seasonal Truffles
                </h4>
                <p className="text-sm text-zinc-400 mt-0.5">
                  Ask our sommelier and captains for today&apos;s fresh seafood selections and rare wine pairings.
                </p>
              </div>
            </div>
            <a
              href="tel:2125172288"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm whitespace-nowrap flex items-center gap-2 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call (212) 517-2288</span>
            </a>
          </div>
        </section>

        {/* About / Story Section: Generous Padding */}
        <section id="about" className="py-24 px-6 border-y border-zinc-800/80 bg-zinc-900/40 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Column */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-500 tracking-wider uppercase">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Our Heritage &amp; Craft</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
                  Old-School Cuisine &amp; <br />
                  <span className="text-amber-500">Fresh, Handmade Pastas</span>
                </h2>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                  For decades, <strong className="text-zinc-100 font-semibold">Barbaresco Restaurant</strong> has been a warm sanctuary for discerning New Yorkers and visitors seeking authentic Italian cuisine without compromise.
                </p>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Every morning in our Lexington Avenue kitchen, our chefs roll and shape each batch of pasta by hand using imported Italian semolina flour and fresh farm eggs. From delicate ravioli to rich pappardelle ribbons, our dishes are slow-simmered in time-tested sauces that honor the culinary traditions of Piedmont and Northern Italy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                    <p className="text-amber-500 font-bold text-base">Made From Scratch</p>
                    <p className="text-zinc-400 text-xs mt-1">
                      No shortcuts. Pasta rolled, cut, and stuffed fresh daily.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                    <p className="text-amber-500 font-bold text-base">Old-School Soul</p>
                    <p className="text-zinc-400 text-xs mt-1">
                      Intimate Upper East Side dining with attentive hospitality.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="tel:2125172288"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Reserve a Table</span>
                  </a>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80"
                    alt="Chef crafting authentic fresh Italian pasta from scratch"
                    className="w-full h-[440px] object-cover"
                  />
                </div>
                {/* Floating Accent Card */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-2xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-600/30 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-zinc-100">Handcrafted Daily</p>
                      <p className="text-xs text-zinc-400">Authentic Italian heritage in NYC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Hours Section: Generous Padding */}
        <section id="location" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 block">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
              Location &amp; Hours
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Located on Lexington Avenue between 64th &amp; 65th Street. We look forward to hosting you for lunch, dinner, and private gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Cards Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Address Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center flex-shrink-0 text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 mb-1">Address</h3>
                    <p className="text-zinc-300 font-medium">843 Lexington Ave</p>
                    <p className="text-zinc-400 text-sm mt-0.5">
                      New York, NY 10065 (Between 64th &amp; 65th St)
                    </p>
                    <a
                      href="https://maps.google.com/?q=843+Lexington+Ave,+New+York,+NY+10065"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:text-amber-400 font-semibold mt-3"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center flex-shrink-0 text-amber-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-zinc-100 mb-1">Hours of Operation</h3>
                    <p className="text-xs text-zinc-400 mb-3">
                      Serving lunch and dinner continuously 7 days a week
                    </p>
                    <div className="space-y-2 text-sm border-t border-zinc-800 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">Monday – Sunday</span>
                        <span className="text-amber-500 font-bold bg-zinc-950 px-3 py-1 rounded text-xs border border-zinc-800">
                          12:00 PM – 11:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Reservation Card */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-600/30 rounded-xl p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zinc-100">Table Reservations</h3>
                    <p className="text-xs text-zinc-400 mt-1 mb-4 leading-relaxed">
                      Call our host directly to secure table reservations, request dietary accommodations, or discuss private events.
                    </p>
                    <a
                      href="tel:2125172288"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (212) 517-2288</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Google Maps Iframe Column */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="w-full h-full min-h-[380px] lg:min-h-[460px] rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900 relative">
                <iframe
                  title="Barbaresco Restaurant Location at 843 Lexington Ave, New York"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8475876307987!2d-73.96666802346853!3d40.765352834344485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ef9c79fbe5%3A0x8be5b7fbb9fb8e4b!2s843%20Lexington%20Ave%2C%20New%20York%2C%20NY%2010065!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: Dark Background with Well-Spaced Columns */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
            {/* Col 1: Brand */}
            <div className="space-y-4">
              <a href="#" className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider text-zinc-100 uppercase">
                  Barbaresco
                </span>
                <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-medium">
                  Ristorante Italiano • NYC
                </span>
              </a>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Upscale classic Italian dining, fresh pasta crafted daily, and genuine hospitality on Manhattan&apos;s Upper East Side.
              </p>
              <p className="text-xs text-amber-500 font-semibold">
                ★ 843 Lexington Ave, New York
              </p>
            </div>

            {/* Col 2: Address Column */}
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4">
                Address
              </h4>
              <address className="not-italic text-xs text-zinc-400 space-y-2">
                <p className="text-zinc-200 font-medium">Barbaresco Restaurant</p>
                <p>843 Lexington Ave</p>
                <p>New York, NY 10065</p>
                <p className="text-zinc-500">Between 64th &amp; 65th Streets</p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=843+Lexington+Ave,+New+York,+NY+10065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 font-semibold"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </address>
            </div>

            {/* Col 3: Hours Column */}
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-4">
                Hours
              </h4>
              <ul className="text-xs text-zinc-400 space-y-2">
                <li className="flex justify-between items-center text-zinc-200">
                  <span className="font-medium">Monday – Sunday:</span>
                </li>
                <li className="text-amber-500 font-bold text-sm">
                  12:00 PM – 11:00 PM
                </li>
                <li className="text-zinc-500 pt-1">
                  Continuous lunch &amp; dinner service daily
                </li>
              </ul>
            </div>

            {/* Col 4: Clickable Styled Phone Number & Reservations */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-zinc-100 mb-2">
                Reserve by Phone
              </h4>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Reservations recommended for dinner service. Walk-ins always welcome.
              </p>
              <a
                href="tel:2125172288"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call (212) 517-2288</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Barbaresco Restaurant. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              843 Lexington Ave, New York, NY 10065 • Phone:{" "}
              <a href="tel:2125172288" className="text-amber-500 hover:underline">
                (212) 517-2288
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
