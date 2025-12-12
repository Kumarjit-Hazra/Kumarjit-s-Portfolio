import React, { useState, useEffect } from 'react';
import { Crosshair } from 'lucide-react';
import { LOCATION_NAME, TIMEZONE } from '../constants';

const kolkataImages = [
  '/assets/images/kolkata1.png',
  '/assets/images/kolkata2.png',
  '/assets/images/kolkata3.png',
  '/assets/images/kolkata4.png',
  '/assets/images/kolkata5.png',
];

export const MapCard: React.FC = () => {
  const [time, setTime] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: TIMEZONE, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kolkataImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full bg-zinc-900 rounded-3xl relative overflow-hidden group min-h-[180px] border border-zinc-800">
       {/* Map Background - Kolkata Heritage Carousel */}
       <div className="absolute inset-0 opacity-60 grayscale contrast-125 transition-opacity duration-700 group-hover:opacity-40">
         <img 
            src={kolkataImages[currentImageIndex]} 
            alt="Kolkata Heritage" 
            className="w-full h-full object-cover transition-all duration-1000"
         />
       </div>
       
       {/* Grid Overlay */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
       <div className="absolute inset-0 border-[0.5px] border-white/5 bg-[size:20px_20px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>

       {/* Radar Animation */}
       <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-48 h-48 rounded-full border border-nothing-red/30 relative">
             <div className="absolute inset-0 rounded-full border border-nothing-red/10 animate-ping" style={{ animationDuration: '2s' }}></div>
             <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(215,25,33,0.2)_360deg)] animate-radar"></div>
          </div>
       </div>

       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-nothing-red transition-transform duration-300 group-hover:scale-125">
            <Crosshair size={24} strokeWidth={1} />
          </div>
       </div>
       
       <div className="absolute bottom-0 left-0 p-5 w-full z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
         <div className="flex justify-between items-end border-t border-white/10 pt-2">
             <div>
                <h3 className="text-white font-dot font-bold text-lg uppercase tracking-wide leading-none">{LOCATION_NAME}</h3>
                <p className="text-nothing-red font-mono text-[10px] mt-1 tracking-widest">{time}</p>
             </div>
             <div className="flex flex-col items-end gap-1">
                <span className="text-[9px] text-zinc-500 font-mono uppercase">GPS.Active</span>
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                   <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                   <div className="w-1 h-1 bg-nothing-red rounded-full animate-pulse"></div>
                </div>
             </div>
         </div>
       </div>
    </div>
  );
};