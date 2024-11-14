import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
export default function Navbar({ title, children }) {
  const { setActiveIndex } = useContext(ThemeContext);
  let [name = "Getting started", secondName = ""] = title;
  return (
    <section className="main-section">
      <section className="navbar-section">
        <article className="navbar-container">
          <nav className="navbar-nav">
            <Link
              onClick={() => setActiveIndex(0)}
              className="navbar-cl"
              to={`/`}
            >
              {name}
            </Link>
            <p>-</p>
            <Link className="navbar-c2" to={`/${secondName.toLowerCase()}`}>
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
