import Navbar from "../Navbar/Navbar";
import fetchShopData from "../Api_/ShopApi";
import { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ShowModal from "../ShowModal/ShowModal";
import { deleteInvention } from "../Api_/ShopApi";
import add from "../../assets/svg/add.svg";
import "./Account.scss";
import ShopAddInvention from "../Shopp/ShopAddInvention/ShopAddInvention";
import { newInvention } from "../../content";
import { updateExistingInvention } from "../Api_/ShopApi";
export default function Account() {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState({ name: "", id: "" });
  const [addItem, setAddItem] = useState(false);
  const [newItems, setNewItems] = useState(newInvention);
  const [errorMessage, setErrorMessage] = useState("");

  let filteredData;
  useEffect(() => {
    fetchShopData((newData) => {
      setData(newData);
    }, <p className="loading-text">Added!</p>);
  }, []);

  data != undefined
    ? (filteredData = data.filter((item) => item.admin_added))
    : "";

  function handleDeleteInvention() {
    deleteInvention(setData, selectedIndex.id);
    setIsModalOpen(false);
  }

  function putExistingInvention(event) {
    event.preventDefault();
    updateExistingInvention(
      setData,
      selectedIndex.id,
      setErrorMessage,
      newItems
    );
    setAddItem(false);
    setNewItems(newInvention);
  }

  function handleUpdateInvention(event) {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      setNewItems((prev) => ({ ...prev, image: files[0] }));
    } else {
      setNewItems((prev) => ({ ...prev, [name]: value }));
    }
  }
  return (
    <Navbar title={["Getting started", "Account"]}>
      <ShowModal
        modalStatus={isModalOpen}
        modalDisable={setIsModalOpen}
        title="Delete invention"
        closeModal={setIsModalOpen}
      >
        <p>
          Are you sure you want to delete
          <a className="delete-text"> {selectedIndex.name}</a>
          <a>{`? You'll never see this again! it's a very long time...`}</a>
        </p>
        <div className="delete-btns">
          <button
            onClick={handleDeleteInvention}
            className="account-btn delete"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="account-btn update"
          >
            No
          </button>
        </div>
      </ShowModal>

      <ShowModal
        modalStatus={addItem}
        title={
          errorMessage !== "" ? errorMessage : `Update ${selectedIndex.name}`
        }
        modalDisable={setAddItem}
      >
        <ShopAddInvention
          newItems={newItems}
          errorMessage={errorMessage}
          addNewInvention={putExistingInvention}
          handleChangeInvention={handleUpdateInvention}
        />
      </ShowModal>
      {data == undefined ? (
        <LoadingAnimation />
      ) : filteredData.length == 0 ? (
        <section className="account-empty">
          <img src={add} alt="shop logo" />
          <h3>Add your first invention to edit or delete it!</h3>
        </section>
      ) : (
        filteredData.map((item, index) => {
          return (
            <section key={index} className="shop-all-content">
              <section className="shop-container">
                <img src={item.image} alt={item.name} />
                <section className="shop-items">
                  <section className="shop-section">
                    <section className="item-section-1">
                      <div>
                        <h2>{item.name}</h2>
                        <span>
                          <a>Description:</a>
                          <p>{item.description}</p>
                        </span>
                      </div>
                    </section>
                    <section className="item-section-2">
                      <button
                        onClick={() => {
                          setAddItem(true);
                          setSelectedIndex(() => {
                            return { ["name"]: item.name, ["id"]: item._id };
                          });
                        }}
                        className="account-btn update"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                          setSelectedIndex(() => {
                            return { ["name"]: item.name, ["id"]: item._id };
                          });
                          setIsModalOpen(true);
                        }}
                        className="account-btn delete"
                      >
                        Delete
                      </button>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          );
        })
      )}
    </Navbar>
  );
}
