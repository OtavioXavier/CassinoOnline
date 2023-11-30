import Link from "next/link"

export default function LinkPag(props) {

        return (
            <Link className="text-gray-400 transition-all p-2 hover:border-b-2 hover:border-green-600 hover:text-white" href={props.direction}>{props.text}</Link>
        )
}