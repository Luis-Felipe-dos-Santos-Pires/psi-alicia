import { useState } from "react";
import {Link} from "react-router-dom";


function Item({label, link, twclass}) {
    return <div class="h-full flex justify-center items-center">
        <Link to={link} class={twclass}>{label}</Link>
    </div>
}

function Menu () {
    return (
        <div class="h-full w-full self-start gap-0 columns-4">
            <Item label="Sobre mim" link="#AboutMe" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Abordagem" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Contato" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Código de ética" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
        </div>
    )
}

export default Menu