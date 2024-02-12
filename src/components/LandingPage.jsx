import { useState } from "react";
import Menu from './Menu'
import Avatar from "../assets/alicia.png";
import DefaultPage from './DefaultPage'

function LandingPage () {
    return (
        <div id="LandingPage" className="w-screen h-full bg-landing-page bg-cover bg-no-repeat bg-fixed bg-center gap-0 z-50">
            <div className="h-1/5 gap-0 columns-2">
                <div className="h-full w-full"></div>
                <Menu />
            </div>
            <div className="h-4/5 w-full">
                <DefaultPage Id="" Image={Avatar} BgColor="bg-transparent" ImageStyle="w-96 h-96 rounded-full" Title="Alicia Alves" TitleStyle="text-7xl font-serif text-slate-300" Text="Psicóloga - CRP 123456" TextOrder="order-first" TextStyle="text-xl font-serif text-slate-300"/>
            </div>
        </div>
    )
}

export default LandingPage