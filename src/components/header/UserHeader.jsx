'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DepositModal from '../UserFunctions/DepositModal';
import ProfileScreen from '../loguin/ProfileScreen';


export default function UserHeader(props) {
    const [deposit, setDeposit] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [coins, setCoins] = useState(props.userCoins);
   
    function closeModal(close) {
      let newClose = close;
      setDeposit(newClose);
    }

    function takeProfile(profile) {
      let newProfile = profile;
      setIsProfile(newProfile);
    }


  return (
     <div className='flex items-center justify-between w-96'>
        {deposit && (
          <DepositModal close={closeModal}/>
        )}

       {isProfile &&(<ProfileScreen profile={takeProfile}/>)}
        <p className='w-32 px-2 h-12 flex items-center border border-gray-500 rounded'>R$ {coins}.00</p>
        
        <button type="button" className='px-4 py-3 bg-green-600 rounded hover:scale-110 hover:rotate-1 transition-all' onClick={()=>{setDeposit(true);}}>Depositar</button>
        <button type="button" onClick={()=>{setIsProfile(true)}} className='p-3 rounded-lg border border-gray-500 hover:scale-110 hover:rotate-1 transition-all'><Image src={"./Person.svg"} width={25} height={25} alt='profile icon'/></button>
     </div>
  )
}