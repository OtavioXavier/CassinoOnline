"use client";

import { useSpring, animated } from "@react-spring/web";

export default function Testes() {

  return (
    <div>
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
      <button
        onClick={handleClick}
        className="bg-green-600 w-32 h-12 rounded-lg  uppercase font-bold"
      >
        Clique aqui
      </button>
    </div>
  );
}
