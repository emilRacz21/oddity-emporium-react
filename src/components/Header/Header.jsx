import "./Header.scss";
import { header } from "../../content";
import { Link, useNavigate } from "react-router-dom";
const { logo } = header;
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";

export default function Header() {
  let navigate = useNavigate();
  const { activeIndex, setActiveIndex } = useContext(ThemeContext);

  return (
    <header>
      <section className="header-section">
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            setActiveIndex(0);
            navigate("/");
          }}
        />
        <div className="header-nav">
          <nav>
            {["Getting started", "Shop", "Contact", "About us", "Login"].map(
              (label, index) => (
                <Link
                  key={index}
                  className={`header-link ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  to={["/", "/shop", "/contact", "/about", "/login"][index]}
                >
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>
      </section>
    </header>
  );
}
