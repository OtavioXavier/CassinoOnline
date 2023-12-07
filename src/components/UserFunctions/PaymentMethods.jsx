export default function PaymentMethods({method, payment}) {
  return (
    <button
      type="button"
      id="Pix"
      className="w-96 h-12 bg-gray-950 rounded-md shadow border border-stone-300/20 text-left pl-4 hover:scale-105 transition-all "
      onClick={()=>{payment(1)}}
    >
      {method}
    </button>
  );
}
