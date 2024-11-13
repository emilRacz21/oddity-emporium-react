import "./Shopp.scss";
import Navbar from "../Navbar/Navbar";
import ShopApi from "../Api_/ShopApi";
import { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
export default function Shopp() {
  const [data, setData] = useState([]);
  const [responseText, setResponseText] = useState();
  ShopApi(setData, setResponseText);
  return (
    <Navbar title={["Getting started", "Shop", "", "shop"]}>
      {data.length == 0 ? (
        <LoadingAnimation responseText={responseText} />
      ) : (
        data.map((items, index) => {
          return (
            <section key={index} className="shop-container">
              <img src={items.image} alt="" />
              <section className="shop-items">
                <section className="shop-section">
                  <section className="item-section-1">
                    <div>
                      <h2>{items.name}</h2>
                      <span>
                        <a>Category:</a>
                        <p>{items.category}</p>
                      </span>
                      <span>
                        <a>Dimensions:</a>
                        <p>{items.dimensions}</p>
                      </span>
                    </div>
                  </section>
                  <section className="item-section-2">
                    <div>
                      <h2>{items.price}</h2>
                      <span>
                        <a>Weight:</a>
                        <p>{items.weight}</p>
                      </span>
                      <span>
                        <a>Status:</a>
                        <p>{items.status}</p>
                      </span>
                    </div>
                  </section>
                </section>
                <nav className="shop-buttons">
                  <span className="shop-buttons-center add">
                    <h2>show details</h2>
                    <div></div>
                  </span>
                  <span className="shop-buttons-center">
                    <button>buy now</button>
                    <button>add to basket</button>
                  </span>
                </nav>
              </section>
            </section>
          );
        })
      )}
    </Navbar>
  );
}
