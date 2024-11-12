import "./Footer.scss";
import { footer } from "../../content";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ShowModal from "../ShowModal/ShowModal";
import { dialogContents } from "../../content";
import { ThemeContext } from "../../store/theme-context";
export default function Footer() {
  const { setActiveIndex } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  });
  function handleselectedQuestion(index) {
    setDialogContent(dialogContents[index]);
    document.getElementById("root").style.filter = "blur(26px)";
    setIsModalOpen(true);
  }
  return (
    <>
      <section className="footer-section">
        <ShowModal
          dialogContent={dialogContent}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            document.getElementById("root").style.filter = "blur(0px)";
          }}
        />
        <div className="footer-container">
          <div className="footer-grid-1">
            <div className="footer-grid-1-row">
              <img src={footer.logo} alt={footer.logoAlt} />
              <h4>{footer.titleAlt}</h4>
            </div>
            <p style={{ margin: "1rem 0" }}>{footer.description}</p>
            <div className="footer-btn-grid">
              <Link
                className="footer-btn"
                to={"/login"}
                onClick={() => setActiveIndex(4)}
              >
                {footer.button}
              </Link>
              <Link
                className="footer-btn-no-border"
                to={"/about"}
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
              return <p key={index}>{items}</p>;
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
                return <img key={index} src={items.img} alt={items.alt} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="footer-author">
        <p>{footer.footerAuthor}</p>
        <p>{footer.footerCreated}</p>
      </section>
    </>
  );
}
