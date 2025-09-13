import React from "react";
import orbitLogo from "../../../assets/header-logo.png";
import valueAddedHero from "../../../assets/images/sections/value-added-services/hero.png";
import { Button } from "../common/Button";
import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";

export const ValueAddedHero = () => {
  return (
    <div
      className='container image-body p-5 mb-5'
      style={{
        marginTop: "5rem",
        backgroundImage: `url(${valueAddedHero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "20px",
        border: "1px solid transparent",
        boxShadow: "0 0 20px 5px rgba(0, 255, 0, 0.4)", // Green glow
        padding: "15px",
        height: "500px",
      }}>
      <div className='row d-flex align-items-center h-100'>
        <div className='col'>
          <HeadingTitle
            text='We make'
            style={{
              color: "white",
              marginBottom: "5px",
              textAlign: "start",
              lineHeight: "1",
            }}
          />
          <HeadingTitle
            text='your home'
            style={{
              color: "white",
              marginBottom: "5px",
              textAlign: "start",
              lineHeight: "1",
            }}
          />
          <HeadingTitle
            text='complete'
            style={{
              color: "white",
              marginBottom: "20px",
              textAlign: "start",
              lineHeight: "1",
            }}
          />
          <SubTitle
            text='Check your new offers and grab them fast!'
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              textAlign: "start",
              color: "var(--color-white)",
            }}
          />
          <Button
            type='button'
            text='Check VASs'
            background='var(--bs-teal)'
            color='white'
            padding='5px 45px'
            borderRadius='5px'
            className='orbitalkherobutton'
          />
        </div>
        <div className='col d-flex justify-content-end align-self-end'>
          <img
            src={orbitLogo}
            alt='Orbit Logo'
            className='img-fluid '
            style={{ height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};
