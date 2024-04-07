import { useRef, useState } from 'react';
import './contact.css';
import client from './clientData.json';
import socialMedia from './socialMedia.json';
import emailjs from '@emailjs/browser';
import { Roller } from 'react-awesome-spinners';

function Contact() {
    const imgSrc = `./assets/`;
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Show loader when form is submitted

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
            }
          )
          .finally(() => {
            setLoading(false); // Hide loader when email is sent (success or failure)
          });
      };

    return (
        <section id="contactPage">
            {loading && (
                <div className="spinner-overlay">
                    <Roller />
                </div>
            )}
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
