import Image from "next/image";

export default function GamesIcon() {
    return (
        <div className="md:inline-flex gap-20 hidden">
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-orange-200 text-base font-semibold uppercase">Baracas</h1>
            <Image src='/Bacaras.png' width={72} height={86} alt="Icon"/>
            </div>
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-zinc-200 text-base font-semibold uppercase">Slot</h1> 
            <Image src='/Slot.png' width={72} height={86} alt="Icon"/>
            </div>
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-zinc-200 text-base font-semibold uppercase">Poker</h1> 
            <Image src='/Poker.png' width={72} height={86} alt="Icon"/>  
            </div>
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-zinc-200 text-base font-semibold uppercase">Roulette</h1> 
            <Image src='/Roulette.png' width={72} height={86} alt="Icon"/>  
            </div>
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-zinc-200 text-base font-semibold uppercase">Table game</h1>  
            <Image src='/TableGame.png' width={72} height={86} alt="Icon"/>  
            </div>
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-zinc-200 text-base font-semibold uppercase">Live Dealer</h1> 
            <Image src='/LiveDealer.png' width={72} height={86} alt="Icon"/>  
            </div>
        </div>
    )
}