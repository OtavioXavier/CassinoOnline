"use client";

import LinkPag from "./LinkPag";
import React, { useState, useEffect } from "react";
import LoginScreen from "../loguin/LoginScreen";
import CadastroScreen from "../loguin/CadastroScreen.tsx";
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar/Sidebar";
import Link from "next/link";

export default function HeaderHome({ toggleSidebar }) {
  const [isLoguin, setIsLoguin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const [paneCoins, setPaneCoins] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const takeRegister = (register) => setIsRegister(register);
  const takeLoguin = (login) => setIsLoguin(login);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("isLogin"));
    if (login || isLogged) {
      const user = login.find((u) => u.access);
      const newCoins = user ? user.coins : 0;
      setLogged(true);
      setPaneCoins(newCoins);
    }
  }, [isLogged]);

  return (
    <div>
      <header className="flex justify-between px-8 h-24 bg-slate-900 border-b border-gray-600 fixed w-full">
        <div className="flex items-center">
          <button
            type="button"
            className="bg-[url('/ButtonHeader.png')] w-10 h-10 bg-yellow-600 hover:rotate-90 transition-all"
            onClick={() => {
              toggleSidebar();
              showSidebar();
            }}
          ></button>
          <Link
            href="/"
            className="bg-[url('/Logo.png')] bg-contain w-80 h-20 bg-no-repeat hidden md:block"
          ></Link>
        </div>

        <div className=" gap-16 items-center hidden lg:flex">
          <LinkPag text="Cassino" direction="/" />
          <LinkPag text="Esportes" direction="/Esportes" />
        </div>
        {isLogged ? (
          <UserHeader userCoins={paneCoins} />
        ) : (
          <div className="flex gap-14 items-center">
            <button
              type="button"
              onClick={() => setIsLoguin(true)}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsRegister(true)}
              className="transition-all bg-green-600 rounded-md font-bold p-2 hover:scale-110 "
            >
              Cadastre-se
            </button>
          </div>
        )}
      </header>
      <Sidebar isOpen={sidebar} />

      {isLoguin && <LoginScreen loguin={takeLoguin} register={takeRegister} />}
      {isRegister && <CadastroScreen register={takeRegister} loguin={takeLoguin} />}
    </div>
  );
}
