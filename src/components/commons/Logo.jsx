import Image from "next/image"

export default function Logo() {
 
    return (
          <Image
            src="/logo.svg"
            width={250}
            height={100}
            alt="Logo"
          />
    )
}