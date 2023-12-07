import Link from "next/link";

export default function Logo() {
 
    return (
          <Link
            href="/"
            className="bg-[url('/Logo.png')] bg-contain w-80 h-20 bg-no-repeat"
          ></Link>
    )
}