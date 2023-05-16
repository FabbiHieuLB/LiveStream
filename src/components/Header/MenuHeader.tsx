import React from "react";
import OverView from "../../assets/images/Menu/over-view.png";
import MyCourse from "../../assets/images/Menu/my-course.png";
import Analytic from "../../assets/images/Menu/analytic.png";
import BrowseCourse from "../../assets/images/Menu/browse-course.png";
import Cart from "../../assets/images/Menu/cart.png";
import LogoFabbi from "../../assets/images/Menu/Fabbi.png";
import "./MenuHeader.scss";

const MenuHeader = () => {
  return (
    <div className="header-container">
      <header className="page-header">
        <div className="header-logo">
          <img src={LogoFabbi} alt="" />
        </div>
        <div className="header-menu">
          <div className="menu-item">
            <div className="menu-icon">
              <img src={OverView} alt="" />
            </div>
            <div className="menu-title">
              <span>Over view</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <img src={MyCourse} alt="" />
            </div>
            <div className="menu-title">
              <span>My course</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <img src={Analytic} alt="" />
            </div>
            <div className="menu-title">
              <span>Analytic</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <img src={BrowseCourse} alt="" />
            </div>
            <div className="menu-title">
              <span>Browse course</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <img src={Cart} alt="" />
            </div>
            <div className="menu-title">
              <span>Cart</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MenuHeader;
