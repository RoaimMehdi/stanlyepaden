import React, { useState } from 'react';
import { shopProducts } from '../data/shopData';
import { ShoppingBag, Star, BookOpen, Headphones, Tag, Filter, CheckCircle2, X, ChevronDown } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(product.formats[0].label);

  const currentFormat = product.formats.find(f => f.label === selectedFormat);

  const isRed = product.accentColor === 'red';
  const isCyan = product.accentColor === 'cyan';

  const panelClass = isRed ? 'glass-panel-red' : isCyan ? 'glass-panel-cyan' : 'glass-panel-glow';
  const badgeBg = isRed
    ? 'bg-red-950/80 text-red-300 border-red-500/40'
    : isCyan
    ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
    : 'bg-purple-950/80 text-purple-300 border-purple-500/40';

  const btnClass = isRed
    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-500 hover:to-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
    : isCyan
    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-teal-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(135,54,247,0.4)]';

  const formatBorderActive = isRed
    ? 'border-red-500/60 text-red-300 bg-red-950/40'
    : isCyan
    ? 'border-cyan-500/60 text-cyan-300 bg-cyan-950/40'
    : 'border-purple-500/60 text-purple-300 bg-purple-950/40';

  const handleAdd = () => {
    onAddToCart({ ...product, format: selectedFormat, price: currentFormat.price, id: product.id });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={`relative rounded-3xl p-5 sm:p-6 ${panelClass} transition-all duration-500 hover:-translate-y-2 group flex flex-col gap-4`}>

      {/* New badge */}
      {product.isNew && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-jura text-[10px] font-bold text-white uppercase tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            New
          </span>
        </div>
      )}

      {/* Top row: badge + rating */}
      <div className="flex items-center justify-between">
        <span className={`px-2.5 py-1 rounded-full font-jura text-[10px] font-bold uppercase tracking-wider border ${badgeBg}`}>
          {product.badge}
        </span>
        <div className="flex items-center gap-1.5 glass-panel px-2.5 py-1 rounded-full text-xs font-jura text-amber-300">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="font-bold">{product.rating}</span>
          <span className="text-gray-400 text-[10px]">({product.reviewsCount.toLocaleString()})</span>
        </div>
      </div>

      {/* Cover + info */}
      <div className="flex gap-5 items-start">
        <div className="w-28 sm:w-32 flex-shrink-0">
          <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.7)] border border-white/10 group-hover:scale-105 transition-transform duration-500">
            <img src={product.cover} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020103]/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex-1 space-y-2 text-left min-w-0">
          <div>
            <span className="font-jura text-[10px] uppercase tracking-widest text-gray-400">{product.category}</span>
            <h3 className="font-orbitron font-extrabold text-lg text-white uppercase mt-0.5 leading-tight">{product.title}</h3>
            <p className="font-outfit text-xs text-cyan-300 font-medium">{product.subtitle}</p>
          </div>

          <p className="font-inter text-xs text-gray-400 leading-relaxed line-clamp-4">{product.description}</p>

          {/* Details */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-jura text-[10px] text-gray-500">
            <span>{product.pages} pages</span>
            <span>ISBN: {product.isbn}</span>
            <span>{product.pubYear}</span>
          </div>
        </div>
      </div>

      {/* Format — selector when multiple editions, static chip when single edition */}
      <div className="flex items-center gap-2">
        <span className="font-jura text-[10px] uppercase tracking-wider text-gray-500">Format:</span>
        {product.formats.length > 1 ? (
          <div className="flex gap-2">
            {product.formats.map(fmt => (
              <button
                key={fmt.label}
                onClick={() => setSelectedFormat(fmt.label)}
                className={`px-3 py-1 rounded-full font-jura text-[10px] font-bold uppercase tracking-wider border transition-all ${
                  selectedFormat === fmt.label
                    ? formatBorderActive
                    : 'border-white/10 text-gray-500 hover:text-gray-300 glass-panel'
                }`}
              >
                {fmt.label}
              </button>
            ))}
          </div>
        ) : (
          <span className={`px-3 py-1 rounded-full font-jura text-[10px] font-bold uppercase tracking-wider border ${formatBorderActive}`}>
            {product.formats[0].label}
          </span>
        )}
      </div>

      {/* Price + actions */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4 gap-3 flex-wrap">
        <div className="flex flex-col">
          <span className="font-orbitron font-black text-2xl text-white">${currentFormat.price.toFixed(2)}</span>
          {currentFormat.originalPrice !== currentFormat.price && (
            <span className="font-jura text-xs text-gray-500 line-through">${currentFormat.originalPrice.toFixed(2)}</span>
          )}
          <span className="font-jura text-[10px] text-gray-500 mt-0.5">{selectedFormat}</span>
        </div>

        <div className="flex items-center gap-2">
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-amber-300 transition-all" title="Buy on Amazon">
            <ShoppingBag className="w-4 h-4" />
          </a>
          <a href={product.audibleLink} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition-all" title="Listen on Audible">
            <Headphones className="w-4 h-4" />
          </a>
          <button
            onClick={handleAdd}
            className={`btn-shine flex items-center gap-2 px-4 py-2.5 rounded-xl font-orbitron text-[10px] font-bold uppercase tracking-wider text-white transition-all ${
              added ? 'bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : btnClass
            }`}
          >
            {added ? <CheckCircle2 className="w-4 h-4" /> : <Tag className="w-4 h-4" />}
            <span>{added ? 'Added!' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-page pt-20">

      {/* Marquee Banner */}
      <div className="overflow-hidden py-4 border-y border-purple-900/30 relative">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(40px,8vw,80px)]">
              STANLEY PADEN STORE &nbsp; ✦ &nbsp; ORDER NOW &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center space-y-4 mb-12" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">Official Bookstore</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            Stanley Paden <span className="text-gradient-cyan">Shop</span>
          </h1>
          <p className="font-inter text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Order paperbacks and hardcovers directly. Every edition is listed separately with its own cover and price.
          </p>
        </div>

        {/* Cart button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel-glow border border-purple-400/30 text-purple-300 hover:text-cyan-300 font-jura text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart ({cartCount})</span>
            {cartCount > 0 && <span className="font-bold text-cyan-400">${total.toFixed(2)}</span>}
          </button>
        </div>

        {/* Product Grid — 10 editions (5 books x Paperback/Hardcover) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {shopProducts.map((product, idx) => (
            <div key={product.id} data-reveal data-delay={String((idx % 2) * 150)}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* Checkout Banner */}
        <div className="mt-16 rounded-3xl glass-panel-glow border border-purple-500/40 p-8 sm:p-12 text-center space-y-4" data-reveal>
          <h2 className="font-orbitron font-black text-2xl sm:text-3xl uppercase text-white">
            Also Available On
          </h2>
          <p className="font-inter text-sm text-gray-400">
            Purchase through your preferred retailer for Kindle, Audible, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {[
              { label: 'Amazon', href: 'https://amazon.com', color: 'hover:border-amber-400 hover:text-amber-300' },
              { label: 'Kindle', href: 'https://amazon.com/kindle', color: 'hover:border-cyan-400 hover:text-cyan-300' },
              { label: 'Audible', href: 'https://audible.com', color: 'hover:border-orange-400 hover:text-orange-300' },
              { label: 'Official Store', href: 'https://stanleypaden.com/shop/', color: 'hover:border-purple-400 hover:text-purple-300' },
            ].map(b => (
              <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full glass-panel border border-white/10 ${b.color} text-gray-300 font-orbitron text-xs font-bold uppercase tracking-widest transition-all`}>
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-sm glass-panel border-l border-purple-500/40 p-6 flex flex-col gap-4 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="p-2 rounded-full glass-panel text-gray-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                <ShoppingBag className="w-12 h-12 text-purple-400/40" />
                <p className="font-jura text-sm text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="p-3 rounded-xl glass-panel border border-white/5 flex items-center gap-3">
                      <img src={item.cover} alt={item.title} className="w-10 h-14 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <p className="font-orbitron text-xs font-bold text-white truncate">{item.title}</p>
                        <p className="font-jura text-[10px] text-gray-400">{item.format} × {item.qty}</p>
                        <p className="font-orbitron text-xs text-cyan-400 font-bold">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-purple-900/40 pt-4 space-y-3">
                  <div className="flex items-center justify-between font-orbitron font-bold">
                    <span className="text-gray-300 text-sm">Total</span>
                    <span className="text-xl text-cyan-400">${total.toFixed(2)}</span>
                  </div>
                  <a href="https://stanleypaden.com/cart/" target="_blank" rel="noopener noreferrer"
                    className="btn-shine block w-full py-3.5 rounded-xl font-orbitron text-xs font-bold uppercase tracking-widest text-white text-center bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_25px_rgba(135,54,247,0.5)] transition-all">
                    Checkout →
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
