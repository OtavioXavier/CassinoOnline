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
        <h1 className="text-2xl md:text-6xl font-bold">Slots Online</h1>
        <p className="text-xl md:text-2xl">
        Utilize 15 Slots Grátis
        </p>

        {!logged && (
          <button
            type="button"
            onClick={() => {
              alert("você precisa estar logado para jogar.");
            }}
            className=" bg-green-600 p-4 w-36 h-14 rounded-md text-center"
          >
            Jogar agora
          </button>
        )}
        {logged && (
          <Link
            className=" bg-green-600 p-4 w-36 h-14 rounded-md text-center"
            href="/Mines"
          >
            Jogar agora
          </Link>
        )}
        
      </div>
      <div className="md:bg-[url('/banner02.png')] overflow-x-hidden md:bg-no-repeat md:bg-contain md:mb-0 mb-8 md:pb-72 md:pt-80">
        <div className="ml-8 hidden md:block">
          <div className="mb-8">
            <h1 className="text-2xl md:text-6xl font-bold">Slots Online</h1>
            <p className="text-xl md:text-2xl">
            Utilize 15 Slots Grátis
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
              Jogar agora
            </button>
          )}
          {logged && (
            <Link
              className=" bg-green-600 p-4 w-36 h-14 rounded-md"
              href="/Mines"
            >
              Jogar agora
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
