import Image from "next/image";

export default function EspotsList() {

    return (
        <div className='group'>
        <div className='flex items-center border-b border-gray-600 py-6 pl-4 pr-8 justify-between'>
        <p className='uppercase text-stone-200 text-xs font-semibold'>ESports</p>
        <Image src={"/Seta.svg"} width={16} height={12} alt='seta'/>
        </div>
        <ul>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Espada.svg"} width={16} height={12} alt='Brasileirão Serie A'/>
            <p className='opacity-50 text-sm'>Brasileirão Serie A</p>
            </li>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Foguete.svg"} width={16} height={12} alt='Brasileirão Serie B'/>
            <p className='opacity-50 text-sm'>Brasileirão Serie B</p>
            </li>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Puzzle.svg"} width={16} height={12} alt='Futebol'/>
            <p className='opacity-50 text-sm'>Futebol</p>
            </li>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Xadrez.svg"} width={16} height={12} alt='FIFA'/>
            <p className='opacity-50 text-sm'>FIFA</p>
            </li>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Cubo.svg"} width={16} height={12} alt='Fórmula 1'/>
            <p className='opacity-50 text-sm'>Fórmula 1</p>
            </li>
            <li className='flex items-center py-6 pl-8 pr-12 justify-between'>
            <Image src={"/Volei.svg"} width={16} height={12} alt='Basquete'/>
            <p className='opacity-50 text-sm'>Basquete</p>
            </li>
        </ul>
      </div>
  );
}
