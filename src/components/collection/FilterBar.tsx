import { useState } from 'react';

export default function FilterBar() {
  const [activeView, setActiveView] = useState('grid');

  return (
    <section className="sticky top-[80px] z-40 bg-[#131313] py-8 border-y border-[#4d4635]/30 px-[80px] max-md:px-6 flex flex-wrap justify-between items-center gap-[32px]">
      <div className="flex gap-12 items-center flex-wrap">
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] uppercase">
          FILTER BY:
        </span>
        
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] hover:text-[#f2ca50] transition-colors uppercase">
            MATERIAL 
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </div>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] hover:text-[#f2ca50] transition-colors uppercase">
            MOVEMENT 
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </div>
        </div>
        
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] hover:text-[#f2ca50] transition-colors uppercase">
            AVAILABILITY 
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] uppercase">
          VIEWING 12 OF 48 PIECES
        </span>
        <button 
          className={`material-symbols-outlined ${activeView === 'grid' ? 'text-[#f2ca50]' : 'text-[#d0c5af]'} transition-colors`}
          onClick={() => setActiveView('grid')}
        >
          grid_view
        </button>
        <button 
          className={`material-symbols-outlined ${activeView === 'list' ? 'text-[#f2ca50]' : 'text-[#d0c5af]'} transition-colors`}
          onClick={() => setActiveView('list')}
        >
          list
        </button>
      </div>
    </section>
  );
}