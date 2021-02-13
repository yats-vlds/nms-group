import React from 'react'
import "./WhyMe.css"
import background from "../assets/back.svg"


const WhyMe = () => {
    return (
        <>
            <div className="whyMe">
                <img className={background} className="whyMe__background"/>
                <div className="whyMe__container">
                    <div className="whyMe__left">

                    </div>
                    <div className="whyMe__right">
                        <h1 className="whyMe__rightTitle">
                            Because they trust
                        </h1>
                        <h1 className="whyMe__rightTitle">
                            Cost-efficient
                        </h1>
                        <p className="whyMe__rightText">
                            Talented Team based in Eastern Europe
                        </p>
                        <h1 className="whyMe__rightTitle">
                            Solution-oriented
                        </h1>
                        <p className="whyMe__rightText">
                            Optimal smart to the business needs
                        </p>
                        <h1 className="whyMe__rightTitle">
                            Professional
                        </h1>
                        <p className="whyMe__rightText">
                            Height quality developers working with
                            a wide range of technologies
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyMe
