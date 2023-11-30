export default function MinesButtons({ value }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button type="button" onClick={()=>{value(1)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-8 h-8 rounded hover:scale-105 transition-all">1</button>
      <button type="button" onClick={()=>{value(3)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-8 h-8 rounded hover:scale-105 transition-all">3</button>
      <button type="button" onClick={()=>{value(5)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-8 h-8 rounded hover:scale-105 transition-all">5</button>
      <button type="button" onClick={()=>{value(10)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-8 h-8 rounded hover:scale-105 transition-all">10</button>
      <button type="button" onClick={()=>{value(24)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-8 h-8 rounded hover:scale-105 transition-all">24</button>
    </div>
  );
}
