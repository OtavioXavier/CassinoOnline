import GamesIdex from "../components/PopularGames/GamesIndex";
import IndexBoxJackpots from "../components/BoxJackpots/IndexBoxJackpots";
import CaixasHome from "../components/caixasHome/CaixasHome";
import Banner from "../components/Banner/Banner";

export default function HomePage() {
  return (
      <div>
        <Banner />
        <CaixasHome />
        <h1 className="font-bold text-center text-6xl my-24">Jogos<span className="text-emerald-600">Populares</span>
        </h1>
        <GamesIdex />
        <div>
          <h1 className="font-bold text-center text-6xl mb-6">
            Jackpots e <span className="text-emerald-600">Slots</span>
          </h1>
          <p className="text-center text-gray-400 text-lg">
            No primeiro depósito damos um bônus
            <br />
            Jogue agora e ganhe.
          </p>
          <IndexBoxJackpots />
        </div>
      </div>
  );
}
