import React from "react";
import { Link } from "react-router-dom";

export const Package = ({ data }) => {
  return (
    <div className='row'>
      {data.map((item, index) => (
        <div className='col-12 col-md-4 mb-5' key={index}>
          <div className='package-card'>
            <div class='plan'>
              <h2 class=''>{item.name}</h2>
            </div>
            <div className='speed'>{item.speed}</div>
            <div className='price'>
              ৳ {item.price} <span>{item.tax}</span>
            </div>
            <p className='description'>{item.description}</p>
            <small className='free'>
              <strong>{item.optional}</strong>
            </small>
            <div className='access'>
              {item.access.map((img, idx) => (
                <img src={img} alt='Service Logo' key={idx} height='20px' />
              ))}
            </div>
            <div className='free-talktime'>
              <p>Free Talk Time</p>
              <h3>{item.freeTalkTime}</h3>
            </div>
            <div className='info'>
              <div>
                <p>Validity</p>
                <strong>{item.validity}</strong>
              </div>
              <div>
                <p>Data</p>
                <strong>{item.data}</strong>
              </div>
            </div>
            {/* <div className='order-area'>
              <Link
                to='#'
                className='link-button'
                style={{ color: "var(--color-text-primary)" }}>
                View Details
              </Link>
              <Link to='#' className='book-now-button'>
                Book Now
              </Link>
            </div> */}
            {/* <a href='#get-new-connection' className='book-now-button mt-auto'>
              Book Now
            </a> */}
            <Link to='/get-new-connection' className='book-now-button mt-auto'>
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
