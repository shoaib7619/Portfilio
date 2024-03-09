import './contact.css'
import Client from '../../assets/Client.jpeg'
import Fb from '../../assets/Fb.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'
import linkin from '../../assets/linkin.png'

function Contact() {
  return (
    <section id="contactPage">
    <div id="clients">
        <h1 className="contactPageTitle">
            My Clients
        </h1>
        <p className="clientsDesc">
            I have worked with a variety of clients, from small businesses to large corporations.
        </p>
        <div className="clientImgs">
            <img src={Client} alt="client1" className='clientImg'/>
            <img src={Client} alt="client2" className='clientImg'/> 
            <img src={Client} alt="client3" className='clientImg'/>
        </div>
    </div>
    <div id="contact">
        <h1 className="contentPageTitle">Contact Me</h1>
        <span className="contentDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm">
            <input type="text" className='name' placeholder='Your Name'/>
            <input type="email" className='email' placeholder='Your Email'/>
            <textarea className="msg" name='message' rows="5"  placeholder='Your Message'></textarea>
            <button type='submit' value="send" className="submitBtn">Submit</button>

            <div className="links">
                <img src={Fb} className="link" alt="" />
                <img src={insta} className="link" alt="" />
                <img src={twitter} className="link" alt="" />
                <img src={linkin} className="link" alt="" />

            </div>
            </form>
    </div>
    </section>
  )
}

export default Contact
