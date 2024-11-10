import { oddity } from "../../content";
import "./WhyOddity.scss";
export default function WhyOddity() {
  return (
    <section className="oddity-section">
      <div className="oddity-container">
        <article className="oddity-adventages">
          <p className="oddity-extra">extra</p>
          <h2>Why Shop at Oddity Emporium?</h2>
          {oddity.map((items, index) => {
            const { img, alt, title, description } = items;
            return (
              <div key={index} className="oddity-item">
                <img src={img} alt={alt} />
                <section className="oddity-description">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </section>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}