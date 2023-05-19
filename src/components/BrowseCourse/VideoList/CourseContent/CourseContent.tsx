import React, { useState } from "react";
import TitleAccordion from "./TitleAccordion";
import ContentAccordion from "./ContentAccordion";

type AccordionItem = {
  title: JSX.Element;
  content: JSX.Element;
};

const AccordionVideo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionItems: AccordionItem[] = [
    { title: <TitleAccordion />, content: <ContentAccordion /> },
    { title: <TitleAccordion />, content: <ContentAccordion /> },
    { title: <TitleAccordion />, content: <ContentAccordion /> },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-title">{item.title}</div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionVideo;
