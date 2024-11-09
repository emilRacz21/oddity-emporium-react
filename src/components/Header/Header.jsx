import "./Header.scss";
import { header } from "../../content";
const { logo, navBtn } = header;
export default function Header() {
  return (
    <header>
      <section className="header-section">
        <img src={logo} alt="logo" />
        {navBtn.map((items, index) => {
          return (
            <ul key={index}>
              <li>{items}</li>
            </ul>
          );
        })}
      </section>
    </header>
  );
}
