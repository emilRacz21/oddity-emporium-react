import "./Contact.scss";
import Navbar from "../Navbar/Navbar";
import { contact, contactOpen } from "../../content";
export default function Contact() {
  return (
    <Navbar title={["Getting started", "Contact", "", "contact"]}>
      <article className="contact-container">
        <div className="contact-grid">
          <h2 className="contact-p">Personal Information:</h2>
          {contact.map((items, index) => {
            return (
              <span key={index}>
                <p>{items.title}</p>
                <div className="contact-information">
                  <img src={items.img} alt={items.alt} />
                  <p>{items.desc}</p>
                </div>
              </span>
            );
          })}
          <div className="contact-social-row">
            <h2>Open hours:</h2>
            <div className="contact-information">
              <img src={contactOpen.img} alt={contactOpen.alt} />
              <p>
                {contactOpen.titlea}
                <a>{contactOpen.titleb}</a>
              </p>
            </div>
          </div>
        </div>
        <section>
          <h2 className="contact-p">Send a message:</h2>
          <form className="contact-form">
            <label>Name</label>
            <input type="text" />
            <label>Phone number</label>
            <input type="text" />
            <label>E-mail</label>
            <input type="text" />
            <label>Input your message below</label>
            <textarea name="message"></textarea>
          </form>
          <button className="contact-btn">send now</button>
        </section>
      </article>
    </Navbar>
  );
}
