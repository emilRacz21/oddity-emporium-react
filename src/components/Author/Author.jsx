import "./Author.scss";
export default function Author() {
  return (
    <>
      <section className="author-section">
        <article className="author-article">
          <div className="author-title">
            <p>Welcome to...</p>
            <h1>
              <a>Oddity</a> Emporium
            </h1>
          </div>
          <div className="author-desc">
            <h2>What kind of stuff we have?</h2>
            <p>
              Here, you ll find a collection of <a>peculiar artifacts</a>,
              mind-bending curiosities, and objects that defy reality itself.
              From bottled dreams and <a>gravity-defying stones</a> to
              pocket-sized storms and invisible ink that reveals secrets only at
              midnight—each item tells a story stranger than fiction. Enter if
              you <a>dare to explore</a> the unexplained, the surreal, and the
              wondrously weird. Magic awaits those who believe!
            </p>
            <div>
              <button className="author-button-shop">Go to shop</button>
              <button className="author-button-about">About us</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
