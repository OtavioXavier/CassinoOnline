"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import MinesButtons from "./MinesButtons";

export default function MinesAmount({ Mines }) {
  let mineAmountRef = useRef();

  function sendMine() {
    let mineAmount = mineAmountRef.current.value;
    Mines(mineAmount);
  }

  function takeButtonValue(value) {
     let newValue = value;
     mineAmountRef.current.value = newValue;
     Mines(mineAmountRef.current.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-400 text-sm mb-2" htmlFor="betAmount">Mine Amount</label>
      <div className="flex pl-4 items-center bg-slate-800 p-2 h-10 w-96 gap-2 rounded">
        <Image src="./MineIcon.svg" width={24} height={24} alt=""/>
        <input
          type="number"
          className="bg-transparent w-80"
          id="betAmount"
          ref={mineAmountRef}
          placeholder="10"
          onChange={() => {
            sendMine();
          }}
        />
      </div>
      <MinesButtons value={takeButtonValue}/>
    </div>
  );
}
