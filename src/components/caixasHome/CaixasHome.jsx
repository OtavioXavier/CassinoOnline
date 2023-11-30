import CaixaHome from "./caixaHome";

export default function CaixasHome() {
  return (
    <div className="flex flex-col gap-24 md:gap-0 lg:flex-row justify-center items-center ">
      <CaixaHome
        atb="font-bold text-indigo-500 text-xl"
        number="01"
        title="Cadastre-se"
        content="Write to our email @lnwasia
Or Tel. 02-508-8798"
      />
      <CaixaHome
        atb="font-bold text-green-600 text-xl"
        number="02"
        title="Depositar"
        content="Contact the Call Center staff
Receive the money transfer "
      />
      <CaixaHome
        atb="font-bold text-indigo-500 text-xl"
        number="03"
        title="Aproveite o jogo"
        content="Receive Username and Pass
Ready to play the game"
      />
    </div>
  );
}
