
import orbitLogo from "../../../../assets/header-logo.png"
import offerHero from "../../../../assets/images/sections/offers/offer-hero.png"
import { HeadingTitle } from '../../common/HeadingTitle'

export const OrbitalkHero = () => {
  return (
    <div
      className="container image-body"
      style={{
        marginTop: '5rem',
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
        borderRadius: '40px',
        border: '1px solid transparent', 
        boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.4)', // Green glow
        padding: '15px',
        
      }}
    >
      <div className="container p-5 text-body">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8" style={{paddingLeft:'50px'}}>
            <img
              src={orbitLogo}
              alt="Orbit Logo"
              className="img-fluid mb-5"
              style={{ height: '100px' }}
            />

            <HeadingTitle
              text="SPOTLIGHT"
              style={{
                color: "#8BC53F",
                marginTop: "3rem",
                marginBottom: "3rem",
                textAlign: "start",
                fontSize: '30px',
              }}
            />

            <HeadingTitle
              text="Exciting OrbiTalk"
              style={{
                color: "white",
                marginBottom: "20px",
                textAlign: "start",
                lineHeight: '1',
              }}
            />

            <HeadingTitle
              text="Offers will be hereby..."
              style={{
                color: "white",
                marginBottom: "20px",
                textAlign: "start",
              }}
            />

            <HeadingTitle
              text="With some key details."
              style={{
                color: "white",
                textAlign: "start",
                fontSize: '20px',
                fontWeight: 'normal',
                lineHeight: '1',
              }}

              
            />
            
          </div>
        </div>
        <p className="text-end" style={{color:'white',fontSize:'10px'}}>Terms and conditions apply*</p>
      </div>
    </div>
  )
}
