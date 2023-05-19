import React from "react";
import "./SearchCourse.scss";
import Search from "../../../assets/images/Menu/search.png";

const SearchCourse = () => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <img src={Search} alt="" />
      </div>
      <input
        type="text"
        placeholder="Search course of mentors"
        className="input-search"
      />
    </div>
  );
};

export default SearchCourse;
