import Image from "next/image";

export default function AmountsProfile() {
    return (
        <div className="inline-flex gap-4 mt-6">

        <div className="w-60 h-20 bg-gradient-to-bl from-zinc-900/20 to-blue-900/20 rounded border-2 border-slate-500 border-opacity-20 ">
            <div className="p-4 flex flex-col gap-1 ">
                <div className="inline-flex gap-3 text-left">
                <Image src='Chips.svg' width={32} height={18} alt='Chips'/>
                <h2 className="text-xl font-bold">0</h2>
                </div>
                 <p className="text-slate-400 flex items-center text-center justify-center text-xs leading-none">Depositados</p>
            </div>
        </div>

        <div className="w-60 h-20 bg-gradient-to-bl from-zinc-900/20 to-blue-900/20 rounded border-2 border-slate-500 border-opacity-20 ">
            <div className="p-4 flex flex-col gap-1 ">
                <div className="inline-flex gap-3 text-left">
                <Image src='Chips.svg' width={32} height={18} alt='Chips'/>
                <h2 className="text-xl font-bold">0</h2>
                </div>
                <p  className="text-slate-400 flex items-center text-center justify-center text-xs leading-none">Total Ganho</p>
            </div>
        </div>

        <div className="w-60 h-20 bg-gradient-to-bl from-zinc-900/20 to-blue-900/20 rounded border-2 border-slate-500 border-opacity-20 ">
            <div className="p-4 flex flex-col gap-1 ">
                <div className="inline-flex gap-3 text-left">
                <Image src='Chips.svg' width={32} height={18} alt='Chips'/>
                <h2 className="text-xl font-bold">0</h2>
                </div>
                 <p className="text-slate-400 flex items-center text-center justify-center text-xs leading-none">Lucro</p>
            </div>
        </div>
        </div>
    )
}