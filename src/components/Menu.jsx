import { useState } from "react";

function Item({label, link}) {
    return <div>
        <span href={link}>{label}</span>
    </div>
}


function Menu () {
    return (
        <>
            <Item label="TESTE" link="TESTE"/>
            <Item label="TESTE" link="TESTE"/>
            <Item label="TESTE" link="TESTE"/>
        </>
    )
}

export default Menu