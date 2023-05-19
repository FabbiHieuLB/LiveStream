import React from "react";
import "./Following.scss";

const Following = () => {
  return (
    <div className="following-container">
      <select className="select" name="" id="">
        <option className="select-option" value="Following">
          Following
        </option>
        <option className="select-option" value="Subscribe">
          Subscribe
        </option>
        <option className="select-option" value="Like">
          Like
        </option>
        <option className="select-option" value="Share">
          Share
        </option>
      </select>
    </div>
  );
};

export default Following;
