import Image from "next/image";

export default function BoxJackpots(props) {
  return (
    <div className="bg-gray-800 w-72 h-80 rounded-lg hover:scale-105 transition-transform rounded-t-3xl">
        <Image
         src={props.src}
        width={300}
        height={221}
        alt="game"
        className="rounded-t-3xl"
        />
        <div className="py-4 px-2 cursor-pointer">
            <h1 className="font-semibold text-xl">{props.title}</h1>
            <h2 className="font-bold text-green-600 text-xl">$999 999 999</h2>
            <p className="text-gray-400 text-md">94,7% win rate</p>
        </div>
    </div>
  )
}