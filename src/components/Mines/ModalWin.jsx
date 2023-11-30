export default function ModalWin({ hits, bet }) {
  return (
    <div>
      <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 transition-all">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <button type="button" onClick={()=> {window.location.reload()}}>
            <div className="w-auto h-auto p-4 px-20 rounded-3xl">
                <div className="w-52 h-40 flex items-center justify-center bg-green-600 rounded-t-3xl">
                 <p className="text-7xl font-normal">x{hits}</p>
                </div>
                <div className="w-52 h-10 text-sm font-normal rounded-b-3xl flex items-center justify-center bg-green-800">
                      você ganhou R${bet}.
                </div>
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
