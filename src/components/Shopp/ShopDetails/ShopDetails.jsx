import "./ShopDetails.scss";
import { shopParameters } from "../../../content";

import { useState } from "react";
import { postReviewInvention } from "../../Api_/ShopApi";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

const reviewObj = {
  reviewer: "",
  rating: "",
  comment: "",
  user_image: "",
};

export default function ShopDetails({ data, setData }) {
  const [review, setReview] = useState(reviewObj);
  const [showComments, setShowComments] = useState(false);
  const [showAddComments, setShowAddComments] = useState(false);
  const shopParams = shopParameters(data);
  function handleSendComments(e) {
    e.preventDefault();
    postReviewInvention(review, data._id);
    const updatedProduct = {
      ...data,
      reviews: [...data.reviews, review],
    };
    setData((prevData) =>
      prevData.map((product) =>
        product._id === data._id ? updatedProduct : product
      )
    );
    setReview(reviewObj);
  }
  return (
    <section className="shop-margin">
      <section className="shop-desc">
        <h2 className="details-text">Parameters</h2>
        <hr />
        <p>{data.target_audience}</p>
      </section>
      <section className="details-flex">
        {shopParams.map((items, index) => {
          return (
            <div id={index} key={index} className="details-row">
              <h3>{`${items.title}:`}</h3>
              <p>{items.desc}</p>
            </div>
          );
        })}
      </section>
      <section className="shop-desc">
        <h2 className="details-text">Description</h2>
        <hr />
        <p>{data.description}</p>
      </section>
      <section className="shop-desc">
        <span
          className="shop-buttons-center add"
          onClick={() => {
            setShowComments((value) => !value);
          }}
        >
          <h2 className="details-text-1">{`Reviews (${data.reviews.length})`}</h2>
          <div
            className={`shop-square-button added ${
              showComments ? "active" : "disabled"
            }`}
          ></div>
        </span>
        <hr />
        <DropdownMenu toggle={showComments}>
          {data.reviews.map((comment, index) => {
            return (
              <section key={index} className="shop-review-container">
                <section className="shop-review-item">
                  <div className="shop-review-item-div">
                    <img src={comment.user_image} alt="logo" />
                  </div>

                  <div className="reviewer">
                    <h2>{comment.reviewer}</h2>
                    <p>{`Rating: ${comment.rating}`}</p>
                  </div>
                </section>

                <p className="comment">{comment.comment}</p>
              </section>
            );
          })}
        </DropdownMenu>
        <section className="shop-desc">
          <span
            className="shop-buttons-center add"
            onClick={() => setShowAddComments((value) => !value)}
          >
            <h2 className="details-text-1">Add review</h2>
            <div
              className={`shop-square-button added ${
                showAddComments ? "active" : "disabled"
              }`}
            ></div>
          </span>
          <DropdownMenu toggle={showAddComments}>
            <form className="review-form">
              <div>
                <label>Your nickname</label>
                <input
                  value={review.reviewer}
                  type="text"
                  onChange={(e) => {
                    setReview((prev) => {
                      return { ...prev, ["reviewer"]: e.target.value };
                    });
                  }}
                  required
                />
                <label>Rating:</label>
                <input
                  value={review.rating}
                  type="number"
                  max="5"
                  min="1"
                  onChange={(e) => {
                    setReview((prev) => {
                      return { ...prev, ["rating"]: e.target.value };
                    });
                  }}
                  required
                />
              </div>
              <div>
                <label>Your comment</label>
                <textarea
                  value={review.comment}
                  onChange={(e) => {
                    setReview((prev) => {
                      return { ...prev, ["comment"]: e.target.value };
                    });
                  }}
                  required
                />
              </div>
              <section className="button-review">
                <button onClick={handleSendComments}>add comment</button>
              </section>
            </form>
          </DropdownMenu>
        </section>
      </section>
    </section>
  );
}
