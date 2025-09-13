import orbitLogo from "../../../../assets/header-logo.png";
import DayNight from "../../../../assets/images/sections/Call_up/DayNight.png";
import { Button } from "../../common/Button";
import { HeadingTitle } from "../../common/HeadingTitle";
import { SubTitle } from "../../common/SubTitle";

const GalleryHero = () => {
  return (
    <>
      <div
        className='container image-body pt-5 px-5 mt-5'
        style={{
          backgroundImage: `url(${DayNight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "20px",
          boxShadow: "10px 10px 10px 2px rgba(0, 0, 0, 0.1)",
        }}>
        <div className='container text-body p-2'>
          <div className='row'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingLeft: "50px" }}>
              <HeadingTitle
                text='Real Stories'
                style={{
                  color: "black",
                  marginTop: "3rem",
                  marginBottom: "0px",
                  textAlign: "start",
                }}
              />
              <HeadingTitle
                text='Real Smiles'
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginBottom: "0px",
                  textAlign: "start",
                }}
              />
              <HeadingTitle
                text='See the Difference'
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginBottom: "0px",
                  textAlign: "start",
                }}
              />
              <HeadingTitle
                text='Through Their Eyes'
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginBottom: "2rem",
                  textAlign: "start",
                }}
              />
            </div>
          </div>
          <div className='row'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingLeft: "50px" }}>
              <SubTitle
                text='Get free Chorki Subscription on specified packages for'
                style={{
                  color: "var(--color-text-sub-title)",
                  textAlign: "start",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              />
              <SubTitle
                text='unlimited OTT ecstasy.'
                style={{
                  color: "var(--color-text-sub-title)",
                  textAlign: "start",
                  marginTop: "0px",
                  marginBottom: "2rem",
                }}
              />
            </div>
          </div>
          <div className='row'>
            <div
              className='col-12 col-md-10 col-lg-8'
              style={{ paddingLeft: "50px" }}>
              <Button
                type='button'
                text='Gallery'
                background='var(--bs-teal)'
                color='white'
                padding='5px 45px'
                borderRadius='5px'
                className='GalleryButton'
              />
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div
              className='col-12 col-md-10 col-lg-8 d-flex justify-content-end'
              style={{ paddingRight: "50px" }}>
              <img
                src={orbitLogo}
                alt='Orbit Logo'
                className='img-fluid mb-5'
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryHero;
