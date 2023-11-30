import Image from "next/image"

export default function IconJogos(props) {
    return(
        <div className="flex flex-col items-center ">
        <h1 className="mb-5 font-bold text-zinc-200">{props.title}</h1>
        <div className="shadow">
        <Image src={props.src} width={72} height={87} alt="icon" />
        </div>
      </div>
    )
}