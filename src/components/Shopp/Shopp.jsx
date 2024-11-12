import "./Shopp.scss";
import Navbar from "../Navbar/Navbar";
import ShopApi from "../Api_/ShopApi";
export default function Shopp() {
  ShopApi();
  return (
    <Navbar title={["Getting started", "Shop", "", "shop"]}>
      <section className="container">
        <h2>saaasa</h2>
      </section>
    </Navbar>
  );
}
