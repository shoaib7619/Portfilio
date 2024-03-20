import { useRef } from 'react';
import './contact.css';
import client from './clientData.json';
import socialMedia from './socialMedia.json';
import emailjs from '@emailjs/browser';

function Contact() {
    const imgSrc = `./assets/`;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fwslfer', 'template_8bmqwpu', form.current, {
            publicKey: 'HZvPMDgvYMKp7gwK4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

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
                    {client.map((c) => (
                        <img src={imgSrc+c.img} alt="client" className='clientImg' key={c.id}/>
                    ))}
                </div>
            </div>
            <div id="contact">
                <h1 className="contentPageTitle">Contact Me</h1>
                <span className="contentDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name="from_name"/>
                    <input type="email" className='email' placeholder='Your Email' name='email_id'/>
                    <textarea className="msg" name='message' rows="5"  placeholder='Your Message'></textarea>
                    <button type='submit' value="Send" className="submitBtn">Submit</button>

                    <div className="links">
                    {socialMedia.map((socialMedia) =>(
                        <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" key={socialMedia.id}>
                            <img src={imgSrc+socialMedia.img} alt="" className="link" />
                        </a>
                    ))}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
