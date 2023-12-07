import Image from "next/image";
import AmountsProfile from './AmountsProfile';
import NavProfile from './NavProfile';
import ProfileArea from './ProfileArea';

export default function ModalProfile() {
    return (
        <div>
            <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
               <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 transition-all">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="w-auto h-auto p-4 px-20 rounded-3xl bg-gray-900">
                    <div className="flex justify-between items-start">
                    <h1 className='uppercase font-black text-2xl'>Perfil</h1>
                    <button type="button" className="hover:scale-110 transition-all opacity-50 hover:opacity-100"><Image src="/Close.svg" width={14} height={14} alt="Close button" /></button>
                </div>
                  <NavProfile/>
                  <AmountsProfile/>
                  <ProfileArea/>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}