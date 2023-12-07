import Image from "next/image";

export default function DepositPage03({ type, value }) {
    function send() {
        type(3);
        let users = JSON.parse(localStorage.getItem('isLogin'));
        users[0].coins += Number(value);
        console.log(users[0].coins)
        console.log(users)
        localStorage.setItem('isLogin', JSON.stringify(users));
    }
   return (
    <div>
        <div className="flex gap-11 items-center justify-center">
            <Image src={'/PixIcon.png'} width={122} height={65} alt="pix Icon"/> 
            <span className="text-4xl">R$ {value}</span>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/QrCode.png" width={160} height={160} alt="Qr Code" className="cursor-pointer" onClick={()=>{send()}}/>
        <p>Clique no Qr Code para pagar</p>   
        </div>

        <div className="flex gap-11 justify-center mt-36">
        <button onClick={()=>{type(1)}} className="w-36 h-14 border border-gray-300/50">Voltar</button>
        <button onClick={()=>{send()}} className="w-36 h-14 bg-green-600 rounded">Copiar código</button>
        </div>
    </div>
   )
}