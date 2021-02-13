import React from 'react'
import "./Jobs.css"
import pryamugolnik from "../assets/Прямоугольник3.svg"
import shadow  from "../assets/shadow.png"
import sloygoPrint  from "../assets/sloygoPrint.svg"
import goPrintOriginal  from "../assets/goPrintOriginal.svg"

const Jobs = () => {
    return (
        <div className="bootstrap__table">
            <div className="bootstrap__tableLeft">
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                    <img src={shadow} className="icon2" />
                    <img src={pryamugolnik} className="icon" />
                    <img src={sloygoPrint} className="icon3" />
                    <img src={sloygoPrint} className="icon3" />
                    <img src={goPrintOriginal} className="icon4" />
            </div>
            <div className="bootstrap__tableRight">
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableLine"></div>
                <div className="bootstrap__tableRightInfo">
                    <h1 className="bootstrap__tableRightTitle" style={{marginTop: "180px", marginBottom: "23px"}}>
                        Project name
                    </h1>
                    <p className="bootstrap__tableRightText" style={{marginBottom: "90px"}}>No matter what type of your work you do, NMS customized
                        software development will fulfill your needs. No matter
                        what type of your work you do, NMS customized software
                        development will fulfill your needstjxfyk uirtftyityerytyt.
                        software development will fulfill your needs. No matter
                        what type of your work you do, NMS customized software
                        development will fulfill your needstjxfyk uirtftyityerytyt.</p>
                    <h1 className="bootstrap__tableRightTitle">
                        Design, UX, UI, Java
                        Web, Logo, Brend
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Jobs
