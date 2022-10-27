import React from "react";
import Logo from "../images/logo.png"

export default function Info() {

    return (
        <header>
            <img src={Logo} alt="Esmeralda looking serious" className="info--logo" />
            <h1 className="info--header">Esmeralda Kok</h1>
            <h4 className="info--subheading">Frontend Developer</h4>
            <a href="https://serene-bienenstitch-159055.netlify.app/" className="info--link"  target="_blank">My Portfolio Website</a>
            <button className="info--email--btn" href = "mailto: esykok@gmail.com">
                <a href = "mailto: esykok@gmail.com"  target="_blank">
                    <i class="fa-solid fa-envelope"></i> Email
                </a> 
            </button>

        </header> 
    )
}