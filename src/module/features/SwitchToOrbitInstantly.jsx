import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, User, Phone } from "lucide-react";

// Import logos
import logo1 from "../../assets/images//sections/switch_to_orbit_instantly/logo1.png";
import logo2 from "../../assets/images//sections/switch_to_orbit_instantly/logo2.png";
import logo3 from "../../assets/images//sections/switch_to_orbit_instantly/logo3.png";
import logo4 from "../../assets/images//sections/switch_to_orbit_instantly/logo4.png";
import { HeadingTitle } from "../components/common/HeadingTitle";
import { Button } from "../components/common/Button";

export const SwitchToOrbitInstantly = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setContact(value);
  };

  return (
    <section className='switch-to-orbit-instantly'>
      <HeadingTitle
        text='Switch to Orbit Instantly'
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "1.5em",
          marginBottom: "1em",
        }}
      />

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3 box'>
            <div className='row d-flex justify-content-center' style={{marginTop: '4px'}}>
              <div className='col-12 col-md-8'>
                <div
                  className='switch-wrapper'
                  style={{ width: "350px", marginBottom: "20px" }}>
                  <button
                    className={`orbit-tab ${
                      activeTab === "Today" ? "activee" : ""
                    }`}
                    onClick={() => handleTabClick("Today")}>
                    Today
                  </button>
                  <button
                    className={`orbit-tab ${
                      activeTab === "Schedule for Later" ? "activee" : ""
                    }`}
                    onClick={() => handleTabClick("Schedule for Later")}>
                    Schedule for Later
                  </button>

                  <div
                    className='orbit-tab-indicator'
                    style={{
                      left: activeTab === "Today" ? "5%" : "49%",
                      width: "47%",
                    }}
                  />
                </div>
              </div>
              <div className='col-12 col-md-4' style={{ marginTop: "10px" }}>
                <Link className='installLink' to='#'>
                  installation details <ChevronRight />
                </Link>
              </div>
            </div>

            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-md-4'>
                <div className='orbit-input-container'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={handleNameChange}
                    className='form-control'
                  />
                  <span className='orbit-icon'>
                    <User strokeWidth={1.5} color='black' />
                  </span>
                </div>
              </div>

              <div className='col-12 col-md-4'>
                <div className='orbit-input-container'>
                  <input
                    type='tel'
                    placeholder='Contact No.'
                    value={contact}
                    onChange={handleContactChange}
                    className='form-control'
                  />
                  <span className='orbit-icon'>
                    <Phone strokeWidth={1.5} color='black' />
                  </span>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <Button
                  type='button'
                  text='Request'
                  padding='5px 30px'
                  borderRadius='30px'
                  className='request-button'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-md-6 offset-md-3 notes'>
            <p>Please note:</p>
            <ol>
              <li>
                We will contact at the number you provided within 30 minutes.
              </li>
              <li>
                The connection specifications and package selection will be
                completed over the phone call.
              </li>
              <li>The billing process will be elaborated afterwards.</li>
            </ol>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
            <div className='mt-5'>
              <ul className='logo d-flex gap-5 justify-content-center' style={{textAlign: "center"}}>
                <li>
                  <img src={logo1} alt='Partner logo 1' style={{marginBottom: '10px'}} />
                  <p>Relocate <br></br> your connection</p>
                </li>
                <li>
                  <img src={logo2} alt='Partner logo 2' style={{marginBottom: '10px'}}/>
                  <p>Get <br></br> Orbitalk</p>
                </li>
                <li style={{marginTop: '-19px'}}>
                  <img src={logo3} alt='Partner logo 3' style={{marginBottom: '10px'}}/>
                  <p>Get <br></br> Orbitrack</p>
                </li>
                <li>
                  <img src={logo4} alt='Partner logo 4' style={{marginBottom: '10px'}}/>
                  <p>Contact <br></br> Support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
