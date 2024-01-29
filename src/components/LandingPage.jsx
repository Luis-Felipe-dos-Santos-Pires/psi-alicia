import { useState } from "react";
import Menu from './Menu'
import Avatar from "../assets/alicia.png";

function LandingPage () {
    return (
        <div class="w-screen h-full bg-landing-page bg-cover bg-no-repeat bg-center">
            <Menu />
            <div class="h-4/5 w-full gap-0 columns-2">
                <div class="h-full w-full flex flex-col justify-center items-center">
                    <text class="text-7xl font-serif text-slate-300">Alicia Alves</text>
                    <text class="text-xl font-serif text-slate-300">Psicóloga - CRP 123456</text>
                </div>
                <div class="h-full w-full">
                    <div class="h-4/5 w-full flex items-center justify-center">
                        <img class="w-96 h-96 rounded-full" src={Avatar}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage