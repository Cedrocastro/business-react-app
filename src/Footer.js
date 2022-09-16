import React from "react"
import "./Footer.css"
import twitter from "./images/Twitter Icon.png"
import facebook from "./images/Facebook Icon.png"
import inst from "./images/Instagram Icon.png"
import git from "./images/GitHub Icon.png"


export default function Footer() {
    return (
        <footer className="footer">
            <span><img src={twitter} className="twi"/></span>
            <span><img src={facebook} className="face"/></span>
            <span><img src={inst} className="inst"/></span>
            <span><img src={git} className="git"/></span>
        </footer> 
    )
}