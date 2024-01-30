import { useState } from "react";
import Menu from './Menu'
import Avatar from "../assets/alicia.png";

function LandingPage () {
    return (
        <div id="LandingPage" className="w-screen h-full bg-landing-page bg-cover bg-no-repeat bg-fixed bg-center gap-0">
            <div className="h-1/5 gap-0 columns-2">
                <div className="h-full w-full"></div>
                <Menu />
            </div>
            <div className="h-4/5 w-full gap-0 columns-2">
                <div className="h-full w-full flex flex-col justify-center items-start pl-48">
                    <p className="text-7xl font-serif text-slate-300">Alicia Alves</p>
                    <p className="text-xl font-serif text-slate-300">Psicóloga - CRP 123456</p>
                </div>
                <div className="h-4/5 w-fullm flex items-center justify-start pl-64">
                    <img className="w-96 h-96 rounded-full" src={Avatar}></img>
                </div>
            </div>
        </div>
    )
}

export default LandingPage