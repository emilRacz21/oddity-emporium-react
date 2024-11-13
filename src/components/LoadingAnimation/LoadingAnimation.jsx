import "./LoadingAnimation.scss";

export default function LoadingAnimation({
  responseText = <p className="loading-text">Loading...</p>,
}) {
  return (
    <section className="loading-animation">
      <div className="loading-squares" alt="Loading screen" />
      {responseText}
    </section>
  );
}
