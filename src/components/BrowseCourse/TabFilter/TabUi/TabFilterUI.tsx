import React, { useState } from "react";
import "./TabFilterUI.scss";

const TabFilterUI = () => {
  const items = [
    { id: 1, name: "Popular", category: "popular" },
    { id: 2, name: "Chúng ta không thuộc về nhau", category: "music" },
    { id: 3, name: "Learning Path", category: "learning" },
    { id: 4, name: "SoundCloud Audio", category: "accountancy" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    if (tab === "all") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === tab);
      setFilteredItems(filtered);
    }
  };
  return (
    <div className="filter-container">
      <div className="filter-item">
        <button
          onClick={() => handleTabClick("all")}
          className={activeTab === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleTabClick("popular")}
          className={activeTab === "popular" ? "active" : ""}
        >
          Popular
        </button>
        <button
          onClick={() => handleTabClick("music")}
          className={activeTab === "music" ? "active" : ""}
        >
          Music
        </button>
        <button
          onClick={() => handleTabClick("learning")}
          className={activeTab === "learning" ? "active" : ""}
        >
          Learning Path
        </button>
        <button
          onClick={() => handleTabClick("accountancy")}
          className={activeTab === "accountancy" ? "active" : ""}
        >
          Accountancy
        </button>
      </div>
      <ul style={{ display: "none" }}>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabFilterUI;
