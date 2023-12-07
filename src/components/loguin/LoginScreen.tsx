"use client";

import Logo from "../commons/Logo";
import Image from "next/image";
import React, { useRef } from "react";

export default function Loguin({ loguin, register,  }) {

  const emailRef = useRef();
  const passwordRef = useRef();

  function isFull() {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    if(isLogin) {
      return true;
    } else {
      return false
    }
  }

  function emailExist(emailRef) {
   let inputEmail = emailRef.current.value;
   const users = JSON.parse(localStorage.getItem('users')) || [];
   let user = users.find((u)=> u.access === inputEmail);
   return !!user;
  }

  function samePassword(emailRef, passwordRef) {
    let inputEmail = emailRef.current.value;
    let inputPassword = passwordRef.current.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find((u)=> u.access === inputEmail);
    return user.code === inputPassword;
  }

  function tryLogin(emailRef) {
    
    if (!emailExist(emailRef)) {
      alert("email não registrado");
      return;
    }

    if (!samePassword(emailRef, passwordRef)) {
      alert("Senha incorreta");
      return;
    }

    if(isFull()) {
     alert("ja existe login");
     return;
    }

    let inputEmail = emailRef.current.value;
    const isLogin = JSON.parse(localStorage.getItem('isLogin')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let login = users.find((u)=> u.access === inputEmail);
    isLogin.push(login);
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
    alert("Login Concluido");
    window.location.reload();

  }

  return (
    <div>
      <div
        className="relative z-10 "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 transition-all">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-gray-800 w-auto h-auto p-4 px-20 rounded-3xl">
                <button
                  onClick={() => {
                    loguin(false);
                  }}
                  type="button"
                  className="relative float-right"
                >
                  <Image src={"./Delete.svg"} width={25} height={45} alt="X" />
                </button>
              <div className="flex flex-col justify-center items-center">
                <Logo />
                <h1 className="text-2xl mt-4 font-light">Fazer loguin</h1>
              </div>

              <form>
                <div className="flex flex-col items-baseline">
                  <label
                    className="mb-2 mt-6 text-sm  text-left"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="bg-zinc-600 border-2 border-gray-400 w-80 h-12 rounded-lg"
                    type="text"
                    id="email"
                    ref={emailRef}
                  />
                </div>
                <div className="flex flex-col items-baseline">
                  <label
                    className="mb-2 mt-6 text-sm  text-left"
                    htmlFor="password"
                  >
                    Senha
                  </label>
                  <input
                    className="bg-zinc-600 border-2 border-gray-400 w-80 h-12 rounded-lg"
                    type="text"
                    id="password"
                    ref={passwordRef}
                  />
                </div>
                <p className="text-right text-sm mt-2 mb-5">
                  Esqueceu a senha?
                </p>

                <button
                  className=" bg-green-600 rounded-xl w-80 h-12 text-2xl"
                  type="button"
                  onClick={() => {
                    tryLogin(emailRef);
                  }}
                >
                  Entrar
                </button>
              </form>

              <fieldset className="border-t border-neutral-300 mt-8 mb-4">
                <legend className="mx-auto px-4 text-neutral-300 text-base">
                  ou
                </legend>
              </fieldset>

              <button className="border-2 p-2 rounded-xl hover:scale-110 transition-all">
                <Image
                  src="./google.svg"
                  width={30}
                  height={30}
                  alt="google button"
                />
              </button>

              <p className="mt-8 text-sm">
                Ainda não tem uma conta?{" "}
                <button
                  onClick={() => {
                    loguin(false);
                    register(true);
                  }}
                  className="text-green-600 font-bold"
                >
                  Crie uma agora
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
