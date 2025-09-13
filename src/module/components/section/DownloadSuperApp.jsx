import React from "react";
import { HeadingTitle } from "./../common/HeadingTitle";
import bgApp from "../../../assets/images/sections/app/app-ads.png";
import { footerApps } from "../../static/data";
import { Link } from "react-router-dom";

export const DownloadSuperApp = () => {
  return (
    <section className='app-section'>
      <div className='container'>
        <div
          className='box'
          style={{
            background: `url(${bgApp})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "550px",
            boxShadow: "var( --shadow-heavy)",
            borderRadius: "var(--border-radius-large)",
          }}>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <div className='mt-5' style={{ paddingLeft: "60px" }}>
                <HeadingTitle
                  text='Simplicity'
                  style={{ marginBottom: "0px", textAlign: "start" }}
                />
                <HeadingTitle
                  text='at your Fingertips! '
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                    marginTop: "0px",
                  }}
                />
                <HeadingTitle
                  text='Download App'
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                    marginTop: "0px",
                  }}
                />
                <HeadingTitle
                  text='Chill!'
                  style={{
                    marginBottom: "0px",
                    textAlign: "start",
                    marginTop: "0px",
                  }}
                />
                <div className='mt-5 text-start'>
                  <h5 className='fw-bold'>Download Super App</h5>
                  <ul className='nav flex gap-3'>
                    {footerApps.apps.map((item, index) => (
                      <li className='nav-item' key={index}>
                        <Link to={item.appLink} className='nav-link p-0'>
                          <img
                            src={item.appIcon}
                            alt={item.appName}
                            width='100%'
                            height='40px'
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='col-md-6' style={{ paddingLeft: "100px" }}>
              <img
                src={bgApp}
                className='img-fluid'
                alt='comic image'
                height='auto'
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
