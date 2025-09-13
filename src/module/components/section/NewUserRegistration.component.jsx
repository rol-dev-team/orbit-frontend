import React from "react";
import SubscriptionForm from "./SubscriptionForm";
import { LogoComponent } from "../LogoComponent";

import logo1 from "../../../assets/images/sections/switch_to_orbit_instantly/logo1.png";
import logo2 from "../../../assets/images/sections/switch_to_orbit_instantly/logo2.png";
import logo3 from "../../../assets/images/sections/switch_to_orbit_instantly/logo3.png";
import logo4 from "../../../assets/images/sections/switch_to_orbit_instantly/logo4.png";

const NewUserRegistration = () => {
  return (
    <section className='new-user-registration-section' id='get-new-connection'>
      <div className='container'>
        <div className='box'>
          <div className='row'>
            <div className='col-md-6 ms-0 ms-sm-5'>
              <h6 className='text-center fw-bold fs-2 mt-5'>
                New User Registration
              </h6>
              <SubscriptionForm />

              {/* <div className="connection-notes">
                <small
                  style={{
                    color: "var(--color-text-sub-title)",
                    textAlign: "start",
                  }}
                >
                  Note: <br />
                  1. Internet speed may vary for many reasons.
                  <br />
                  2. if multiple devices using your network, the speed may be
                  lower than expected. <br />
                  3. if your internet speed is much lower than your package,
                  please contact our support.
                </small>
              </div> */}
            </div>
            <div className='col-md-12'>
              <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <div className='connection-notes ms-5 ps-4'>
                  <small
                    style={{
                      color: "var(--color-text-sub-title)",
                    }}>
                    Note: <br />
                    1. Internet speed may vary for many reasons.
                    <br />
                    2. If multiple devices using your network, the speed may be
                    lower than expected. <br />
                    3. If your internet speed is much lower than your package,
                    please contact our support.
                  </small>
                </div>
                <div className='me-5 logo-hide'>
                  <LogoComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='col-12'>
              <div className='mt-5'>
                <ul className='logo d-flex flex-wrap gap-5 justify-content-center text-center'>
                  <li className='d-flex flex-column align-items-center'>
                    <img
                      src={logo1}
                      alt='Partner logo 1'
                      className='img-fluid'
                      style={{ marginBottom: "10px" }}
                    />
                    <p>
                      Relocate <br /> your connection
                    </p>
                  </li>
                  <li className='d-flex flex-column align-items-center'>
                    <img
                      src={logo2}
                      alt='Partner logo 2'
                      className='img-fluid'
                      style={{ marginBottom: "10px" }}
                    />
                    <p>
                      Get <br /> Orbitalk
                    </p>
                  </li>
                  <li
                    className='d-flex flex-column align-items-center'
                    style={{ marginTop: "-19px" }}>
                    <img
                      src={logo3}
                      alt='Partner logo 3'
                      className='img-fluid'
                      style={{ marginBottom: "10px" }}
                    />
                    <p>
                      Get <br /> Orbitrack
                    </p>
                  </li>
                  <li className='d-flex flex-column align-items-center'>
                    <img
                      src={logo4}
                      alt='Partner logo 4'
                      className='img-fluid'
                      style={{ marginBottom: "10px" }}
                    />
                    <p>
                      Contact <br /> Support
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUserRegistration;
