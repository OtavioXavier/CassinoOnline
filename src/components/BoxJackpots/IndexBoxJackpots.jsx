import BoxJackpots from "./BoxJackpots";

export default function IndexBoxJackpots() {
    return ( 
        <div>
        <div className="flex flex-col items-center grid-cols-4 m-8 gap-4 mt-16 md:grid">
        <BoxJackpots title="Dazzle Me" src="/DazzleMe.png"/>
        <BoxJackpots title="Neon Staxx"src="/NeonStaxx.png"/>
        <BoxJackpots title="Blood Suckers" src="/BloodSuckers.png"/>
        <BoxJackpots title="Secret of the Stones" src="/SecretOfTheStones.png"/>
        <BoxJackpots title="Blood Suckers" src="/DazzleMe.png"/>
        <BoxJackpots title="Secret of the Stones" src="/SecretOfTheStones.png"/>
        <BoxJackpots title="Dazzle Me" src="/DazzleMe.png"/>
        <BoxJackpots title="Neon Staxx" src="/NeonStaxx.png"/>
        </div>
        <div className="flex justify-center mb-48">
            <button type="button" className="font-bold bg-green-600 p-4 rounded-xl hover:scale-110 transition-transform">Mostre mais</button>
        </div>
        </div>
    )
        
      
}