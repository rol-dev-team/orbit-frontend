import React from "react";
import { Link } from "react-router-dom";

export const FooterLinks = ({ data }) => {
  return (
    <div className='col-12 col-md-2 mb-4'>
      <div className='text-start footer-links'>
        <h6 className='fw-bold'>{data.title}</h6>
        <ul className='nav flex-column'>
          {data.links.map((item, index) => (
            <li className='nav-item' key={index}>
              <Link to={item.url} className='nav-link'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
