import React, { useState } from "react";
import Overview from "./Overview/Overview";
import "./TabsContent.scss";

type Tab = {
  label: string;
  content: JSX.Element;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Tab 1");

  const tabs: Tab[] = [
    { label: "Overview", content: <Overview /> },
    { label: "Review", content: <span>Content for Tab 2</span> },
    { label: "Q&A", content: <p>Content for Tab 3</p> },
    { label: "Learning tools", content: <p>Content for Tab 4</p> },
    { label: "Member", content: <p>Content for Tab 5</p> },
  ];

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-label">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={activeTab === tab.label ? "btn-tabs active" : "btn-tabs"}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            style={{ display: activeTab === tab.label ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
