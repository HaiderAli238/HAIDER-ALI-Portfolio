import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Backend unreachable:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="h-screen bg-[#0A1128] flex items-center justify-center text-white">Loading Masterpiece...</div>;

  return (
    <div className="min-h-screen bg-[#0A1128] w-full">
      <Navbar />

      {/* Main Container - Jo cheezon ko sahi jagah rkhy ga */}
      <main className="relative pt-32 w-full flex flex-col items-center">
        
        {/* TIMEDRIVEN HERO WRAPPER */}
        <section className="w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-white/30"></div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50">Excellence in Time</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              A Digital <br /> Experience
            </h1>
            
            <div className="flex items-center gap-8 mt-6">
              <button className="bg-white text-[#0A1128] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Discover Collection
              </button>
              <button className="text-white/50 hover:text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-1">
                View All
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative group">
            <div className="rounded-[40px] overflow-hidden border border-white/10 aspect-[4/5] bg-gray-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                alt="Luxury Watch"
              />
            </div>
            {/* Floating Detail Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
               <p className="text-[8px] uppercase tracking-widest text-white/40">Reference</p>
               <p className="text-sm font-bold text-white italic">Heritage Classic 2026</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;