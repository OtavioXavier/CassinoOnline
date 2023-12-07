'use client';

import React, { useState } from 'react';

export default function DepositPage02({type, value}) {
    const [pix, setPix ] = useState(0);

    const handleChange = (event) => {
        setPix(event.target.value);
    }

    function checkInput() {
        if(pix > 0) {
            type(2)
            value(pix)
        } else {
            alert("Adicione um valor correto")
        }
    }
    return (
        <div className="flex flex-col gap-5 mt-14">
            <div className="flex gap-12">
            <button onClick={()=>{setPix(1)}} type="button" className="w-32 h-10 border border-gray-300/50 text-zinc-300">R$ 1.00</button>
            <button onClick={()=>{setPix(100)}} type="button" className="w-32 h-10 border border-gray-300/50 text-zinc-300">R$ 100.00</button>
            <button onClick={()=>{setPix(1000)}} type="button" className="w-32 h-10 border border-gray-300/50 text-zinc-300">R$ 1000.00</button>
            </div>
            <input type="number" placeholder="Quantia" className="placeholder:text-neutral-400 w-full h-12 border border-gray-300/50 text-zinc-300 bg-gray-950 p-3" value={pix} onChange={handleChange}/>
            <div className="flex gap-11 justify-center mt-48">
                <button onClick={()=>{type(0)}} className="w-36 h-14 border border-gray-300/50">Voltar</button>
                <button onClick={()=>{checkInput()}} className="w-36 h-14 bg-green-600 rounded">Depositar</button>
            </div>
        </div>
    )
}