import React from "react";
import "./ItemVideo.scss";
import Daniel from "../../../../assets/images/Menu/daniel.png";
import Star from "../../../../assets/images/Menu/star.png";

const ItemVideo = () => {
  return (
    <div className="video-container">
      <div className="video-item">
        <div className="title">
          <p>Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more</p>
        </div>
        <div className="thumbnail">
          <img src={Daniel} alt="" />
        </div>
        <div className="name">
          <p>Lena, Daniel</p>
        </div>
        <div className="star">
          <p className="star-number">4.5</p>
          <div className="star-icon">
            <img src={Star} alt="" />
          </div>
        </div>
        <div className="price">
          <p>450.000 vnđ</p>
        </div>
        <div className="seller">
          <button>Best Seller</button>
        </div>
      </div>
      <div className="video-item">
        <div className="title">
          <p>Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more</p>
        </div>
        <div className="thumbnail">
          <img src={Daniel} alt="" />
        </div>
        <div className="name">
          <p>Lena, Daniel</p>
        </div>
        <div className="star">
          <p className="star-number">4.5</p>
          <div className="star-icon">
            <img src={Star} alt="" />
          </div>
        </div>
        <div className="price">
          <p>450.000 vnđ</p>
        </div>
        <div className="seller">
          <button>Best Seller</button>
        </div>
      </div>
      <div className="video-item">
        <div className="title">
          <p>Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more</p>
        </div>
        <div className="thumbnail">
          <img src={Daniel} alt="" />
        </div>
        <div className="name">
          <p>Lena, Daniel</p>
        </div>
        <div className="star">
          <p className="star-number">4.5</p>
          <div className="star-icon">
            <img src={Star} alt="" />
          </div>
        </div>
        <div className="price">
          <p>450.000 vnđ</p>
        </div>
        <div className="seller">
          <button>Best Seller</button>
        </div>
      </div>
      <div className="video-item">
        <div className="title">
          <p>Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more</p>
        </div>
        <div className="thumbnail">
          <img src={Daniel} alt="" />
        </div>
        <div className="name">
          <p>Lena, Daniel</p>
        </div>
        <div className="star">
          <p className="star-number">4.5</p>
          <div className="star-icon">
            <img src={Star} alt="" />
          </div>
        </div>
        <div className="price">
          <p>450.000 vnđ</p>
        </div>
        <div className="seller">
          <button>Best Seller</button>
        </div>
      </div>
    </div>
  );
};

export default ItemVideo;
