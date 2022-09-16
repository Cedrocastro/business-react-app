import React from "react"
import "./Main.css"
import icon from "./images/icon.jpg"


export default function Main() {
    return (
        <main className="main">
            <div>
                <h1 className="name">Laura Smith</h1>
                <h3>web developer</h3>
                <h4>Youtuber at Afrimedia TV</h4>
                <button className="button"><span><img src={icon}/></span>Email</button>
            </div>
            <div className="para1">
                <p className="about">About</p>
                <p className="about-p">
                    is simply dummy text of the since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </p>
            </div>
            <div className="para2">
                <p className="interest">Interests</p>
                <p className="interest-p">
                    is simply dummy text of the  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </p>
            </div>
        </main>
    )
}