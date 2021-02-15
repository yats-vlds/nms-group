import React from 'react'
import "./StarProject.css"
import background from "../assets/back.svg"
import iconDown from "../assets/iconDown.svg"


const StarProject = ({ id }) => {
    return (
        <div className="star__project">
            <div className="star__projectSloy" id={id}>
                <div className="star__projectLeft">
                    <h1 className="star__projectLeftTitle">Custom SaaS <img src={iconDown} /></h1>
                    <h1 className="star__projectLeftTitle">Mobile and Web Development <img src={iconDown} /></h1>
                    <h1 className="star__projectLeftTitle">UI/UX Design <img src={iconDown} /></h1>
                </div>
                <img src={background} alt="" className="star__imageBack"/>
            </div>
        </div>
    )
}

export default StarProject
