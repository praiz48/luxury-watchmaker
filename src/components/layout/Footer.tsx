import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative w-full py-[160px] bg-[#0e0e0e] shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] px-[80px] max-md:px-6 max-w-full">
        <div className="md:col-span-1">
          <div className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#f2ca50] mb-8 text-left uppercase font-normal">
            AURELIAN
          </div>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] pr-8">
            A legacy of precision, a future of timeless elegance. Defining the pinnacle of luxury since 1892.
          </p>
        </div>
        
        <div>
          <h5 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-6 uppercase">
            Connect
          </h5>
          <ul className="space-y-4 font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em]">
            <li><a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#">Instagram</a></li>
            <li><a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#">LinkedIn</a></li>
            <li><a className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors" href="#">Journal</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-6 uppercase">
            Legal
          </h5>
          <ul className="space-y-4 font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em]">
            <li><Link className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors uppercase" to="#">Store Locator</Link></li>
            <li><Link className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors uppercase" to="#">Privacy Policy</Link></li>
            <li><Link className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors uppercase" to="#">Sustainability</Link></li>
            <li><Link className="text-[#d0c5af] hover:text-[#f2ca50] transition-colors uppercase" to="#">After Sales</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-6 uppercase">
            Inquiries
          </h5>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] mb-4">
            concierge@aurelian-geneve.com
          </p>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
            +41 22 730 00 00
          </p>
        </div>
      </div>
      
      <div className="mt-24 px-[80px] max-md:px-6 border-t border-[#99907c]/10 pt-12 text-center">
        <p className="font-['Hanken_Grotesk'] text-[10px] font-semibold tracking-[0.5em] text-[#d0c5af]/50 uppercase">
          © 2024 AURELIAN GENÈVE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};