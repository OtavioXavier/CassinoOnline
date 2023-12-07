'use Client'

import Image from "next/image";
import React, {useEffect, useState} from 'react';

export default function ProfileArea() {
        const [userName, setUserName] = useState('User Name');
  useEffect(()=> {
    let login = JSON.parse(localStorage.getItem('isLogin'));
    let UserName = login[0].access;
    let NewUserName = UserName.split("@")[0];
    setUserName(NewUserName);
  }, [])
     
     return (
        <div className="mt-6 px-4 py-8 flex flex-col items-center bg-black/20 h-80">
        <div className="text-left flex items-center">
          <Image src='/IconLogo.svg' width={75} height={75} alt="Logo"/>
          <div>
          <h1 className="text-sm">{userName}</h1>
          <p className="text-slate-400 text-sm leading-tight">0,00%Progresso para o próximo nível</p>
          </div>
        </div>

      <div className="animate-gradient-x w-96 h-4 mt-9 bg-gradient-to-l from-amber-400 to-orange-500 rounded-full"></div>

      <div className="mt-8 mb-8">
          <div className="inline-flex gap-3">
      <Image src='Chips.svg' width={32} height={18} alt='Chips'/>
      <h2 className="text-xl font-bold">0</h2>
          </div>
      <p className="text-slate-400 flex items-center text-center justify-center text-base leading-none">rakeback disponível</p>
      </div>

      <div className="inline-flex gap-4">
          <button className="hover:scale-110 transition-all w-40 h-10 text-center bg-[url('/FundoDourado.jfif')] text-gray-900 uppercase text-xs font-semibold rounded text">pegar rakeback (0%)</button>
          <button className="hover:scale-110 transition-all w-48 h-10 bg-[url('/FundoDourado.jfif')] text-gray-900 uppercase text-xs font-semibold rounded text flex items-center justify-center"><h2 className="flex justify-center items-center bg-zinc-900 text-amber-400 font-bold uppercase w-40 h-9">benefícios de nível</h2></button>
      </div>

      </div>
     )
}