import Author from "./components/Author/Author";
import Collection from "./components/Collection/Collection";
import Header from "./components/Header/Header";
import WhyOddity from "./components/WhyOddity/WhyOddity";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ShopContainer from "./components/Shopp/ShopContainer/ShopContainer";
import Login from "./components/Login/Login";
import ThemeProvider from "../src/store/theme-context";
import FormProvider from "./store/form-context";
import LoginProvider from "./store/login-context";
import Account from "./components/Login/Account/Account";
import BasketProvider from "./store/basket-context";

function App() {
  return (
    <BasketProvider>
      <ThemeProvider>
        <FormProvider>
          <LoginProvider>
            <Router>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Author />
                      <Collection />
                      <WhyOddity />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<ShopContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
              </Routes>
              <Footer />
            </Router>
          </LoginProvider>
        </FormProvider>
      </ThemeProvider>
    </BasketProvider>
  );
}

export default App;
