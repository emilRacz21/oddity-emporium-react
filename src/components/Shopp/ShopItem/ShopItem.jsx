import ShopDetails from "../ShopDetails/ShopDetails";
import "./ShopItem.scss";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import RateStars from "../../RateStars/RateStars";
import { useState, useContext } from "react";
import { BasketContext } from "../../../store/basket-context";
import ShowModal from "../../ShowModal/ShowModal";
import { LoginContext } from "../../../store/login-context";
import { updateExistingInvention } from "../../Api_/ShopApi";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../store/theme-context";

export default function ShopItem({
  showDetails,
  selectedSectionId,
  index,
  item,
  handleShowDetails,
  stars,
  setData,
}) {
  const [buyContent, setBuyContent] = useState(false);
  const { isLogged } = useContext(LoginContext);
  const { setValue } = useContext(BasketContext);
  const navigate = useNavigate();
  const { setActiveIndex } = useContext(ThemeContext);
  return (
    <section className="shop-all-content">
      <ShowModal
        modalStatus={buyContent}
        modalDisable={setBuyContent}
        title={`You bought ${item.name}!`}
      >
        <p>
          If you want to know more details, please visit your e-mail. We sent
          confirmation of purchase there.
        </p>
      </ShowModal>
      <section className="shop-container">
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
                <RateStars rateMark={stars[index]}>
                  <a>{`Reviews (${item.reviews.length})`}</a>
                </RateStars>
              </div>
            </section>
            <section className="item-section-2">
              <div>
                <h2>
                  <a className="item-dolar">$</a>
                  {item.price}
                </h2>
                <span>
                  <a>Weight:</a>
                  <p>{item.weight} kg</p>
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
              <button
                onClick={() => {
                  if (isLogged) {
                    if (item.status > 0) {
                      const newStatus = item.status - 1;
                      setBuyContent(true);
                      setTimeout(() => {
                        setBuyContent(false);
                      }, 1000);

                      const updatedFields = { status: newStatus };
                      updateExistingInvention(
                        setData,
                        item._id,
                        <p></p>,
                        updatedFields
                      );
                    } else {
                      alert("No more items in stock!");
                    }
                  } else {
                    navigate("/login");
                    setActiveIndex(4);
                  }
                }}
                className={`shop-button-buy ${
                  isLogged ? `active` : `disabled`
                }`}
              >
                buy now
              </button>

              <button
                onClick={() => {
                  setValue((prev) => {
                    const currentItems = prev.items;
                    const newItems = currentItems + 1;
                    const currentValue = prev.value || 0;
                    const newValue = currentValue + item.price;
                    alert(`Added ${newItems} items to your basket`);
                    return { ...prev, items: newItems, value: newValue };
                  });
                }}
              >
                add to basket
              </button>
            </span>
          </nav>
        </section>
      </section>
      <DropdownMenu
        toggle={showDetails}
        selectedSectionId={selectedSectionId}
        index={index}
      >
        <ShopDetails data={item} setData={setData} />
      </DropdownMenu>
    </section>
  );
}
