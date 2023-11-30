'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DepositModal from '../UserFunctions/DepositModal';


export default function UserHeader(props) {
    const [deposit, setDeposit] = useState(false);
    const [coins, setCoins] = useState(props.userCoins);
   
    function closeModal(close) {
      let newClose = close;
      setDeposit(newClose);
    }


  return (
    
     <div className='flex items-center gap-8'>
        {deposit && (
          <DepositModal close={closeModal}/>
        )}
        <p className='px-4 py-3 border border-gray-500 rounded'>R$ {coins}.00</p>
        
        <button type="button" className='px-4 py-3 bg-green-600 rounded hover:scale-110 hover:rotate-1 transition-all' onClick={()=>{setDeposit(true);}}>Depositar</button>
        <button type="button" className='p-3 rounded-lg border border-gray-500 hover:scale-110 hover:rotate-1 transition-all'><Image src={"./Person.svg"} width={25} height={25} alt='profile icon'/></button>
     </div>
  )
}