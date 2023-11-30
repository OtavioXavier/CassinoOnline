import Image from "next/image";

export default function ContactsFooter() {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
        <a className="flex items-center justify-center bg-gray-900 p-4 rounded" href=""><Image src={"/youtube.svg"} width={18} height={18} alt="youtube logo"/></a>
        <a className="text-xs sm:text-base py-2 flex gap-4 items-center bg-green-600 rounded-md px-6 transition-all hover:font-semibold  text-center" href=""><Image src={"/Phone.svg"} width={18} height={18} alt="phone number"/> 02-508-8798</a> 
    </div>
  ) 
}