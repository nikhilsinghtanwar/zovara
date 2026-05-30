// Is component ko apne frontend mapping me use karein
function ThrillophiliaCard({ item }: { item: any }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
      
      {/* Image Container with Hover Zoom */}
      <div className="relative w-full h-56 overflow-hidden bg-slate-100 shrink-0">
        <img 
          src={item.image_url} 
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e)=>{(e.target as any).src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'}}
        />
        {/* Instant Badge */}
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
          Best Seller
        </span>
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-slate-800 text-base font-sans group-hover:text-orange-500 transition-colors line-clamp-1 uppercase tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
            📍 Customizable Itinerary Included
          </p>
        </div>

        {/* Pricing and Action Section */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-2">
          <div>
            <p className="text-[10px] uppercase font-mono text-slate-400 font-bold tracking-wider">Starting From</p>
            <p className="text-lg font-black text-slate-900 font-mono">₹{item.price}</p>
          </div>
          
          <button 
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-orange-500/10"
          >
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
}
