import React, { useState } from "react";
import "./TitleAccordion.scss";
import Up from "../../../../assets/images/Menu/up.png";
import Down from "../../../../assets/images/Menu/up.png";

const TitleAccordion: React.FC = () => {
  return (
    <div className="session-accordion-container">
      <div>
        <h3 className="title-accordion">Section 1: Getting started</h3>
        <span className="desc-accordion">0/7 | 20 min</span>
      </div>

      <span className="icon-up">
        <img src={Up} alt="" />
      </span>
    </div>
  );
};

export default TitleAccordion;
