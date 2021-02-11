import React from 'react'
import "./Expert.css"
import yog from "../assets/yog.svg"
import shakhmaty from "../assets/shakhmaty.svg"
import vess from "../assets/vess.svg"

const Expert = () => {
    return (
        <div className="expert">
            <div className="expert__container">
                <div className="expert__line">
                    <div className="expert__lineLeft">
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                        <h1 className="expert__lineFirstTitle">
                            Your Project Path
                        </h1>
                    </div>
                </div>

                <div className="expert__line">
                    <div className="expert__lineLeft">
                        <h1 className="expert__lineTitle">
                            Your Project Path
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                        <img src={yog} alt="yog"/>
                    </div>
                </div>

                <div className="expert__line">
                    <div className="expert__lineLeft">
                        <img src={vess} alt="yog"/>
                    </div>
                    <div className="expert__lineRight">
                        <h1 className="expert__lineTitle">
                            Ideation and evaluation
                                              of your business needs
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS customized
                                             software development will fulfill your needs. No matter
                                            what type of your work you do, NMS customized software
                                      development will fulfill your needs.
                        </p>
                    </div>
                </div>

                <div className="expert__line" style={{paddingBottom: "200px"}}>
                    <div className="expert__lineLeft">
                        <h1 className="expert__lineTitle">
                            Creation of an
                                    Effective Action Plan
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                        <img src={shakhmaty} alt="yog" className="expert__lineImage"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Expert
