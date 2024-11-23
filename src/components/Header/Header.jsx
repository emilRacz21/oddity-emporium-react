// Import
import "./Header.scss";
import { header } from "../../content";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../store/theme-context";
import { LoginContext } from "../../store/login-context";
import { BasketContext } from "../../store/basket-context";
export default function Header() {
  // React states
  let navigate = useNavigate();
  const animateRef = useRef(false);
  const { activeIndex, setActiveIndex } = useContext(ThemeContext);
  const { isLogged } = useContext(LoginContext);
  const [showElement, setShowElement] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { value } = useContext(BasketContext);
  const [menu, setMenu] = useState(false);

  //useEffect for hide and show animation for shop
  useEffect(() => {
    if (animateRef.current) {
      if (showElement) {
        animateRef.current.classList.add("active");
        animateRef.current.classList.remove("disabled");
      } else {
        animateRef.current.classList.add("disabled");
        animateRef.current.classList.remove("active");
        const timer = setTimeout(() => setIsVisible(false), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [showElement]);

  //JSX code
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
        <div
          onClick={() => {
            setMenu((value) => !value);
          }}
          className="mobile-burger"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`header-nav ${menu ? "active" : "disabled"}`}>
          <nav>
            {[
              "Getting started",
              "Shop",
              "Contact",
              "About us",
              `${isLogged ? "Account" : "Login"}`,
            ].map((label, index) => {
              return (
                <Link
                  onMouseEnter={
                    index === 1
                      ? () => {
                          setIsVisible(true);
                          setShowElement(true);
                        }
                      : null
                  }
                  key={index}
                  className={`header-link ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setShowElement(false);
                    setActiveIndex(index);
                  }}
                  to={
                    [
                      "/",
                      "/shop",
                      "/contact",
                      "/about",
                      `${isLogged ? "/account" : "/login"}`,
                    ][index]
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          {isVisible && (
            <section
              ref={animateRef}
              className="header-shop-details"
              onMouseLeave={() => setShowElement(false)}
            >
              <div>
                <span className="basket-section">
                  <p>
                    {value.value.toFixed(2)} <a>$</a>
                  </p>
                </span>
                <span className="basket-details">
                  <h3>
                    {value.items == 0
                      ? "Your basket is empty!"
                      : `You added ${value.items} items to basket.`}
                  </h3>
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
