import "./ShopContainer.scss";
import Navbar from "../../Navbar/Navbar";
import fetchShopData from "../../Api_/ShopApi";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../store/theme-context";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";
import ShopItem from "../ShopItem/ShopItem";
import ShowModal from "../../ShowModal/ShowModal";
import { handleAddInvention } from "../../Api_/ShopApi";
import ShopAddInvention from "../ShopAddInvention/ShopAddInvention";
import { newInvention } from "../../../content";
import { LoginContext } from "../../../store/login-context";
export default function ShopContainer() {
  const [data, setData] = useState([]);
  const [stars, setStars] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [responseText, setResponseText] = useState();
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [addItem, setAddItem] = useState(false);
  const [newItems, setNewItems] = useState(newInvention);
  const [errorMessage, setErrorMessage] = useState("");
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  const { setActiveIndex } = useContext(ThemeContext);
  function handleChangeInvention(event) {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      setNewItems((prev) => ({ ...prev, image: files[0] }));
    } else {
      setNewItems((prev) => ({ ...prev, [name]: value }));
    }
  }

  function addNewInvention(event) {
    event.preventDefault();
    handleAddInvention(newItems, setData, setErrorMessage);
    setTimeout(() => setErrorMessage(""), 5000);
    if (!Object.values(newItems).includes("") && errorMessage === "") {
      setAddItem(false);
      setNewItems(newInvention);
    }
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
        title={errorMessage !== "" ? errorMessage : `Add a new Invention`}
        modalDisable={setAddItem}
      >
        <ShopAddInvention
          newItems={newItems}
          errorMessage={errorMessage}
          addNewInvention={addNewInvention}
          handleChangeInvention={handleChangeInvention}
        />
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
          onClick={() => {
            if (isLogged) {
              setAddItem(true);
            } else {
              setActiveIndex(4);
              navigate("/login");
            }
          }}
          className={`shop-invention-button-add ${
            isLogged ? `active` : `disabled`
          }`}
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
