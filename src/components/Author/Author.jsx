import "./Author.scss";
import { author } from "../../content";
import { Link } from "react-router-dom";
export default function Author() {
  return (
    <>
      <section className="author-section">
        <article className="author-article">
          <div className="author-title">
            <p>{author.title}</p>
            <h1>
              <a>{author.titlea}</a> {author.titleb}
            </h1>
          </div>
          <div className="author-desc">
            <h2>{author.titleDesc}</h2>
            <p>
              {author.desca}
              <a>{author.descb}</a>
              {author.descc}
              <a>{author.descd}</a>
              {author.desce}
              <a>{author.descf}</a>
              {author.descg}
            </p>
            <div className="author-btns">
              <Link className="author-button-shop" to="/shop">
                {author.buttona}
              </Link>
              <Link className="author-button-about" to="/about">
                {author.buttonb}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
