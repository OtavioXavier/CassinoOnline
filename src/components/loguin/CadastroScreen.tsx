"use client";

import Image from "next/image";
import Logo from "../commons/Logo";
import React, { useState, useRef, useEffect } from "react";

export default function Cadastro({ register, loguin }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);
  const BirthDayRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (email && password) {
        sendUser(email, password);
    }
  }, [email, password]);

  function tryRegister() {
    if (!emailRef.current || !senhaRef.current || !BirthDayRef.current) {
      return;
    }

    if (!isValidEmail(emailRef.current.value)) {
      alert("algo de errado com seu email");
      return;
    }

    if (!isValidPassword(senhaRef.current.value)) {
      alert("sua senha deve ter ao menos 4 caracteres");
      return;
    }

    if (!isEmailExist(emailRef.current.value)) {
      alert("email ja cadastrado")
      return;
    }

    if(!isValidBirthDay(BirthDayRef.current.value)) {
      alert("novo demais")
      return;
    }

    setEmail(emailRef.current.value);
    setPassword(senhaRef.current.value);

    alert("Cadastrado");
  };

  function sendUser(email: string, password:any) {
    let users =  JSON.parse(localStorage.getItem("users")) || [];
    let newUser =  {access:  email, code: password, coins:0};
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function isValidBirthDay(birthday: string) {
    let aniversario = new Date(birthday);
    let hoje = new Date();
    let anoAtual = hoje.getFullYear()
    let mesAtual = hoje.getMonth();

    let anoAniversario = aniversario.getFullYear();
    let mesAniversario = aniversario.getMonth();

    let calcidade = anoAtual - anoAniversario;
    let mes = mesAtual - mesAniversario;

    if(mes < 0 || (mes === 0 && hoje.getDate() < aniversario.getDate())) {
      calcidade--;
    }

    if(calcidade >= 18) {
      setAge(calcidade);
      return true;
    } else {
      return false;
    }
  };

  function isValidPassword(password: string) {
    return password.length >= 4;
  }

  function isValidEmail(email: string) {
    return email.includes("@") && email.includes(".com");
  }

  function isEmailExist(email: string) {
   const users = JSON.parse(localStorage.getItem('users')) || [];
   let user = users.find((u)=> u.access == email);
   return !user;
  }
  
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="flex">
              <Image
                src={"./Ednaldo.svg"}
                width={300}
                height={200}
                alt="ednaldo"
                className="rounded-bl-3xl"
              />
              <div className="bg-gray-800 w-auto h-auto p-4 px-10 rounded-br-3xl rounded-tr-3xl">
                <button
                  onClick={() => {
                    register(false);
                  }}
                  className="float-right"
                  type="button"
                >
                  {" "}
                  <Image src={"./Delete.svg"} width={25} height={45} alt="X" />
                </button>
                <div className="flex flex-col items-center">
                  <Logo />
                  <h1 className="text-2xl font-light">Fazer Cadastro</h1>
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
                      className="bg-zinc-600 border-2 border-gray-400 w-80 h-12 rounded-lg p-2 placeholder:text-gray-500"
                      type="text"
                      id="email"
                      ref={emailRef}
                      placeholder="joao@gmail.com"
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
                      className="bg-zinc-600 border-2 border-gray-400 w-80 h-12 rounded-lg p-2"
                      type="password"
                      id="password"
                      ref={senhaRef}
                      placeholder="1234"
                    />
                  </div>
                  <div className="flex flex-col items-baseline mb-8">
                    <label
                      className="mb-2 mt-6 text-sm  text-left"
                      htmlFor="BirthDay"
                    >
                      Ano de Nascimento
                    </label>
                    <input
                      className="bg-zinc-600 border-2 border-gray-400 w-80 h-12 rounded-lg p-2"
                      type="date"
                      id={"BirthDay"}
                      ref={BirthDayRef}
                      />
                  </div>
  
                  <button
                    className=" bg-green-600 rounded-xl w-80 h-12 text-2xl"
                    type="button"
                    onClick={() =>{tryRegister()}}
                  >
                    Cadastrar
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
                  Já tem cadastro?
                  <button
                    onClick={() => {
                      register(false);
                      loguin(true);
                    }}
                    className="text-green-600 font-bold"
                  >
                    Entre agora
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 
                  