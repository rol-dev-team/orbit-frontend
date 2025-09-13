import React from "react";
import { Link } from "react-router-dom";

export const DownloadApps = ({ data }) => {
  return (
    <div className='mb-3 text-start'>
      <h6 className='fw-bold'>Download OrbiTalk</h6>
      <ul className='nav flex gap-3'>
        {data.apps.map((item, index) => (
          <li className='nav-item' key={index}>
            <Link to={item.appLink} className='nav-link p-0'>
              <img
                src={item.appIcon}
                alt={item.appName}
                width='100%'
                height='40'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
