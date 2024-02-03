import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";
import { FaInstagram } from "react-icons/fa"


function Item({label, link, twclass, target}) {
    return (
        <div className="h-full flex justify-center items-center text-xl">
            <Link to={link} target={target} smooth={true} replace={true} className={twclass}>{label}</Link>
        </div>
    )
}

function Menu () {
    return (
        <div className="h-full w-full self-start gap-0 columns-5">
            <Item label="Sobre mim" link="#AboutMe" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Abordagem" link="#Behavior" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Contato" link="#TESTE" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label="Código de ética" link="#EthicalCode" twclass="font-serif text-slate-300 hover:text-slate-100 hover:cursor-pointer" />
            <Item label={<FaInstagram color="#FFF" size="20px"/>} link="https://www.instagram.com/instagram/" target="_blank" twclass="flex-end"/>
        </div>
    )
}

export default Menu