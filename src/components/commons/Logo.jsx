import Link from "next/link";
import Image from "next/image";

export default function Logo() {
 
    return (
          <Link href="/">
            <Image src={"/Logo.png"} width={320} height={80} alt="Logo"/>
          </Link>
    )
}