import Image from "next/image";
import { useEffect } from "react";

export default function NavProfile() {

    useEffect(()=> {
        updateUser();
    }, []);
    
    function exitLogin() {
            window.localStorage.removeItem('isLogin');
            window.location.reload();
    }

    function updateUser() {
        let users = JSON.parse(localStorage.getItem('users'));
        const isLogin = JSON.parse(localStorage.getItem('isLogin'));

        let userAccess = isLogin[0].access;
        let user = users.find((u)=> u.access === userAccess); 
        let userCoin = isLogin[0].coins;

        user.coins = userCoin;
        users = users.filter(item => item.access !== userAccess);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    };

    return (
        <div className="mt-6 flex justify-between">
        <div className="flex gap-2 items-start">
            <button className="text-sm text-slate-400 hover:text-gray-800 hover:bg-[url('/fundoCinza.jfif')] font-semibold transition-all px-8 py-1.5">Conta</button>
            <button className="text-sm text-slate-400 hover:text-gray-800 hover:bg-[url('/fundoCinza.jfif')] font-semibold transition-all px-8 py-1.5">Histórico</button>
            <button className="text-sm text-slate-400 hover:text-gray-800 hover:bg-[url('/fundoCinza.jfif')] font-semibold transition-all px-8 py-1.5">Transações</button>
            <button className="text-sm text-slate-400 hover:text-gray-800 hover:bg-[url('/fundoCinza.jfif')] font-semibold transition-all px-8 py-1.5">Configurações</button>
        </div>
        <button type="button" onClick={()=>{exitLogin();}} className="flex gap-2 items-center font-medium text-xl hover:scale-110 transition-all opacity-50 hover:opacity-100">
        Sair
        <Image src='Exit.svg' width={35} height={35} alt="Exit"/>
        </button>
        </div>
    )
}