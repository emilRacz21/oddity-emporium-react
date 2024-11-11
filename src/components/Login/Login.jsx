import "./Login.scss";
import key from "../../assets/svg/key.svg";
import Navbar from "../Navbar/Navbar";
export default function Login() {
  return (
    <Navbar title={["Getting started", "Login", "", "login"]}>
      <section className="shop-container">
        <div className="login-img">
          <img src={key} alt="Website logo" />
        </div>

        <section className="shop-section">
          <h2>Please log in to your account!</h2>
          <form>
            <label>Your username</label>
            <input type="text" />
            <label>Your username</label>
            <input type="text" />
          </form>

          <section className="shop-button">
            <p>*All labels are requrired</p>
            <button>Log in</button>
          </section>
        </section>
      </section>
    </Navbar>
  );
}
