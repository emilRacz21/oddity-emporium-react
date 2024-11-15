import ShopDetails from "../ShopDetails/ShopDetails";
import "./ShopItem.scss";
import starsDisabled from "../../../assets/svg/star-disabled.svg";
import starsEnabled from "../../../assets/svg/star-active.svg";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
export default function ShopItem({
  showDetails,
  selectedSectionId,
  index,
  item,
  handleShowDetails,
  stars,
  setData,
}) {
  return (
    <section className="shop-all-content">
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
                <div className="shop-rate-stars">
                  <div>
                    {Array.from({ length: 5 }).map((_, starIndex) => {
                      return (
                        <img
                          key={starIndex}
                          src={
                            starIndex < stars[index]
                              ? starsEnabled
                              : starsDisabled
                          }
                          alt="Star icon"
                        />
                      );
                    })}
                  </div>
                  <a>{`Reviews (${item.reviews.length})`}</a>
                </div>
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
