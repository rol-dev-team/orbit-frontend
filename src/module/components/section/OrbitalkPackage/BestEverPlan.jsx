import React from "react";
import orbitLogo from "../../../../assets/header-logo.png";
import DayNight from "../../../../assets/images/sections/Call_up/DayNight.png";
import { Button } from "../../common/Button";
import { HeadingTitle } from "../../common/HeadingTitle";
import { SubTitle } from "../../common/SubTitle";

const BestEverPlan = () => {
  return (
    <>
      <div
        className='container image-body p-5 mt-5'
        style={{
          backgroundImage: `url(${DayNight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "20px",
          boxShadow: "0px 0px 25px 5px rgba(100, 150, 0, 0.4)", // Green glow
          padding: "15px",
          marginBottom: "5rem",
        }}>
        <div className='container text-body p-2'>
          <div className='row d-flex justify-content-end'>
            <div
              className='col-12 col-md-10 col-lg-8 d-flex justify-content-end'
              style={{ paddingRight: "50px" }}>
              <img
                src={orbitLogo}
                alt='Orbit Logo'
                className='img-fluid mb-5'
                style={{ height: "100px" }}
              />
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingRight: "50px" }}>
              <HeadingTitle
                text='Day or Night,'
                style={{
                  color: "black",
                  marginTop: "3rem",
                  marginBottom: "0px",
                  textAlign: "end",
                }}
              />
              <HeadingTitle
                text="We've Got"
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginBottom: "0px",
                  textAlign: "end",
                }}
              />
              <HeadingTitle
                text='Your Back!'
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginBottom: "2rem",
                  textAlign: "end",
                }}
              />
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div
              className='col-12 col-md-10 col-lg-8 '
              style={{ paddingRight: "50px" }}>
              <SubTitle
                text='Real Help, Real People'
                style={{
                  color: "var(--color-text-sub-title)",
                  textAlign: "end",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              />
              <SubTitle
                text='24/7 Service You Can Count On'
                style={{
                  color: "var(--color-text-sub-title)",
                  textAlign: "end",
                  marginTop: "0px",
                  marginBottom: "2rem",
                }}
              />
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div
              className='col-12 col-md-10 col-lg-8 d-flex justify-content-end'
              style={{ paddingRight: "50px" }}>
              <Button
                type='button'
                text='Avail'
                background='var(--bs-teal)'
                color='white'
                padding='5px 45px'
                borderRadius='5px'
                className='CallUpButton'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestEverPlan;
