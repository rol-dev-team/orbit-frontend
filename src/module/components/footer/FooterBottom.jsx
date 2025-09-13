import React from "react";
import { Link } from "react-router-dom";

export const FooterBottom = ({ data }) => {
  return (
    <div className='row footer-bottom'>
      <div className='col-12 col-md-4'>
        <div className='branding' style={{marginTop: '65px'}}>
          <small>
            <span>Orbit internet is a brand of </span>{" "}
            <span>Race Online Ltd.</span>
          </small>
        </div>
      </div>
      <div className='col-12 col-md-4 text-center'>
        <div className='footer-logo gap-4 mb-3'>
          <img src={data.raceLogo} alt='Race' />
          <img src={data.orbitLogo} alt='Race' />
        </div>
        <small className='text-light-gray'>{data.copyright}</small>
      </div>
      <div className='col-12 col-md-4' style={{marginTop: '65px', paddingLeft: '9rem'}}>
        <ul className='nav footer-links gap-4'>
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
