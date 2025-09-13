import React from "react";
import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";
import { Button } from "./../common/Button";

export const ValueAddedService = ({
  image,
  logo,
  logoAlign,
  rowReverse,
  textAlign,
  title1,
  title2,
  title3,
  subtile,
  buttonAlign,
  buttonTex,
}) => {
  return (
    <section className='value-added-service'>
      <div className='container'>
        {/* Added this div for card style */}
        <div className='main-box'>
          <div className={`row ${rowReverse}`}>
            <div className='col-12 col-md-6'>
              <div className='content-box mt-4'>
                <img
                  src={logo}
                  alt='logo'
                  width='auto'
                  height='auto'
                  className={logoAlign}
                  style={{ maxHeight: "60px", objectFit: "contain" }}
                />
                <HeadingTitle
                  text={title1}
                  style={{ marginBottom: "0px", textAlign: `${textAlign}` }}
                />
                <HeadingTitle
                  text={title2}
                  style={{
                    marginBottom: "0px",
                    textAlign: `${textAlign}`,
                    marginTop: "0px",
                  }}
                />
                <HeadingTitle
                  text={title3}
                  style={{
                    marginBottom: "0px",
                    textAlign: `${textAlign}`,
                    marginTop: "0px",
                  }}
                />

                <SubTitle
                  text={subtile}
                  style={{
                    color: "var(--color-text-sub-title)",
                    marginBottom: "20px",
                    textAlign: `${textAlign}`,
                    marginTop: "20px",
                  }}
                />

                <Button
                  type='button'
                  text={buttonTex}
                  background='var(--color-primary)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                  className={buttonAlign}
                />
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='image-box'>
                <img
                  src={image}
                  alt='img'
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
