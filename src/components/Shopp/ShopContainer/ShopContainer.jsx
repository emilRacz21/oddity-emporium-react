import "./ShopContainer.scss";
import Navbar from "../../Navbar/Navbar";
import fetchShopData from "../../Api_/ShopApi";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";
import ShopItem from "../ShopItem/ShopItem";
import ShowModal from "../../ShowModal/ShowModal";
import { handleAddInvention } from "../../Api_/ShopApi";

const newInvention = {
  name: "",
  description: "",
  uses: "",
  creator: "",
  image: "",
  date_of_invention: "",
  patent_number: "",
  price: "",
  weight: "",
  dimensions: "",
  power_source: "",
  operating_time: "",
  material: "",
  status: 0,
  reviews: [],
  category: "",
  target_audience: "",
};

export default function ShopContainer() {
  const [data, setData] = useState([]);
  const [stars, setStars] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [responseText, setResponseText] = useState();
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [addItem, setAddItem] = useState(false);
  const [newItems, setNewItems] = useState(newInvention);

  function handleChangeInvention(event) {
    setNewItems((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  function addNewInvention(event) {
    event.preventDefault();
    handleAddInvention(newItems, setData);
    setNewItems(newInvention);
  }
  useEffect(() => {
    fetchShopData((newData) => {
      setData(newData);
      setAllData(newData);
      setResponseText(<p className="loading-text error">Nothing found!</p>);
    }, setResponseText);
  }, []);

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
      <ShowModal
        modalStatus={addItem}
        title="Add a new invention"
        modalDisable={setAddItem}
      >
        <form className="shop-invention-add-form">
          <div>
            <label>Your name:</label>
            <input
              name="creator"
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Invention name:</label>
            <input
              name="name"
              value={newItems.name}
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Uses form:</label>
            <input
              name="uses"
              value={newItems.uses}
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Price:</label>
            <input
              name="price"
              value={newItems.price}
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Weight:</label>
            <input
              name="weight"
              value={newItems.weight}
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={newItems.description}
              onChange={handleChangeInvention}
            ></textarea>
          </div>
          <hr />
          <div>
            <label>Dimensions:</label>
            <input
              value={newItems.dimensions}
              name="dimensions"
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Power source:</label>
            <input
              value={newItems.power_source}
              name="power_source"
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Material:</label>
            <input
              value={newItems.material}
              name="material"
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Avaiable:</label>
            <input
              value={newItems.status}
              name="status"
              onChange={handleChangeInvention}
              type="number"
            />
            <label>Category:</label>
            <input
              value={newItems.category}
              name="category"
              onChange={handleChangeInvention}
              type="text"
            />
            <label>Target Audience:</label>
            <input
              value={newItems.target_audience}
              name="target_audience"
              onChange={handleChangeInvention}
              type="text"
            />

            <span>
              <button onClick={addNewInvention}>Add invention</button>
            </span>
            <p className="shop-invention-text">
              <a>*</a>If you add your invention, it will appear at the bottom of
              page!
            </p>
          </div>
        </form>
      </ShowModal>
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
        <button
          onClick={() => setAddItem(true)}
          className="shop-invention-button-add"
        >
          Add +
        </button>
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
