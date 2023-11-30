export default function CaixaHome(props) {
  return (
    <div className="bg-gradient-to-l from-gray-900 to-gray-900 w-80 h-36 flex items-center p-4 gap-5 border-b-2 border-indigo-500 rounded-b-md mx-8">
      <div className="rounded-full bg-indigo-500 bg-opacity-30 border-dashed border-indigo-500 border-2  w-40 h-24 flex text-center items-center justify-center">
        <h2 className={props.atb}>{props.number}</h2>
      </div>
      <div>
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-slate-400 text-xs">{props.content}</p>
      </div>
    </div>
  );
};
