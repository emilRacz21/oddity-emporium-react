import "./Contact.scss";
import Navbar from "../Navbar/Navbar";
import { contact, contactForm } from "../../content";
import FormApi from "../Api_/FormApi";
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
        </div>
        <section>
          <h2 className="contact-p">Send a message:</h2>
          <form className="contact-form" onSubmit={FormApi}>
            {contactForm.map((items, index) => {
              return (
                <span className="contact-form" key={index}>
                  <label>{items.title}</label>
                  <input type={items.type} name={items.name} required />
                </span>
              );
            })}

            <label>Input your message below</label>
            <textarea name="Message" required></textarea>

            <nav className="contact-center">
              <button type="submit" className="contact-btn">
                send now
              </button>
            </nav>
          </form>
        </section>
      </article>
    </Navbar>
  );
}
