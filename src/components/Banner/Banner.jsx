"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLogin");
    if (login) {
      setLogged(true);
    }
  }, []);

  return (
    <div>
      <div className="md:hidden">
        <Image src={"/banner02.png"} width={1920} height={1080} alt="banner" />
      </div>
      <div className="md:hidden flex flex-col gap-2 ml-6">
        <h1 className="text-2xl md:text-6xl font-bold">Online slots</h1>
        <p className="text-xl md:text-2xl">
          Apply for G Club Free Slots 15 times.
        </p>

        {!logged && (
          <button
            type="button"
            onClick={() => {
              alert("você precisa estar logado para jogar.");
            }}
            className=" bg-green-600 p-4 w-36 h-14 rounded-md text-center"
          >
            Play Now
          </button>
        )}
        {logged && (
          <Link
            className=" bg-green-600 p-4 w-36 h-14 rounded-md text-center"
            href="/Mines"
          >
            Play Now
          </Link>
        )}
        
      </div>
      <div className="md:bg-[url('/banner02.png')] overflow-x-hidden md:bg-no-repeat md:bg-contain md:mb-0 mb-8 md:pb-72 md:pt-80">
        <div className="ml-8 hidden md:block">
          <div className="mb-8">
            <h1 className="text-2xl md:text-6xl font-bold">Online slots</h1>
            <p className="text-xl md:text-2xl">
              Apply for G Club Free Slots 15 times.
            </p>
          </div>
          {!logged && (
            <button
              type="button"
              onClick={() => {
                alert("você precisa estar logado para jogar.");
              }}
              className=" bg-green-600 p-4 w-36 h-14 rounded-md"
            >
              Play Now
            </button>
          )}
          {logged && (
            <Link
              className=" bg-green-600 p-4 w-36 h-14 rounded-md"
              href="/Mines"
            >
              Play Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
