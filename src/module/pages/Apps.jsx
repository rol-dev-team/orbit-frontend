// import React from "react";
// import DigitalOfferCheck from "./../components/section/DigitalOfferCheck";
// import { DownloadSuperApp } from "../components/section/DownloadSuperApp";
// import WeAreOnline from "./../components/section/WeAreOnline";

// export const Apps = () => {
//   return (
//     <>
//       <DownloadSuperApp />
//       <WeAreOnline />
//     </>
//   );
// };

import getApp from "../../assets/images/sections/get_app/getApp.png";
import { HeadingTitle } from "../components/common/HeadingTitle.jsx";
import { Link } from "react-router-dom";
import OfferFaq from "../components/section/offer/OfferFaq.jsx";
import WeAreOnline from "../components/section/WeAreOnline.jsx";
import PaymentGateway from "../components/section/PaymentGateway.jsx";
import { footerApps } from "../static/data.js";
export const Apps = () => {
  return (
    <>
      <div
        className='container image-body'
        style={{
          marginTop: "5rem",
          backgroundImage: `radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 80%,
      rgba(0, 0, 0, 0.2) 100%
    ),url(${getApp})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "20px",
          border: "1px solid transparent",
          boxShadow: "0 0 20px 5px rgba(0, 255, 0, 0.4)", // Green glow
          padding: "15px",
          marginBottom: "5rem",
        }}>
        <div className='container p-5 text-body'>
          <div className='row'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingLeft: "50px" }}></div>
          </div>
          <HeadingTitle
            text='Get App Today'
            style={{
              color: "black",
              marginBottom: "20px",
              textAlign: "end",
              lineHeight: "1",
            }}
          />
          <div className='mt-5 text-end pb-5'>
            <h5 className='fw-bold text-black'>Download OrbiTalk</h5>
            <ul className='nav flex gap-3 flex-column'>
              {footerApps.apps.map((item, index) => (
                <li className='nav-item' key={index}>
                  <Link to={item.appLink} className='nav-link p-0'>
                    <img src={item.appIcon} alt={item.appName} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className='text-end' style={{ color: "black", fontSize: "10px" }}>
            Please note:
            <br />
            1. We will contact at the number you provided within 30 minutes.
            <br />
            2. A pin number will be sent to you via SMS, keep it for tracking
            progress .
          </p>
        </div>
      </div>
      <OfferFaq />
      <WeAreOnline />
      <PaymentGateway />
          
    </>
  );
};
