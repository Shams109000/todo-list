import React, { useState } from 'react';
import '../App.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {

    setActiveIndex(index === activeIndex ? null : index);
    console.log(activeIndex,'a');
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={index}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
            <i className="fas fa-chevron-down"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          {activeIndex!=null?<p>{item.content}</p>:null}
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
