import { collection } from "../../content";
import "./Collection.scss";
export default function Collection() {
  return (
    <section className="collection-section">
      <article className="collection-article">
        <p className="collection-offer">special</p>
        <h2>Our Curated Collection...</h2>
        <p>
          At <a>Oddity Emporium</a>, we specialize in one-of-a-kind, surreal
          items that challenge the very fabric of reality. Whether you re a
          collector of the strange, an adventurer in search of the unknown, or
          simply curious about the unexplainable, our <a>store</a> offers a
          variety of unique categories
        </p>
      </article>
      <article className="collection-items">
        {collection.map((items, index) => {
          return (
            <div key={index} className="collection-grid">
              <div className="collection-items-in-row">
                <img src={items.img} alt={items.alt} />
                <h2>{items.title}</h2>
              </div>
              <p>{items.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}
