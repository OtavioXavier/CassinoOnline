"use client";

import DepositPage01 from './DepositePages/depositPage01';
import DepositPage02 from  './DepositePages/depositPage02';
import DepositPage03 from  './DepositePages/depositPage03';
import DepositPage04 from  './DepositePages/depositPage04';

import React, { useState } from 'react';

export default function DepositModal({ close }) {
  const [payment, setPayment ] = useState(0);
  const [value, setValue ] = useState(0);

  function takePayment(value) {
    let newPayment = value;
    setPayment(newPayment);
    console.log(newPayment);
  }

  function takeValue(valuation) {
      let newValue = valuation;
      setValue(newValue);
  }

  return (
    <div>
      <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 transition-all">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="w-auto h-auto p-4 px-8 rounded-3xl bg-gray-900">
              <div className="flex justify-center">
                   <div className="flex flex-col gap-5">
                    <p>Tipo de Pagamento <span className="text-stone-300">Detalhes do Pagamento</span></p>
                    <p>Faça o seu deposito seguro</p>
                   </div>
                   <button className="bg-[url('/Delete.svg')] bg-contain bg-no-repeat w-8 h-8 hover:scale-110 transition-all float-right" onClick={()=>{close(false)}}/>
              </div>
                   {payment === 0 && ( <DepositPage01 type={takePayment}/>)}
                   {payment === 1 && ( <DepositPage02 type={takePayment} value={takeValue}/>)}
                   {payment === 2 && ( <DepositPage03 type={takePayment} value={value}/>)}
                   {payment === 3 && ( <DepositPage04 value={value}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
