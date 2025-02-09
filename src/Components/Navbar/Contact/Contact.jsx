import React from 'react'
import './Contact.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import mail_icon from '../../../assets/mail_icon.svg'
import call_icon from '../../../assets/call_icon.svg'
import location_icon from '../../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Contact.jsx Learn How To Create Portfolio Website In React JS. Build Complete React JS Website Step by Step and deploy it online.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>dixonchiu22@hotmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>0402 154 754</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>AU, Melbourne</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button className='contact-submit' type="submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact