import { useState } from "react";
import Avatar from "../assets/alicia.png";

function Item({label, link, twclass}) {
    return <div class="h-full flex justify-center items-center">
        <text href={link} class={twclass}>{label}</text>
    </div>
}

function Menu () {
    return (
        <div class="h-full w-full gap-0 m-0 p-0 flex-col">
            <div class="h-20 self-start gap-0 columns-5">
                <Item label="Sobre mim" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
                <Item label="Abordagem" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
                <Item label="Contato" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
                <Item label="Código de ética" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
                <Item label="Insta" link="TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            </div>
            <div class="h-4/5 w-full flex items-center justify-center">
                <img class="w-96 h-96 rounded-full" src={Avatar}></img>
            </div>
        </div>
    )
}

export default Menu