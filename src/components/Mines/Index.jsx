'use client'

import BetAmount from './BetAmount';
import MinesAmount from './MinesAmount';
import MineField from './MineField';
import React, {useState, useRef} from 'react';
import ModalWin from './ModalWin';
import ModalLoose from './ModalLoose';

export default function Index() {
    const [bet, setBet] = useState(0);
    const [mines, setMines] = useState(0);
    const [active, setActive] = useState(false);
    const [hits, setHits] = useState(1);
    const [loose, setLoose] = useState(false);
    const [finish, setFinish] = useState(false);
    const refMineField = useRef();
 
    function sendData() {
        if(!checkLogin()) {
           alert("Faça login para jogar aqui.");
           return;
        }

        if(checkInputs()) {
            refMineField.current.choiceBombs();
            pay();
            setActive(true);
        }
    }

    function checkLogin() {
        let login = JSON.parse(localStorage.getItem('isLogin'));
        if(login) {
            return true;
        } else {
            return false;
        }
    }

    function pay() {
        let login = JSON.parse(localStorage.getItem('isLogin'));
        let user = login[0];
        let newCoin = Number(user.coins) - Number(bet);
        user.coins = newCoin;
        login = [user];
        localStorage.setItem("isLogin", JSON.stringify(login));
        
    }

    function receive() {
        let login = JSON.parse(localStorage.getItem('isLogin'));
        let user = login[0];
        let newCoin = Number(user.coins) + Number(bet);
        user.coins = newCoin;
        login = [user];
        localStorage.setItem("isLogin", JSON.stringify(login));
    }

    function takeBet(betAmount) {
        let newBetAmount = betAmount;
        setBet(newBetAmount);
    }

    function takeMines(mineAmount) {
        let newMineAmount = mineAmount;
        setMines(newMineAmount);
    }

    function takeHits(hitsQuant) {
    let newHit = hitsQuant;
    let newBet = bet * 2;
    setHits(newHit);
    setBet(newBet);
    }

    function takeLoose(defeat) {
      let newLoose = defeat;
      setLoose(newLoose);
    }

    function withdraw() {
        receive();
        setFinish(true);
    }

    function checkInputs() {

        if(bet <=0 ) {
          alert("Insira o montante de dinheiro!")
          return false;
        }

        let login = JSON.parse(localStorage.getItem('isLogin'));
        if(bet > login[0].coins) {
            alert("você precisa depositar mais dinheiro para apostar tudo isso")
         return false;
        }
        
        if(mines <= 0 ) {
            alert("Insira o montante de minas!")
            return false;
        }

        return true;
    }

    return (
        <div>
           {finish &&(<ModalWin hits={hits} bet={bet}/>)}
           {loose && (<ModalLoose hits={hits}/>)}
           
           <div className='flex flex-col lg:flex-row justify-center items-center gap-40'>
            <div className='flex flex-col items-center gap-8'>
                <BetAmount Bet={takeBet}/>
                <MinesAmount Mines={takeMines}/>
                {active &&(<button className='bg-green-600 w-36 h-12 rounded hover:scale-95 transition-all' type='button' onClick={()=>{withdraw()}}>Retirar R${bet}</button>)}
                {!active &&(<button className='bg-green-600 w-36 h-12 rounded hover:scale-110 transition-all' type='button' onClick={()=>{sendData()}}>Começar a jogar</button>)}
            </div>

            <div className='md:mt-20'>
                <MineField ref={refMineField} quant={mines} hitsQuant={takeHits} isLoose={takeLoose}/>
            </div>
        </div>
        </div>

    );
}
