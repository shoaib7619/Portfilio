import './contact.css';
import client from './clientData.json';
import socialMedia from './socialMedia.json';

function Contact() {
    const imgSrc = `./assets/`;

    return (
        <section id="contactPage">
            <div id="clients">
                <h3 className="contactPageTitle">
                    My Clients
                </h3>
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
                <form className="contactForm">
                    <input type="text" className='name' placeholder='Your Name'/>
                    <input type="email" className='email' placeholder='Your Email'/>
                    <textarea className="msg" name='message' rows="5"  placeholder='Your Message'></textarea>
                    <button type='submit' value="send" className="submitBtn">Submit</button>

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
