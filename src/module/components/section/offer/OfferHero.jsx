import { SubTitle } from "../../common/SubTitle";
import { HeadingTitle } from "../../common/HeadingTitle";
import offerHero from "../../../../assets/images/sections/offers/offer-hero.png";
import orbitLogo from "../../../../assets/header-logo.png";

function OfferHero() {
  return (
    <div
      className='container'
      style={{
        marginTop: "5rem",
        marginBottom: "80px",
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
              text="Two Months'"
              style={{
                color: "white",
                marginBottom: "20px",
                textAlign: "start",
                lineHeight: "1",
              }}
            />

            <HeadingTitle
              text='Free Subscription'
              style={{
                color: "white",
                marginBottom: "20px",
                textAlign: "start",
              }}
            />

            <HeadingTitle
              text='On 10 months bill pay'
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
  );
}

export default OfferHero;
