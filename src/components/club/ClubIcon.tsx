import {Honk} from "next/font/google";


export const honk = Honk({subsets: ["latin"]});

export default function ClubIcon(props) {

    return <>
        <img src="/dt-logo.png" className="w-16"
             alt="Dominate Twitter Club Logo"/>

        {/*<div className={`${honk.className} text-5xl text-orange-500`}>#dt</div>*/}
    </>
}
