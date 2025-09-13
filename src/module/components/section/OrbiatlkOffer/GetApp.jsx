import getApp from "../../../../assets/images/sections/get_app/getApp.png"
import { HeadingTitle } from '../../common/HeadingTitle'
import { footerApps } from "../../../static/data"
import { Link } from "react-router-dom"
import React from "react"
import logo1 from "../../../../assets/images//sections/switch_to_orbit_instantly/logo1.png"
import logo2 from "../../../../assets/images//sections/switch_to_orbit_instantly/logo2.png"
import logo3 from "../../../../assets/images//sections/switch_to_orbit_instantly/logo3.png"
import logo4 from "../../../../assets/images//sections/switch_to_orbit_instantly/logo4.png"
const GetApp = () => {
  return (
    <>
        <div
      className="container image-body"
      style={{
        marginTop: '5rem',
        backgroundImage: `radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 80%,
      rgba(0, 0, 0, 0.2) 100%
    ),url(${getApp})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: '20px',
        border: '1px solid transparent', 
        boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.4)', // Green glow
        padding: '15px',
        marginBottom: '5rem',
      }}
    >
      <div className="container p-5 text-body">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8" style={{paddingLeft:'50px'}}>           
            
          </div>
        </div>
        <HeadingTitle
              text="Get App Today"
              style={{
                color: "black",
                marginBottom: "20px",
                textAlign: "end",
                lineHeight: '1',
              }}
            />
            <div className='mt-5 text-end pb-5'>
                  <h5 className='fw-bold text-black'>Download OrbiTalk</h5>
                  <ul className='nav flex gap-3 flex-column'>
                    {footerApps.apps.map((item, index) => (
                      <li className='nav-item' key={index}>
                        <Link to={item.appLink} className='nav-link p-0'>
                          <img
                            src={item.appIcon}
                            alt={item.appName}
                            
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
        <p className="text-end" style={{color:'black',fontSize:'10px',}}>Please note:     
        <br/>1. We will contact at the number you provided within 30 minutes.
        <br/>2. A pin number will be sent to you via SMS, keep it for tracking progress .</p>
      </div>
    </div>
    <div className="row" style={{ marginBottom: '10em', width:'95%', paddingLeft:'50px' }}>
  <div className="col-12">
    <div className="mt-5">
      <ul
        className="logo d-flex flex-wrap gap-5 justify-content-center text-center"
      >
        <li className="d-flex flex-column align-items-center">
          <img
            src={logo1}
            alt="Partner logo 1"
            className="img-fluid"
            style={{ marginBottom: '10px' }}
          />
          <p>
            Relocate <br /> your connection
          </p>
        </li>
        <li className="d-flex flex-column align-items-center">
          <img
            src={logo2}
            alt="Partner logo 2"
            className="img-fluid"
            style={{ marginBottom: '10px' }}
          />
          <p>
            Get <br /> Orbitalk
          </p>
        </li>
        <li
          className="d-flex flex-column align-items-center"
          style={{ marginTop: '-19px' }}
        >
          <img
            src={logo3}
            alt="Partner logo 3"
            className="img-fluid"
            style={{ marginBottom: '10px' }}
          />
          <p>
            Get <br /> Orbitrack
          </p>
        </li>
        <li className="d-flex flex-column align-items-center">
          <img
            src={logo4}
            alt="Partner logo 4"
            className="img-fluid"
            style={{ marginBottom: '10px' }}
          />
          <p>
            Contact <br /> Support
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default GetApp