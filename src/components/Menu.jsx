import { useState } from "react";

function Item({label, link, twclass}) {
    return <div class={twclass}>
        <span href={link} class={twclass}>{label}</span>
    </div>
}


function Menu () {
    return (
        <div class="w-full bg-gray-500 m-0 p-0 flex-column">
            <div class=" gap-0 columns-5">
                <Item label="Sobre mim" link="TESTE" twclass="hover:bg-" />
                <Item label="Abordagem" link="TESTE" twclass="bg-green-100 m-0 p-0" />
                <Item label="Contato" link="TESTE" twclass="bg-blue-100 m-0 p-0" />
                <Item label="Código de ética" link="TESTE" twclass="bg-orange-100 m-0 p-0" />
                <Item label="Insta" link="TESTE" twclass="bg-yellow-100 m-0 p-0" />
            </div>
        </div>
    )
}

export default Menu