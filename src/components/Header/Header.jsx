import "./Header.scss";
import { header } from "../../content";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../ThemeProvider";
export default function Header() {
  let navigate = useNavigate();
  const intervalRef = useRef(null);
  const { activeIndex, setActiveIndex } = useContext(ThemeContext);
  const [showElement, setShowElement] = useState(false);

  function handleVisibleEl() {
    setShowElement(true);
    clearInterval(intervalRef.current);
  }

  function handleLeaveEvent() {
    document.getElementsByClassName("header-shop-details")[0].style.animation =
      "close-details 0.3s";
    intervalRef.current = setInterval(() => {
      setShowElement(false);
    }, 300);
  }

  return (
    <header>
      <section className="header-section">
        <img
          className="header-logo"
          src={header.logo}
          alt="logo"
          onClick={() => {
            setActiveIndex(0);
            navigate("/");
          }}
        />
        <div className="header-nav">
          <nav>
            {["Getting started", "Shop", "Contact", "About us", "Login"].map(
              (label, index) => {
                return (
                  <Link
                    onMouseEnter={index === 1 ? handleVisibleEl : null}
                    key={index}
                    className={`header-link ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setShowElement(false);
                      setActiveIndex(index);
                    }}
                    to={["/", "/shop", "/contact", "/about", "/login"][index]}
                  >
                    {label}
                  </Link>
                );
              }
            )}
          </nav>
          {showElement && (
            <section
              onMouseLeave={handleLeaveEvent}
              className={"header-shop-details"}
            >
              <div>
                <span className="basket-section">
                  <p>
                    0.00 <a>$</a>
                  </p>
                </span>
                <span className="basket-details">
                  <h3>Your basket is empty!</h3>
                  <p>
                    Add items to your cart and buy them quickly and
                    conveniently.
                  </p>
                </span>
              </div>
            </section>
          )}
        </div>
      </section>
    </header>
  );
}
