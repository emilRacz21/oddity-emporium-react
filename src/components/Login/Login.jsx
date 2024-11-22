import "./Login.scss";
import Navbar from "../Navbar/Navbar";
import { login } from "../../content";
import { useContext, useState } from "react";
import { LoginContext } from "../../store/login-context";
import { useNavigate } from "react-router-dom";

const loginObj = {
  login: "",
  password: "",
};

export default function Login() {
  const [passwd, setPasswd] = useState({
    login: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWD,
  });
  const { setIsLogged } = useContext(LoginContext);
  const [loginText, setLoginText] = useState(true);
  const navigate = useNavigate(); // Hook nawigacji

  function handleLoginAccount() {
    const yourLog = import.meta.env.VITE_USERNAME;
    const yourPasswd = import.meta.env.VITE_PASSWD;
    const { login, password } = passwd;

    if (login === yourLog && password === yourPasswd) {
      setPasswd(loginObj);
      setIsLogged(true);
      setLoginText(true);
      navigate("/account");
    } else {
      setLoginText(false);
      setTimeout(() => {
        setLoginText(true);
      }, 2000);
    }
  }

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
            <input
              value={passwd.login}
              onChange={(e) => {
                setPasswd((prev) => {
                  return { ...prev, ["login"]: e.target.value };
                });
              }}
              type={login.userLabel.type}
            />
            <label>{login.passwordLabel.title}</label>
            <input
              value={passwd.password}
              onChange={(e) => {
                setPasswd((prev) => {
                  return { ...prev, ["password"]: e.target.value };
                });
              }}
              type={login.passwordLabel.type}
            />
          </form>
          <section className="login-button">
            <p className={!loginText ? "red-login" : ""}>
              {loginText ? login.desc : login.descA}
            </p>
            <button onClick={handleLoginAccount}>{login.button}</button>
          </section>
        </section>
      </section>
    </Navbar>
  );
}
