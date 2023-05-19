import React from "react";
import "./Overview.scss";
import Avatar from "../../../../../assets/images/Menu/instructor.png";
import Twitter from "../../../../../assets/images/Menu/twitter.png";
import Youtube from "../../../../../assets/images/Menu/youtube.png";
import Facebook from "../../../../../assets/images/Menu/facebook.png";
import Tiktok from "../../../../../assets/images/Menu/tiktok.png";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="title-tabs-content">Overview</div>
      <div className="location">
        Learn web design in 1 hour with 25+ simple-to-use rules and guidelines —
        tons of amazing web design resources included!
      </div>
      <div className="information">
        <div className="title-infor">By the numbers</div>
        <div className="inf-main">
          <div className="inf-left">
            <div className="skill">
              <h4>Skill level:</h4>
              <span>All level</span>
            </div>
            <div className="student">
              <h4>Student:</h4>
              <span>65173</span>
            </div>
            <div className="language">
              <h4>Language:</h4>
              <span>English</span>
            </div>
            <div className="captions">
              <h4>Captions:</h4>
              <span>Yes</span>
            </div>
          </div>
          <div className="inf-right">
            <div className="lectures">
              <h4>Lectures:</h4>
              <span>19</span>
            </div>
            <div className="video">
              <h4>Video:</h4>
              <span>2.5 total hour</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title-features">Features</div>
        <div className="content-features">
          Avaliable on <a href="#">IOS</a> and <a href="#">Android</a>
        </div>
      </div>
      <div className="description">
        <div className="title-description">Description</div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non nisl sit ipsum et
          suspendisse urna. Velit quis varius dictum massa in. Enim vitae
          maecenas massa tortor. Venenatis faucibus quam vel quisque. Amet nisl
          tincidunt neque eget suspendisse odio eu phasellus. Venenatis mattis
          aenean integer dolor. Amet quisque nibh.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non nisl sit ipsum et
          suspendisse urna. Velit quis varius dictum massa in. Enim vitae
          maecenas massa tortor. Venenatis faucibus quam vel quisque. Amet nisl
          tincidunt neque eget suspendisse odio eu phasellus. Venenatis mattis
          aenean integer dolor. Amet quisque nibh.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non nisl sit ipsum et
          suspendisse urna. Velit quis varius dictum massa in. Enim vitae
          maecenas massa tortor. Venenatis faucibus quam vel quisque. Amet nisl
          tincidunt neque eget suspendisse odio eu phasellus. Venenatis mattis
          aenean integer dolor. Amet quisque nibh.
        </p>
      </div>
      <div className="instructor">
        <div className="title-instructor">Instructor</div>
        <div className="infor">
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
          <div className="introduce">
            <div className="name">Schmedtmann</div>
            <div className="position">Web Developer, Designer, and Teacher</div>
          </div>
        </div>
        <div className="icon">
          <img className="twitter" src={Twitter} alt="" />
          <img className="youtube" src={Youtube} alt="" />
          <img className="facebook" src={Facebook} alt="" />
          <img className="tiktok" src={Tiktok} alt="" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Non nisl sit ipsum et
        suspendisse urna. Velit quis varius dictum massa in. Enim vitae maecenas
        massa tortor. Venenatis faucibus quam vel quisque. Amet nisl tincidunt
        neque eget suspendisse odio eu phasellus. Venenatis mattis aenean
        integer dolor. Amet quisque nibh.
      </p>
    </div>
  );
};

export default Overview;
