// import React from 'react'
import './intro.css';
import profile from '../../assets/profile.png'
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className="introText">I am <span className='introName'>Shoaib</span><br/>Full Stack Webiste Developer</span>
                <p className='introPara'>I am a skilled website developer with experience in creating visually<br/> appealing and user friendly websites.</p>
                <Link><button className='btn'><img src="" alt=''/>Hire Me</button></Link>
        </div>
        <img src={profile} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro