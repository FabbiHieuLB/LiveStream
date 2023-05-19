import React, { useState } from "react";
import "./ContentAccordion.scss";
import Check from "../../../../assets/images/Menu/Checkbox.png";
import NoCheck from "../../../../assets/images/Menu/no-check.png";
import Unicon from "../../../../assets/images/Menu/Union.png";

const ContentAccordion: React.FC = () => {
  return (
    <div className="content-accordion-container">
      <div className="content-wrapper">
        <div className="check">
          <img src={Check} alt="" />
        </div>
        <div className="content-item">
          <span className="StepItem-title">
            1. Getting started with Figma training
          </span>
          <div className="time-video">
            <div className="time-icon">
              <img src={Unicon} alt="" />
            </div>
            <div className="time">
              <span>5 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAccordion;
