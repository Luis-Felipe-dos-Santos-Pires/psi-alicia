import { useState } from "react";
import AboutMeImg from "../assets/Pawel-about-me.jpg"

function AboutMe () {
    return (
        <div id="AboutMe" className="w-screen h-full scroll-smooth bg-slate-950 gap-0 columns-2">
            <div className="h-full w-full flex items-center justify-center">
                <img className="h-3/6 w-auto rounded-sm" src={AboutMeImg} />
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center">
                <p className="font-serif text-4xl text-slate-100">Sobre mim</p>
                <div className="w-4/6">
                    <p className="font-serif mt-6 text-xl text-slate-100 text-wrap break-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ante quis leo ultrices egestas ultricies eu ex. Duis eu maximus magna. Vivamus egestas sem vitae posuere pretium. Maecenas vel dui eu mi consequat facilisis. Etiam nec elit a ante iaculis semper. Integer suscipit et dolor sed aliquam. Etiam gravida lorem nulla, sed varius nibh scelerisque vel. Integer tortor ipsum, faucibus in pulvinar at, molestie ac metus. Suspendisse imperdiet venenatis urna quis luctus. Sed quis tincidunt dui. Nam congue diam vel nulla pulvinar semper.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe