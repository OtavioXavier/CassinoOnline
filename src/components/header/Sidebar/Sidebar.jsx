import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import SportsList from './SportsList';
import { config } from 'process';
import Link from 'next/link';

export default function Sidebar({ isOpen }) {
  const [open, setOpen] = useState(isOpen);
  const styles = useSpring({
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    config: {duration:300}
  });

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <animated.div style={styles} className='fixed md:block w-full md:w-72 h-screen bg-slate-900 border-r border-gray-600 transition-all mt-24'>
      <div className='flex items-center border-b border-gray-600 py-6 pl-4 gap-2'>
        <button type='button' className='w-7 h-7 bg-green-600 shadow-green-500/50 shadow-lg'/>
        <p className='uppercase text-stone-200 text-xs font-semibold'>GANHE 20 REAIS</p>
      </div>
      <Link href="/" className='flex items-center border-b border-gray-600 py-6 pl-4 pr-8 justify-between'>
        <p className='uppercase text-stone-200 text-xs font-semibold'>CASSINO</p>
        <Image src={"/Seta.svg"} width={16} height={12} alt='seta'/>
      </Link>
      <SportsList/>
    </animated.div>
  );
}
