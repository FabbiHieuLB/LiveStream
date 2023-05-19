import React from "react";
import "./DetailVideo.scss";
import Back from "../../../../assets/images/Menu/back.png";
import Room from "../Room/Room";
import TabsContent from "../TabsContent/TabsContent";
import Tabs from "../TabsContent/TabsContent";
import AccordionVideo from "../CourseContent/CourseContent";

const DetailVideo = () => {
  return (
    <div className="detail-video-container">
      <div className="title">
        <div className="icon-back">
          <img src={Back} alt="" />
        </div>
        <div className="title-back">
          <p>Web Design for Web Developers: Build Beautiful Websites!</p>
        </div>
      </div>
      <div className="main-video">
        <div className="main-left">
          <Room />
          <Tabs />
        </div>
        <div className="main-right">
          <AccordionVideo />
        </div>
      </div>
    </div>
  );
};

export default DetailVideo;
