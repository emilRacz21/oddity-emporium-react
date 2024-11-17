import "./ShopAddInvention.scss";
import { inventObj } from "../../../content";
export default function ShopAddInvention({
  newItems,
  errorMessage,
  addNewInvention,
  handleChangeInvention,
}) {
  const inventionObjects = inventObj(newItems);
  function getFieldClass(value) {
    return errorMessage !== "" && value === "" ? "active" : "";
  }

  return (
    <form className="shop-invention-add-form">
      <div>
        {inventionObjects[0].map((item, index) => {
          return (
            <div key={index}>
              <label className={getFieldClass(item.field)}>
                {item.title} :
              </label>
              {item.name == "description" ? (
                <textarea
                  className={getFieldClass(item.field)}
                  name={item.name}
                  value={newItems.description}
                  onChange={handleChangeInvention}
                ></textarea>
              ) : (
                <input
                  className={getFieldClass(item.field)}
                  name={item.name}
                  value={item.field}
                  onChange={handleChangeInvention}
                  min={0}
                  type={
                    item.name == "weight" || item.name == "price"
                      ? "number"
                      : "text"
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        {inventionObjects[1].map((item, index) => {
          return (
            <div key={index}>
              <label className={getFieldClass(item.field)}>
                {item.title} :
              </label>
              <input
                className={getFieldClass(item.field)}
                value={item.field}
                name={item.name}
                onChange={handleChangeInvention}
                min={1}
                type={item.name == "status" ? "number" : "text"}
              />
            </div>
          );
        })}
        <span>
          <button onClick={addNewInvention}>Add invention</button>
        </span>
        <p className="shop-invention-text">
          <a>*</a>
          If you add your invention, it will appear at the bottom of the page!
        </p>
      </div>
    </form>
  );
}
