import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; //
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center bg-black border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-6">
          <Menu 
            size={20} 
            className="text-white cursor-pointer" 
            onClick={() => setIsMenuOpen(true)}
          />
          <Search size={20} className="text-white cursor-pointer hidden sm:block" />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center mb-0.5">
            <span className="text-white text-[12px] font-serif italic">T</span>
          </div>
          <h1 className="text-white text-[10px] font-black tracking-[0.5em] uppercase">TIMEDRIVEN</h1>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase hidden md:block">PAK/ ENG</span>
          <div className="relative cursor-pointer">
            <ShoppingBag size={20} className="text-white" />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[7px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[200] transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div className={`absolute left-0 top-0 h-full w-full max-w-[400px] bg-white p-12 flex flex-col overflow-y-auto no-scrollbar transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className="flex justify-end">
            <X size={24} className="text-black cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>

          {/* --- FONT STYLE UPDATED TO MATCH IMAGE --- */}
          <div className="mt-12 flex flex-col gap-12 text-black font-sans">
            <div>
              <h3 className="text-[22px] font-medium tracking-tight mb-6">Shop</h3>
              <ul className="space-y-4 text-[15px] font-normal text-black/80">
                <li className="hover:text-black cursor-pointer">Watches</li>
                <li className="hover:text-black cursor-pointer">Favorites</li>
                <li className="hover:text-black cursor-pointer">About Us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] font-medium tracking-tight mb-6">Service</h3>
              <ul className="space-y-4 text-[15px] font-normal text-black/80">
                <li className="hover:text-black cursor-pointer">Store</li>
                <li className="hover:text-black cursor-pointer">Sell / Consign</li>
                <li className="hover:text-black cursor-pointer">Shipping & Payments</li>
                <li className="hover:text-black cursor-pointer">Frequently Asked Questions (FAQ)</li>
              </ul>
            </div>

            <div className="mt-auto pb-10 border-t border-black/10 pt-10">
              <h3 className="text-[22px] font-medium tracking-tight mb-4">Book an Appointment</h3>
              <p className="text-[15px] text-black/70 leading-relaxed mb-6">
                As experts, we give you our professional opinion on any matter you may have.
              </p>
              <button className="text-[15px] font-semibold border-b border-black pb-0.5 hover:opacity-50 transition-opacity">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;