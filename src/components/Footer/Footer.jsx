import "./Footer.scss";
import { footer } from "../../content";
export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-grid-1">
            <div className="footer-grid-1-row">
              <img src={footer.logo} alt={footer.logoAlt} />
              <h2>{footer.titleAlt}</h2>
            </div>
            <p style={{ margin: "1rem 0" }}>{footer.description}</p>
            <div className="footer-btn-grid">
              <button className="footer-btn">{footer.button}</button>
              <button className="footer-btn-no-border">{footer.buttona}</button>
            </div>
          </div>
          <div className="footer-grid-1">
            <h2>{footer.question}</h2>
            {footer.questions.map((items, index) => {
              return <p key={index}>{items}</p>;
            })}
          </div>
          <div className="footer-grid-1">
            <h2>{footer.shopTitle}</h2>
            {footer.shop.map((items, index) => {
              return <p key={index}>{items}</p>;
            })}
          </div>

          <div className="footer-grid-1">
            <h2>{footer.conc}</h2>
            <p>{footer.contactdesc}</p>
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
