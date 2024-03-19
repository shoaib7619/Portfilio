// import React from 'react'
import './intro.css';
import profile from '/assets/profile.png'
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className="introText">I am <span className='introName'>Shoaib</span><br/>Full Stack Website Developer</span>
                <p className='introPara'>I am a skilled website developer with experience in creating visually<br/> appealing and user friendly websites.</p>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='hire' ><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={profile} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro