'use client'

import Logo from "../commons/Logo";
import LinkPag from "./LinkPag";
import React, {useState, useEffect} from 'react';
import LoguinScreen from '../loguin/LoguinScreen.tsx';
import CadastroScreen from '../loguin/CadastroScreen.tsx';
import UserHeader from './UserHeader';
import Image from "next/image";



export default function HeaderHome() {

  const [isLoguin, setIsLoguin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const [paneCoins, setPaneCoins] = useState(0);


  function takeRegister(register) {
    let newRegister = register
    setIsRegister(newRegister);
  }
  
  function takeLoguin(login) {
    let newLogin = login;
    setIsLoguin(newLogin);
  }
  
  useEffect(()=> {
     let login = localStorage.getItem('isLogin');
     if(login || isLogged) {
      login = JSON.parse(localStorage.getItem('isLogin'));
      const user = login.find((u)=> u.access);
      let newCoins = user ? user.coins : 0;
      setLogged(true);
      setPaneCoins(newCoins);
    }
  }, []);
  
  
  return (
    <div>
      <header className="flex justify-between py-4 px-16 border-solid items-center border-b border-gray-600">
        <div className="flex items-center">
        <button><Image src={"/buttonSideBar.svg"} width={40} height={40} alt="bottom"/></button>
        <div className="hidden md:block">
        <Logo />
        </div>
        </div>
        <div className=" block">
        
        </div>
        <div className=" gap-16 items-center hidden md:flex">
          <LinkPag text="Cassino" direction="/"/>
          <LinkPag text="Esportes" direction="/Esportes"/>
        </div>
        {isLogged && (<UserHeader userCoins={paneCoins}/>)}
        {!isLogged && ( 
       <div className="flex gap-14 items-center">
       <button type="button" onClick={()=> {setIsLoguin(true)}}>Entrar</button>
       <button onClick={() => {setIsRegister(true)}} className="transition-all bg-green-600 rounded-md font-bold p-2 hover:scale-110 " >Cadastre-se</button>
        </div>)}
      </header>
      {isLoguin && (
      <LoguinScreen loguin={takeLoguin} register={takeRegister}/>
      )}
      <div>
      {isRegister && (
      <CadastroScreen register={takeRegister} loguin={takeLoguin}/>
      )}
      </div>
    </div>
  );
}
