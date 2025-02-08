import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dixon Chiu,</span> Data professional based in Melbourne</h1>
        <p>Text can be added here in Hero.jsx</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My CV</div>
        </div>
    </div>
  )
}

export default Hero