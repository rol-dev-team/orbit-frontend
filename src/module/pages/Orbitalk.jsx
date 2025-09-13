// import WhatsInTheirMind from "../components/section/WhatsInTheirMind";
// import GetApp from "../components/section/OrbiatlkOffer/GetApp";
// import WeAreOnline from "../components/section/WeAreOnline";
// import PaymentGateway from "../components/section/PaymentGateway";
// import { OrbiTalkHero } from "../components/section/Orbitalk/OrbiTalkHero";

// export const Orbitalk = () => {
//   return (
//     <>
//       <OrbiTalkHero />
//       <WhatsInTheirMind
//         title="What’s in their mind?"
//         subtitle="on Orbit Internet"
//       />
//       <GetApp />
//       <WeAreOnline />
//       <PaymentGateway />
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
import orbitLogo from "../../assets/header-logo.png";
import offerHero from "../../assets/images/sections/offers/offer-hero.png";

export const Orbitalk = () => {
  return (
    <>
      {/* <div
        className='container'
        style={{
          marginTop: "5rem",
          backgroundImage: `radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${offerHero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}>
        <div className='container p-5 text-body'>
          <div className='row'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingLeft: "50px" }}>
              <img
                src={orbitLogo}
                alt='Orbit Logo'
                className='img-fluid mb-5'
                style={{ height: "100px" }}
              />

              <HeadingTitle
                text='SPOTLIGHT'
                style={{
                  color: "#8BC53F",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                  textAlign: "start",
                  fontSize: "30px",
                }}
              />

              <HeadingTitle
                text='Exciting OrbiTalk'
                style={{
                  color: "white",
                  marginBottom: "20px",
                  textAlign: "start",
                  lineHeight: "1",
                }}
              />

              <HeadingTitle
                text='Offers will be hereby...'
                style={{
                  color: "white",
                  marginBottom: "20px",
                  textAlign: "start",
                }}
              />

              <HeadingTitle
                text='with some key details'
                style={{
                  color: "white",
                  textAlign: "start",
                  fontSize: "30px",
                  fontWeight: "normal",
                  lineHeight: "1",
                }}
              />
            </div>
          </div>
          <p className='text-end' style={{ color: "white", fontSize: "10px" }}>
            Terms and conditions apply*
          </p>
        </div>
      </div>

      <br />
      <br />
      <br /> */}

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
                  {/* <Link to={item.appLink} className='nav-link p-0'>
                    <img src={item.appIcon} alt={item.appName} />
                  </Link> */}
                  <a
                    href={item.appLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='nav-link p-0'>
                    <img src={item.appIcon} alt={item.appName} />
                  </a>
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
