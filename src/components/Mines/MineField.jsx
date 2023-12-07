"use strict";

import React, { useState, useImperativeHandle } from "react";
import Mine from "./Mine";

const MineField = React.forwardRef((props, ref) => {
  const {hitsQuant, isLoose} = props;
  const [bombs, setBombs] = useState([]);
  const [active, setActive] = useState(false);
  const [hits, setHits] = useState(1);

  function generateRandom() {
    const value = Math.random() * 25;
    return Math.floor(value);
  }

  function choiceBombs() {
    let tempBombs = [];
    for (let i = 1; i <= props.quant; i++) {
      let number = generateRandom();
      if (!tempBombs.includes(number)) {
        tempBombs.push(number);
      } else {
        --i;
      }
    }
    setBombs(tempBombs);
    setActive(true);
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
      {Array.from({ length: 25 }, (_, i) => (
        <Mine
          key={i}
          idBomb={i}
          bombs={bombs}
          active={active}
          bgColor={active ? 'bg-stone-200' : 'bg-stone-400/80'}
          hits={takeHits}
          isLoose={takeLoose}
        />
      ))}
    </div>
  );
});

MineField.displayName = 'MineField';
export default MineField;
