import React from "react";
import { Link } from "react-router-dom";

export const ConnectCard = ({ data }) => {
  return (
    <div className='container'>
      <div className='row'>
        {data.map((item, index) => (
          <div className='col-12 col-md-4 mb-3 mb-sm-0' key={index}>
            <div className='connect-card'>
              <img src={item.image} className='card-img-top' alt={item.image} />
              <div className='connect-card-body'>
                <h6 className='connect-card-title'>{item.title}</h6>
                <p className='connect-card-text'>{item.text}</p>
                <Link to='#' className='link-button'>
                  Check it Out
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
