import orbitLogo from "../../../../assets/header-logo.png"
import OrbitTalkHero from "../../../../assets/images/sections/OrbitTalk_main/hero_banner.png"
import { Button } from "../../common/Button"
import { HeadingTitle } from "../../common/HeadingTitle"


export const OrbiTalkHero = () => {
  return (
    <div
      className="container image-body p-5"
      style={{
        marginTop: '5rem',
        backgroundImage: `url(${OrbitTalkHero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '20px',
        border: '1px solid transparent', 
        boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.4)', // Green glow
        padding: '15px',
        
      }}
    >

    <div className="row p-1">
        <div className="col">
        <HeadingTitle
              text="Stay Connected,"
              style={{
                color: "white",
                marginBottom: "5px",
                textAlign: "start",
                lineHeight: '1',
              }}
            />
            <HeadingTitle
              text="On your terms,"
              style={{
                color: "white",
                marginBottom: "5px",
                textAlign: "start",
                lineHeight: '1',
              }}
            />
            <HeadingTitle
              text="affordably."
              style={{
                color: "white",
                marginBottom: "20px",
                textAlign: "start",
                lineHeight: '1',
              }}
            />
            <Button
                  type='button'
                  text='Check Offers'
                  background='var(--bs-teal)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                  className='orbitalkherobutton'
                  
                />
        <p className="text-start" style={{color:'white',fontSize:'10px', marginTop:'11rem'}}>Terms and conditions apply*</p>

        </div>
        <div className="col d-flex justify-content-end align-items-end">
        <img
              src={orbitLogo}
              alt="Orbit Logo"
              className="img-fluid "
              style={{ height: '100px' }}
            />
        </div>
    </div>
      
    </div>
  )
}
