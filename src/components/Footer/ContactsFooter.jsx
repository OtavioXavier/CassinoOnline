export default function ContactsFooter() {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
        <span className="hover:rotate-45 transition-all flex items-center justify-center w-12 h-12 bg-gray-900 rounded cursor-pointer">
          <span className="bg-[url('/youtube.png')] bg-contain w-4 h-4 bg-no-repeat"/>
        </span>
        <span className="hover:scale-110 transition-all text-base bg-green-600 rounded-xl text-center flex justify-center gap-4 items-center w-40 h-12 cursor-pointer">
          <span className="bg-[url('/phone.png')] bg-no-repeat bg-contain w-4 h-4"/>
           02-508-8798
        </span> 
    </div>
  ) 
}