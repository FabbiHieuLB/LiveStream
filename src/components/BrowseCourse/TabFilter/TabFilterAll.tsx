import React from "react";
import "./TabFilterAll.scss";
import Following from "./Follwing/Following";
import TabFilterUI from "./TabUi/TabFilterUI";

const TabFilterAll = () => {
  return (
    <div className="tab-filter-container">
      <Following />
      <TabFilterUI />
    </div>
  );
};

export default TabFilterAll;
