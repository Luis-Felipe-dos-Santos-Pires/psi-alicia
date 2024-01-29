import { useState } from "react";
import Menu from './Menu'

function LandingPage () {
    return (
        <div class="w-screen h-full bg-landing-page bg-cover bg-no-repeat bg-center">
            <div class="h-full w-full gap-0 columns-2">
                <div class="h-full w-full flex flex-col justify-center items-center">
                    <text class="text-7xl font-serif text-slate-300">Alicia Alves</text>
                    <text class="text-xl font-serif text-slate-300">Psicóloga - CRP 123456</text>
                </div>
                <div class="h-full w-full">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default LandingPage