import "./Header.scss";
import { header } from "../../content";
import { Link, useNavigate } from "react-router-dom";
const { logo } = header;

export default function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <section className="header-section">
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="header-nav">
          <nav>
            <Link className="header-link" to="/">
              Getting started
            </Link>
            <Link className="header-link" to="/shop">
              Shop
            </Link>
            <Link className="header-link" to="/contact">
              Contact
            </Link>
            <Link className="header-link" to="/about">
              About us
            </Link>
            <Link className="header-link" to="/login">
              Login
            </Link>
          </nav>
        </div>
      </section>
    </header>
  );
}
