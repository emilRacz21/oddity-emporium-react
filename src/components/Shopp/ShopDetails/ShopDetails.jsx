import "./ShopDetails.scss";
import { shopParameters } from "../../../content";
export default function ShopDetails({ item }) {
  const shopParams = shopParameters(item);
  return (
    <section>
      <h2 className="details-text">Parameters</h2>
      <section className="details-flex">
        {shopParams.map((items, index) => {
          return (
            <div id={index} key={index} className="details-row">
              <h3>{`${items.title}:`}</h3>
              <p>{items.desc}</p>
            </div>
          );
        })}
      </section>
      <section className="shop-desc">
        <h2 className="details-text">Description</h2>
        <p>{item.description}</p>
      </section>
      <section className="shop-desc">
        <h2 className="details-text">Target audience</h2>
        <p>{item.target_audience}</p>
      </section>
    </section>
  );
}
