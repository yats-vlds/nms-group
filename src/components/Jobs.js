import React from 'react'
import "./Jobs.css"
import icon from "../assets/shakhmaty.svg"

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
                <img src={icon} className="icon"/>
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
