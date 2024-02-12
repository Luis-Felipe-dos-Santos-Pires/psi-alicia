import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";
import { BsArrowUpCircle } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function BackToTop () {
    return (
        <button>
            <Link to="#LandingPage" smooth={true} replace={true} className="fixed bottom-20 right-10 p-1 z-40 rounded-full bg-transparent">{<MdOutlineKeyboardDoubleArrowUp color="#FFF" size="30px"/>}</Link>
        </button>
    )
}

export default BackToTop