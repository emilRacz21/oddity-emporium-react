import "./Shopp.scss";
import Navbar from "../Navbar/Navbar";
import ShopApi from "../Api_/ShopApi";
import { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export default function Shopp() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [responseText, setResponseText] = useState();
  const [selectedSectionId, setSelectedSectionId] = useState(null);

  ShopApi((newData) => {
    setData(newData);
    setAllData(newData);
    setResponseText(<p className="loading-text error">Nothing found!</p>);
  }, setResponseText);

  const handleShowDetails = (index) => {
    setShowDetails((value) => !value);
    setSelectedSectionId(index);
  };

  function handleSearchItems(event) {
    const text = event.target.value.toLowerCase();

    if (text === "" || text === "all categories") {
      setData(allData);
    } else {
      const filteredData = allData.filter(
        (item) =>
          item.name.toLowerCase().includes(text) ||
          item.category.toLowerCase().includes(text)
      );
      setData(filteredData);
    }
  }
  const uniqueCategories = [...new Set(allData.map((items) => items.category))];
  return (
    <Navbar title={["Getting started", "Shop", "", "shop"]}>
      <section className="shop-searchbox">
        <input
          type="search"
          onChange={handleSearchItems}
          placeholder="Search items..."
        />
        <select onChange={handleSearchItems}>
          <option value="All categories">All categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </section>
      {data.length === 0 ? (
        <LoadingAnimation responseText={responseText} />
      ) : (
        data.map((item, index) => (
          <section key={index} className="shop-all-content">
            <section
              className={`shop-container ${
                showDetails && selectedSectionId === index ? "" : "disabled"
              }`}
            >
              <img src={item.image} alt={item.name} />
              <section className="shop-items">
                <section className="shop-section">
                  <section className="item-section-1">
                    <div>
                      <h2>{item.name}</h2>
                      <span>
                        <a>Category:</a>
                        <p>{item.category}</p>
                      </span>
                      <span>
                        <a>Dimensions:</a>
                        <p>{item.dimensions}</p>
                      </span>
                    </div>
                  </section>
                  <section className="item-section-2">
                    <div>
                      <h2>{item.price}</h2>
                      <span>
                        <a>Weight:</a>
                        <p>{item.weight}</p>
                      </span>
                      <span>
                        <a>Status:</a>
                        <p
                          className={`shop-item-status ${
                            item.status > 20 ? "" : "small"
                          }`}
                        >
                          {item.status > 122
                            ? `Quite a large amount`
                            : `${item.status} pieces left`}
                        </p>
                      </span>
                    </div>
                  </section>
                </section>
                <nav className="shop-buttons">
                  <span
                    className="shop-buttons-center add"
                    onClick={() => handleShowDetails(index)}
                  >
                    <h2>show details</h2>
                    <div
                      className={`shop-square-button ${
                        showDetails && selectedSectionId === index
                          ? "active"
                          : "disabled"
                      }`}
                    ></div>
                  </span>
                  <span className="shop-buttons-center">
                    <button>buy now</button>
                    <button>add to basket</button>
                  </span>
                </nav>
              </section>
            </section>
            <section
              className={`shop-details ${
                showDetails && selectedSectionId === index ? "active" : ""
              }`}
            >
              <h2>Target audience:</h2>
              <p>{item.target_audience}</p>
              <h2>Power source:</h2>
              <p>{item.power_source}</p>
              <h2>Created by:</h2>
              <p>{item.creator}</p>
              <h2>Uses:</h2>
              <p>{item.uses}</p>
            </section>
          </section>
        ))
      )}
    </Navbar>
  );
}
