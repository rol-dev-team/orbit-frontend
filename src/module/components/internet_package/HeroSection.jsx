
import React from "react";
import { Button } from "../common/Button";
import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";
import bannerimg from "../../../assets/images/sections/internet_package/herosection/Herosection.png"
const HeroSection = () => {
  return (
    <>
        <div className="container-fluid heroContainer"
          style={{
          backgroundImage: `url(${bannerimg})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
          height: "auto",
          paddingBottom: "14em",
        }}
        >
          <div className="row home-internet-hero-row">
            <div className="col-12 ps-lg-5 ms-lg-5 mt-2 ps-xl-5 ms-xl-5 col-xl-6 col-md-6">
              <HeadingTitle
                text='Surf the Web Ocean'
                style={{
                  color: "black",
                  textAlign: "start",
                  marginTop: "2em",
                  marginBottom: "0px",
                }}
              />
              <HeadingTitle
                text='at best packages'
                style={{
                  color: "black",
                  textAlign: "start",
                  marginBottom: "0px",
                }}
              />
              <HeadingTitle
                text='with Exciting VASs'
                style={{
                  color: "black",
                  textAlign: "start",
                  marginBottom: "0.5em",
                }}
              />

              <SubTitle
                text='Get your ultimate Net Surfing Experience, specialized for you.'
                style={{
                  color: "var(--color-text-sub-title)",
                  textAlign: "start",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              />
              <Button
                  type='button'
                  text='Get Orbit'
                  background='var(--color-primary)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                  className='get-orbit-btn'
                />

            </div>
            <div className="col-6">
              
              
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection;