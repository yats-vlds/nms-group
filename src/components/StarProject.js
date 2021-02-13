import React from 'react'
import "./StarProject.css"
import background from "../assets/back.svg"


const StarProject = () => {
    return (
        <div className="star__project">
            <div className="star__projectSloy">
                <div className="star__projectLeft">
                    <h1 className="star__projectLeftTitle">Custom SaaS</h1>
                    <h1 className="star__projectLeftTitle">Mobile and Web Development</h1>
                    <h1 className="star__projectLeftTitle">UI/UX Design</h1>
                </div>
                <img src={background} alt="" className="star__imageBack"/>
            </div>
        </div>
    )
}

export default StarProject
