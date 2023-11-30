import Image from "next/image";

export default function CardsLineFooter() {
    return (
       <div className="flex justify-between mb-10">
         <p className="text-gray-600 text-xs ">All Rights Reserved © FalidoBet. Top Online Casino Games</p>
         <div>
         <Image 
        src={"/PaymentIcon.png"}
        width={267}
        height={144}
        alt={"payments cards"}
        />
         </div>
       </div>
    );
 }