import "./ShopContainer.scss";
import Navbar from "../../Navbar/Navbar";
import ShopApi from "../../Api_/ShopApi";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";
import ShopItem from "../ShopItem/ShopItem";
export default function ShopContainer() {
  const [data, setData] = useState([]);
  const [stars, setStars] = useState([]);
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

  useEffect(() => {
    const calculatedStars = data.map((item) => {
      const totalSum = item.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return Math.round(totalSum / item.reviews.length);
    });
    setStars(calculatedStars);
  }, [data]);

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
    setShowDetails(false);
  }
  document
    .querySelectorAll(".details-row")
    .forEach(
      (ev) =>
        (ev.className = `details-row ${
          Number(ev.id) % 2 == 0 ? "active" : "default"
        }`)
    );

  const uniqueCategories = [...new Set(allData.map((items) => items.category))];
  return (
    <Navbar title={["Getting started", "Shop"]}>
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
          <ShopItem
            key={index}
            showDetails={showDetails}
            selectedSectionId={selectedSectionId}
            index={index}
            item={item}
            setData={setData}
            handleShowDetails={handleShowDetails}
            stars={stars}
          />
        ))
      )}
    </Navbar>
  );
}
