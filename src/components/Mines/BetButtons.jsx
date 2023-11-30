export default function BetButtons({value}) {
    return (
        <div className="flex justify-between items-center gap-4">
        <button type="button" onClick={()=>{value(100)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">100</button>
        <button type="button" onClick={()=>{value(500)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">500</button>
        <button type="button" onClick={()=>{value(1000)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">1000</button>
        <button type="button" onClick={()=>{value(500)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">500</button>
        <button type="button" onClick={()=>{value(3)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">1/2</button>
        <button type="button" onClick={()=>{value(1)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">X2</button>
        <button type="button" onClick={()=>{value(2)}} className="hover:bg-slate-400 hover:text-gray-800 text-slate-400 w-10 h-8 rounded hover:scale-105 transition-all">MAX</button>
      </div>
    )
}