import "./Login.scss";
import Navbar from "../Navbar/Navbar";
import { login } from "../../content";
export default function Login() {
  return (
    <Navbar title={["Getting started", "Login"]}>
      <section className="login-container">
        <div className="login-img">
          <img src={login.img} alt={login.alt} />
        </div>
        <section className="login-section">
          <h2>{login.title}</h2>
          <form>
            <label>{login.userLabel.title}</label>
            <input type={login.userLabel.type} />
            <label>{login.passwordLabel.title}</label>
            <input type={login.passwordLabel.type} />
          </form>
          <section className="login-button">
            <p>{login.desc}</p>
            <button>{login.button}</button>
          </section>
        </section>
      </section>
    </Navbar>
  );
}
