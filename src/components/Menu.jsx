import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";


function Item({label, link, twclass}) {
    return (
        <div className="h-full flex justify-center items-center">
            <Link to={link} smooth={true} className={twclass}>{label}</Link>
        </div>
    )
}

function Menu () {
    return (
        <div className="h-full w-full self-start gap-0 columns-4">
            <Item label="Sobre mim" link="#AboutMe" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Abordagem" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Contato" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Código de ética" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
        </div>
    )
}

export default Menu