// Import
import "./Header.scss";
import { header } from "../../content";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../store/theme-context";

export default function Header() {
  // React states
  let navigate = useNavigate();
  const animateRef = useRef(false);
  const { activeIndex, setActiveIndex } = useContext(ThemeContext);
  const [showElement, setShowElement] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="header-nav">
          <nav>
            {["Getting started", "Shop", "Contact", "About us", "Login"].map(
              (label, index) => {
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
                    to={["/", "/shop", "/contact", "/about", "/login"][index]}
                  >
                    {label}
                  </Link>
                );
              }
            )}
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
