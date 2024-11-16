import "./RateStars.scss";
import starsDisabled from "../../assets/svg/star-disabled.svg";
import starsEnabled from "../../assets/svg/star-active.svg";
export default function RateStars({ rateMark, children }) {
  return (
    <div className="shop-rate-stars">
      <div>
        {Array.from({ length: 5 }).map((_, starIndex) => {
          return (
            <img
              key={starIndex}
              src={starIndex < rateMark ? starsEnabled : starsDisabled}
              alt="Star icon"
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
