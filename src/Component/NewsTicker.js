import React, { useState } from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
  const [newsItems, setNewsItems] = useState([
    'Example sentence news 1 ',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    'Example sentence news 1',
    
  ]);

  return (
    <div className="news-ticker">
      <div className="news-ticker-header">
        <h3>🔴🟡🟢</h3>
        <h2>News &  Events</h2>
      </div>
      <div className="news-ticker-content">
        <div className="news-ticker-items">
          {newsItems.map((item, index) => (
            <div key={index} className="news-ticker-item">
              <div className="notification1">
              <div className="bell-container">
                <div className="bell"></div>
              </div>
              </div>
              <span> &nbsp;&nbsp; {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
