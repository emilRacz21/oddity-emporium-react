import { collection, collecionOffer } from "../../content";
import "./Collection.scss";
export default function Collection() {
  return (
    <section className="collection-section">
      <article className="collection-article">
        <p className="collection-offer">special</p>
        <h2>{collecionOffer.title}</h2>
        <p>
          {collecionOffer.desca}
          <a>{collecionOffer.descb}</a>
          {collecionOffer.descc}
          <a>{collecionOffer.descd}</a> {collecionOffer.desce}
        </p>
      </article>
      <article className="collection-items">
        {collection.map((items, index) => {
          return (
            <div key={index} className="collection-grid">
              <div className="collection-items-in-row">
                <img src={items.img} alt={items.alt} />
                <h3>{items.title}</h3>
              </div>
              <p>{items.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
