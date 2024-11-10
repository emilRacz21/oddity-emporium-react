/* eslint-disable react/prop-types */
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar({ title }) {
  let [name = "Getting started", secondName, navFirst = "", navSecond] = title;
  return (
    <section className="about-section">
      <article className="about-container">
        <nav className="about-nav">
          <Link className="navbar-cl" to={`/${navFirst}`}>
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
  );
}
