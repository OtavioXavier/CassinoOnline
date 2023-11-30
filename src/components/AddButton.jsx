export default function AddButton( {content, text, pure}  ) {
  function send() {
     content(text);
  }
  let newText;
  if(pure) {
   newText  = `+${text}`
  } else {
    newText = text;
  }
  return (
    <div>
      <button className="text-slate-400 font-medium text-sm hover:text-gray-800 hover:bg-slate-300 p-2 transition-all" onClick={send}>{newText}</button>
    </div>
  )
}