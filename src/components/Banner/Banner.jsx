'use client'

import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from 'react';



export default function Banner() {
  const [logged, setLogged] = useState(null);
  useEffect(()=> {
    const login = localStorage.getItem('isLogin');
   if(login) {
     setLogged(true);
   }
  }, []);
  return (
    <div className="">
        <div className="md:hidden">
        <Image src={"/banner01.png"} width={1920} height={1080} alt="banner"/>
        </div>
      <div className="ml-8 md:mt-24 absolute">
        <div className="mb-8">
          <h1 className="text-2xl md:text-6xl font-bold">Online slots</h1>
          <p className="text-xl md:text-2xl">
            Apply for G Club Free Slots 15 times.
          </p>
        </div>
        {!logged && (
          <button type="button" onClick={()=>{alert("você precisa estar logado para jogar.")}} className=" bg-green-600 p-4 w-36 h-14 rounded-md">Play Now</button>
        )}
        {logged && (
          <Link
          className=" bg-green-600 p-4 w-36 h-14 rounded-md"
          href="/Mines"
        >
          Play Now
        </Link>
        )}
        
      </div>
    <div className="ml-64 justify-between items-center md:pb-72 md:bg-[url('/banner02.png')] overflow-x-hidden bg-no-repeat bg-contain mb-4 p-80 ">
    </div>
    </div>
  );
}
