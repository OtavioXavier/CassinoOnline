import GameBox from "../components/jogosPopulares/GameBox";
import IndexBoxJackpots from "../components/BoxJackpots/IndexBoxJackpots";
import Footer from "../components/Footer/Footer";
import CaixasHome from "../components/caixasHome/CaixasHome";
import Banner from "../components/Banner/Banner"
import HeaderHome from "../components/header/header";

export default function HomePage() {
  return (
    <div>
  <HeaderHome/>
  <div>
  <Banner/>
  <CaixasHome/>
  <h1 className="font-bold text-center text-6xl my-24">Jogos <span className="text-emerald-600">Populares</span></h1>
   <GameBox/>
    <section>
      <h1 className="font-bold text-center text-6xl mb-6">Jackpots e <span className="text-emerald-600">Slots</span></h1>
      <p className="text-center text-gray-400 text-lg">No primeiro depósito damos um bônus<br />Jogue agora e ganhe.</p>
      <IndexBoxJackpots/>
      <Footer/>
    </section>
  </div>
    </div>
  );
}