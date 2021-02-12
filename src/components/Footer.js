import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <img />
        <h5 className="footer__location">Team based in Kyiv, Ukraine</h5>
        <div className="footer__contacts">
            <h1 className="footer__contactsTitle">Contact us now</h1>
            <p><strong>Tel.:</strong>+38 090 000 00 00</p>
            <p><strong>Mail.:</strong>dev.nms@gmail.com</p>
        </div>

        <hr/>
        <p>© NMS 2021</p>
    </div>
  )
}

export default Footer
