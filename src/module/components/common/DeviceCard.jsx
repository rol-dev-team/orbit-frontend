import React from "react";
import { Link } from "react-router-dom";

export const DeviceCard = ({ data }) => {
  return (
    <div className='row'>
      {data.map((item, index) => (
        <div className='col-12 col-md-4 mb-3 mb-sm-0' key={index}>
          <div className='device-card'>
            <div className='device-card-body'>
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
            </div>
            <Link
              to='#'
              className='device-btn'
              aria-label={`Learn more about ${item.title}`}>
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
