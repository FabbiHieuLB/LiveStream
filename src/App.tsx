import React from "react";
import "./App.scss";
import MenuHeader from "./components/Header/MenuHeader";
import SearchCourse from "./components/BrowseCourse/SearchCourse/SearchCourse";
import TabFilterAll from "./components/BrowseCourse/TabFilter/TabFilterAll";
import VideoList from "./components/BrowseCourse/VideoList/VideoList";
import DetailVideo from "./components/BrowseCourse/VideoList/DetailVideo/DetailVideo";

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <div className="main">
        {/* <SearchCourse />
        <TabFilterAll />
        <VideoList /> */}
        <DetailVideo />
      </div>
    </div>
  );
}

export default App;
