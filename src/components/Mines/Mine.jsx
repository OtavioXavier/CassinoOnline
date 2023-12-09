"use strict";

import Image from "next/image";
import React, { useState } from "react";

export default function Mine({idBomb, bombs, active, bgColor, hits, isLoose}) {
  const [icon, setIcon] = useState("Interrogacao");
  const [background, setBackground] = useState(bgColor + " w-20 h-20 flex items-center justify-center rounded-xl shadow-xl shadow-white/20 border border-zinc-300/30-transition-all");
  const [clicked, setClicked] = useState(false);
  
  function toggleImage() {
    if(!active || clicked) {
      return;
    }
    
    setClicked(true);

    if(checkBomb()) {
      setIcon("BombTrue");
      setBackground("bg-red-600 w-20 h-20 flex items-center justify-center rounded-xl shadow-xl shadow-red-600/80 border border-zinc-300/30 transition-all");
      isLoose(true);
    } else {
      setIcon("BombFalse");
      setBackground("bg-green-600 w-20 h-20 flex items-center justify-center rounded-xl shadow-xl shadow-green-600/80 border border-zinc-300/30 transition-all");
      hits(1);
    }
  }

  function checkBomb() {
    return bombs.includes(idBomb);
  }

  return (
    <button
      className={active ? 'bg-zinc-300 w-20 h-20 flex items-center justify-center rounded-xl shadow-xl shadow-white/20 border border-zinc-100/30 transition-all' : background}
      onClick={toggleImage}
    >
      <Image src={"/" + icon + ".png"} width={48} height={48} alt="bomba" />
    </button>
  );
}
