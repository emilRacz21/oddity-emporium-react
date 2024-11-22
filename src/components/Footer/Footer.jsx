import "./Footer.scss";
import { footer } from "../../content";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../store/login-context";
import ShowModal from "../ShowModal/ShowModal";
import { dialogContents } from "../../content";
import { ThemeContext } from "../../store/theme-context";
export default function Footer() {
  const { isLogged } = useContext(LoginContext);
  const { setActiveIndex } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  });
  function handleselectedQuestion(index) {
    setDialogContent(dialogContents[index]);
    setIsModalOpen(true);
  }
  return (
    <>
      <section className="footer-section">
        <ShowModal
          modalStatus={isModalOpen}
          modalDisable={setIsModalOpen}
          title={dialogContent.title}
          closeModal={setIsModalOpen}
        >
          <p>{dialogContent.description}</p>
        </ShowModal>
        <div className="footer-container">
          <div className="footer-grid-1">
            <div className="footer-grid-1-row">
              <img src={footer.logo} alt={footer.logoAlt} />
              <h4>{footer.titleAlt}</h4>
            </div>
            <p
              style={{
                margin: "1rem 0",
                cursor: "default",
                color: "white",
              }}
            >
              {footer.description}
            </p>
            <div className="footer-btn-grid">
              <Link
                className="footer-btn"
                to={"/login"}
                onClick={() => setActiveIndex(4)}
              >
                {isLogged ? "Account" : footer.button}
              </Link>
              <Link
                className="footer-btn-no-border"
                to={isLogged ? "/account" : "/about"}
                onClick={() => setActiveIndex(3)}
              >
                {footer.buttona}
              </Link>
            </div>
          </div>
          <div className="footer-grid-1">
            <h4>{footer.question}</h4>
            {footer.questions.map((items, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    handleselectedQuestion(index);
                  }}
                >
                  {items}
                </p>
              );
            })}
          </div>
          <div className="footer-grid-1">
            <h4>{footer.shopTitle}</h4>
            {footer.shop.map((items, index) => {
              return (
                <Link to={items.href} key={index}>
                  {items.name}
                </Link>
              );
            })}
          </div>

          <div className="footer-grid-1">
            <h4>{footer.conc}</h4>
            <Link
              className="footer-conc"
              to={"/contact"}
              onClick={() => setActiveIndex(2)}
            >
              {footer.contactdesc}
            </Link>
            <div className="footer-contact-media">
              {footer.images.map((items, index) => {
                return (
                  <a key={index} href={items.href}>
                    <img src={items.img} alt={items.alt} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="footer-author">
        <p>{footer.footerAuthor}</p>
        <a href="https://portfolio-emilr.netlify.app/">
          <p>{footer.footerCreated}</p>
        </a>
      </section>
    </>
  );
}
