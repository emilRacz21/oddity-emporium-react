import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
export default function Navbar({ title, children }) {
  const { setActiveIndex } = useContext(ThemeContext);
  let [name = "Getting started", secondName, navFirst = "", navSecond] = title;
  return (
    <section className="main-section">
      <section className="about-section">
        <article className="about-container">
          <nav className="about-nav">
            <Link
              onClick={() => setActiveIndex(0)}
              className="navbar-cl"
              to={`/${navFirst}`}
            >
              {name}
            </Link>
            <p>-</p>
            <Link className="navbar-c2" to={`/${navSecond}`}>
              {secondName}
            </Link>
          </nav>
          <h2>{secondName}</h2>
        </article>
      </section>
      {children}
    </section>
  );
}
