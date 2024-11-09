import "./Header.scss";
import logo from "../../assets/logo/logo.png";
export default function Header() {
  return (
    <header>
      <section className="header-section">
        <img src={logo} alt="logo" />
        <ul>
          <li>Getting started</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Login</li>
        </ul>
      </section>
    </header>
  );
}
