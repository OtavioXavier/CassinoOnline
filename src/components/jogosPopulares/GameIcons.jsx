import GameIcon from "./GameIcon";

export default function GameIcons() {
  return (
    <div className="md:flex md:gap-16 md:justify-center md:mb-10 hidden">
      <GameIcon src="/Bacaras.svg" title="BARACAS"/>
      <GameIcon src="/Slot.svg" title="SLOT"/>
      <GameIcon src="/Poker.svg" title="POKER"/>
      <GameIcon src="/Roulette.svg" title="ROULETTE"/>
      <GameIcon src="/Dice.svg" title="DICES"/>
      <GameIcon src="/LiveDealer.svg" title="LIVE DEALER"/>
    </div>
  );
}
