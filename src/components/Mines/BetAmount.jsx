'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import BetButtons from "./BetButtons";

export default function BetAmount({Bet}) {
  let betAmountRef = useRef();

  function sendBet() {
    let betAmount = betAmountRef.current.value;
    Bet(betAmount);
  }

  function takeBet(value) {
    let newValue = value;
    if(value === 3) {
     const coinValue = JSON.parse(localStorage.getItem('isLogin')) || [];
     let coin = Number(coinValue[0].coins)
      newValue = (coin/2);
     } else if(value === 1){
      newValue = betAmountRef.current.value * 2;
     } else if(value === 2 ) {
      const coinValue = JSON.parse(localStorage.getItem('isLogin')) || [];
      let coin = Number(coinValue[0].coins)
      newValue = (coin);
     }
    betAmountRef.current.value = newValue;
    Bet(betAmountRef.current.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className='text-slate-400 text-sm mb-2' htmlFor="betAmount">Bet Amount</label>
      <div className='flex pl-4 items-center bg-slate-800 p-2 h-10 w-96 gap-2 rounded'>
      <Image src="./Chips.svg" width={32} height={20} alt="Chips"/>
      <input type="number" className="bg-transparent w-64" placeholder='R$200,000,000' id="betAmount" ref={betAmountRef} onChange={()=>{sendBet()}}/>
      <button type='button' onClick={()=> {takeBet(0)}}>
      <Image src="/Trash.svg" width={22} height={22} alt='trash'/>
      </button>
      </div>
      <BetButtons value={takeBet}/>
    </div>
  )
}