import "./LoadingAnimation.scss";

export default function LoadingAnimation() {
  return (
    <section className="loading-animation">
      <div className="loading-squares" alt="Loading screen" />
      <p className="loading-text">loading...</p>
    </section>
  );
}
