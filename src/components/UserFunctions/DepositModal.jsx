"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import PaymentMethod from "./PaymentMethods";
import { Transition } from "@headlessui/react";

export default function DepositModal({ close }) {
  const [payment, setPayment] = useState("");
  const [open, setOpen] = useState(true);
  const [coin, setCoin] = useState(0);
  const [finish, setFinish] = useState(false);

  const coinRef = useRef(Number);

  function takePayment(payment) {
    let newPayment = payment;
    setPayment(newPayment);
  }

  function takeCoin(coinValue) {
    coinRef.current.value = coinValue;
  }

  function handleButtonDeposit() {
    let newCoin = coinRef.current.value;
    setCoin(newCoin);
    if (newCoin > 0) {
      setPayment("pixTime");
    } else {
      alert("Insira um valor valido");
    }
  }

  function sendCoin() {
    let list = JSON.parse(localStorage.getItem("isLogin")) || [];
    let user = list.find((u)=> u.access);

    let userCoin = Number(user.coins);
    let walletCoin = Number(coin);
    walletCoin += userCoin;

    user.coins = walletCoin;
    
    let newList = [user];
    localStorage.setItem("isLogin", JSON.stringify(newList));
  }

  return (
    <div>
      <Transition
        appear={true}
        show={open}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative bg-gray-800 px-12 pt-8 pb-16 rounded-2xl">
                <div>
                  <button
                    className="absolute right-4 top-0"
                    type="button"
                    onClick={() => {
                      close(false);
                      setOpen(false);
                      window.location.reload();
                    }}
                  >
                    <Image
                      src={"/Delete.svg"}
                      width={32}
                      height={32}
                      alt="close"
                    />
                  </button>
                </div>

                <div className="flex flex-col gap-5 transition-all">
                  <p className="text-sm">
                    Tipo de Pagamento •
                    <span className="text-stone-300">
                      Detalhes do Pagamento
                    </span>
                  </p>
                  <p className="text-sm">Escolha o seu método de pagamento</p>
                </div>
                {payment === "pixTime" && (
                  <div>
                    <div className="flex gap-16 items-center justify-center">
                      <Image
                        src={"/pix.png"}
                        width={122}
                        height={65}
                        alt="pix"
                      />
                      <h1 className="text-4xl ">R$ {coin}</h1>
                    </div>
                    {!finish && (
                      <div className="flex flex-col items-center gap-5">
                        <button
                          className="hover:scale-105 transition-transform"
                          onClick={() => {
                            setFinish(true);
                            sendCoin();
                          }}
                        >
                          <Image
                            src={"/QrCode.svg"}
                            width={168}
                            height={168}
                            alt={"QrCode"}
                          />
                        </button>
                        <p className="text-sm text-center w-96">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an
                        </p>
                      </div>
                    )}
                    {finish && (
                      <div className="flex flex-col items-center">
                        <Image src={"/CheckCircle.svg"} width={300} height={300} alt="check"/>
                        <div className="flex flex-col gap-4">
                        <h1 className="text-4xl">Pagamento Concluido</h1>
                        <p className="w-96 text-xl text-stone-400">Venha fazer uma renda extra se divertindo 😎</p>
                        </div>
                        <button onClick={()=> {close(false); window.location.reload()}} className="w-36 h-14 bg-green-600 font-bold rounded-md hover:scale-110 transition-all mt-20" type="button">Ver Jogos</button>
                      </div>

                    )}
                    {!finish &&(
                        <div className="flex gap-16 justify-center items-center mt-10">
                      <button
                        type="button"
                        className="w-36 h-14 border border-stone-300/20  hover:scale-110 transition-all"
                        onClick={() => {
                          setPayment("pix");
                        }}
                      >
                        Voltar
                      </button>
                      <button
                        type="button"
                        className="w-36 h-14 bg-green-600 font-bold rounded-md hover:scale-110 transition-all"
                      >
                        Copiar Código
                      </button>
                    </div>
                    )}
                  </div>
                )}
                {payment === "pix" && (
                  <div className="w-96 flex-col flex gap-8 mt-8">
                    <div className="flex justify-between gap-8">
                      <button
                        onClick={() => {
                          takeCoin(1);
                        }}
                        type="button"
                        className="h-10 w-32 text-left p-2 border border-stone-300/20 text-sm"
                      >
                        R$ 1.00
                      </button>
                      <button
                        onClick={() => {
                          takeCoin(100);
                        }}
                        type="button"
                        className="h-10 w-32 text-left p-2 border border-stone-300/20 text-sm"
                      >
                        R$ 100.00
                      </button>
                      <button
                        onClick={() => {
                          takeCoin(1000);
                        }}
                        type="button"
                        className="h-10 w-32 text-left p-2 border border-stone-300/20 text-sm"
                      >
                        R$ 1000.00
                      </button>
                    </div>
                    <input
                      type="number"
                      id="coins"
                      placeholder="Valor a depositar"
                      className="placeholder:text-gray-500 bg-gray-900 rounded shadow border-stone-300/20 h-12 w-96 p-4"
                      ref={coinRef}
                    />

                    <div className="flex gap-16 justify-center items-center mt-20">
                      <button
                        type="button"
                        className="w-36 h-14 border border-stone-300/20 "
                        onClick={() => {
                          setPayment("");
                        }}
                      >
                        Voltar
                      </button>
                      <button
                        type="button"
                        className="w-36 h-14 bg-green-600 font-bold rounded-md"
                        onClick={() => {
                          handleButtonDeposit();
                        }}
                      >
                        Depositar
                      </button>
                    </div>
                  </div>
                )}
                {payment === "" && (
                  <div>
                    <div>
                      <div className="flex flex-col text-left gap-4 mt-8">
                        <label
                          htmlFor="Pix"
                          className="text-stone-300 text-base "
                        >
                          Recomendado
                        </label>
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                      </div>
                      <div className="flex flex-col text-left gap-4 mt-6">
                        <label
                          htmlFor="Pix"
                          className="text-stone-300 text-base "
                        >
                          Recomendado
                        </label>
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                        <PaymentMethod method={"Pix"} payment={takePayment} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
