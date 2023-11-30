"use client";

import React, { useState, useImperativeHandle } from "react";
import Mine from "./Mine";

const MineField = React.forwardRef((props, ref) => {
  const {hitsQuant} = props;
  const {isLoose} = props;
  const [bombs, setBombs] = useState([]);
  const [active, setActive] = useState(false);
  const [hits, setHits] = useState(1);

  function generateRandom() {
    const value = Math.random() * 25;
    return Math.floor(value);
  }

  function choiceBombs() {
    for (let i = 1; i <= props.quant; i++) {
      let number = generateRandom();
      if (!bombs.includes(number)) {
        bombs.push(number);
      } else {
        --i;
      }
      setActive(true);
    }
  }

  function takeHits(value) {
    let newHits = value + hits;
    setHits(newHits);
    hitsQuant(newHits);
  }

  function takeLoose(value) {
    let newIsLoose = value;
    isLoose(newIsLoose);
  }

  useImperativeHandle(ref, () => ({
    choiceBombs: choiceBombs,
  }));

  return (
    <div className="grid grid-cols-5 gap-4">
      <Mine idBomb={0} bombs={bombs} active={active} bgColor={active ? 'bg-white' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={1} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={2} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={3} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={4} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={5} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={6} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={7} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={8} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={9} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={10} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={11} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={12} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={13} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={14} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={15} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={16} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={17} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={18} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={19} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={20} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={21} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={22} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={23} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
      <Mine idBomb={24} bombs={bombs} active={active} bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'} hits={takeHits} isLoose={takeLoose}/>
    </div>
  );
});

export default MineField;
