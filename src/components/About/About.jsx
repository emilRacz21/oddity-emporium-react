import "./About.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import { aboutCite, aboutSections } from "../../content";
import { aboutContent } from "../../content";
export default function About() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Navbar title={["Getting started", "About us", "", "about"]}>
      <section className="container">
        <h2 className="container-h2">{aboutContent.title}</h2>
        <p className="container-p">{aboutContent.content}</p>
        <img src={aboutContent.img} alt={aboutContent.alt} />
        <div className="about-grid">
          {aboutSections.map((item, index) => (
            <div key={index} className={`about-item ${item.className}`}>
              <h2 className="about-h2">{item.title}</h2>
              <p className="about-p">{item.content}</p>
            </div>
          ))}
        </div>
        <Slider className="about-slider" {...settings}>
          {aboutCite.map((item, index) => (
            <section key={index}>
              <h3 className="about-cite">{`"`}</h3>
              <p className="about-q">{item.content}</p>
              <h2 className="about-center-h2">{item.author}</h2>
            </section>
          ))}
        </Slider>
      </section>
    </Navbar>
  );
}
