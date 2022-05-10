import "./contact.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/ishan.sinha.564"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            Facebook <span>Ishan Sinha</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=9643643376&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+91 9643643376</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/accounts/login/?next=/ishansinhaa/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>ishansinhaa</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
