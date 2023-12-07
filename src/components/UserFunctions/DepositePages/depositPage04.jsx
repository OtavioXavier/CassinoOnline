import Image from "next/image";

export default function DepositPage04({ value }) {
  return (
    <div>
      <div className="flex gap-11 items-center justify-center">
        <Image src={"/PixIcon.png"} width={122} height={65} alt="pix Icon" />
        <span className="text-4xl ">R$ {value}</span>
      </div>

      <div className="flex flex-col gap-3 mt-24 mb-48">
        <h1 className="w-96 text-4xl">Pagamento Concluido</h1>
        <p className="w-96 text-xl">
          Venha fazer uma renda extra se divertindo 😎
        </p>
      </div>
      
      <button onClick={()=>{window.location.reload()}} type="button" className="w-44 h-14 bg-green-600 rounded text-xl">Ver Jogos</button>
    </div>
  );
}
