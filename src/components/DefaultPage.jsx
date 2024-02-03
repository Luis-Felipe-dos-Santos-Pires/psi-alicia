import { useState } from "react";
import AboutMeImg from "../assets/Pawel-about-me.jpg"

function AboutMe ({Id, BgColor, Image, ImageStyle, Title, TitleStyle, Text, TextStyle}) {
    return (
        <div id={Id} className={`w-screen h-full ${BgColor} gap-0 columns-2`}>
            <div className="h-full w-full flex items-center justify-center">
                <img className={ImageStyle} src={Image} />
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center">
                <p className={TitleStyle}>{Title}</p>
                <div className="w-4/6">
                    <p className={TextStyle}>{Text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe