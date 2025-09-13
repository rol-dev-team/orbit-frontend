import React from "react";
import { Link } from "react-router-dom";

export const SocialMedia = ({ data }) => {
  return (
    <div className='mb-4 text-start'>
      <h6 className='fw-bold'>Get Connected</h6>
      <ul className='nav gap-3'>
        {data.platforms.map((item, index) => (
          <li className='nav-item' key={index}>
            <Link to={item.platformLink} className=''>
              <img
                src={item.platformIcon}
                alt={item.platformName}
                width='40'
                height='40'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
