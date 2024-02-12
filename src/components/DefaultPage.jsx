import { useState } from "react";
import AboutMeImg from "../assets/Pawel-about-me.jpg"

function AboutMe ({Id, BgColor, Image, ImageStyle, Title, TitleStyle, Text, TextStyle, TextOrder}) {
    return (
        <div id={Id} className={`w-screen h-full ${BgColor} gap-0 flex`}>
            <div className="flex-1 flex items-center justify-center">
                <img className={ImageStyle} src={Image} />
            </div>
            <div className={`flex-1 flex flex-col ${TextOrder} items-center justify-center`}>
                <p className={TitleStyle}>{Title}</p>
                <div className="w-4/6">
                    <p className={TextStyle}>{Text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe