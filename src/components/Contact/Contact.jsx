import "./Contact.scss";
import Navbar from "../Navbar/Navbar";
import { contact, contactForm } from "../../content";
import FormApi from "../Api_/FormApi";
import { FormContext } from "../../store/form-context";
import { useContext } from "react";

export default function Contact() {
  const { message, setMessage, inputs, setInputs, obj } =
    useContext(FormContext);

  const handleSubmit = (e) => {
    FormApi(e, setMessage, setInputs, obj);
  };

  return (
    <Navbar title={["Getting started", "Contact", "", "contact"]}>
      <article className="contact-container">
        <div className="contact-grid">
          <h2 className="contact-p">Personal Information:</h2>
          {contact.map((items, index) => (
            <span key={index}>
              <p>{items.title}</p>
              <div className="contact-information">
                <img src={items.img} alt={items.alt} />
                <p>{items.desc}</p>
              </div>
            </span>
          ))}
        </div>
        <section>
          <h2 className="contact-p">Send a message:</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            {contactForm.map((items, index) => (
              <span className="contact-form" key={index}>
                <label>{items.title}</label>
                <input
                  value={inputs[index]}
                  onChange={(e) => {
                    setInputs((prev) => {
                      return { ...prev, [index]: e.target.value };
                    });
                  }}
                  type={items.type}
                  name={items.name}
                  required
                />
              </span>
            ))}
            <label>Input your message below</label>
            <textarea
              name="Message"
              value={inputs[3]}
              onChange={(e) => {
                setInputs((prev) => {
                  return { ...prev, [3]: e.target.value };
                });
              }}
              required
            ></textarea>
            <nav className="contact-center">
              {message}
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
