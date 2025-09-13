import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoComponent } from "../components/LogoComponent";
import { navItems } from "../static/data";
import { SubNav } from "./SubNav";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubNav, setIsOpenSubNav] = useState("Home");
  const [show, setShow] = useState(false);

  // Automatically close the navbar on route change
  useEffect(() => {
    setIsOpen(false); // Collapse navbar when route changes
  }, [location.pathname]);

  const getSubNavItems = () => {
    const activeItem = navItems.find((item) => item.title === isOpenSubNav);
    return activeItem ? activeItem.subNav || [] : [];
  };

  const subNavData = getSubNavItems();

  const handleSelfCare = (val) => {
    const urls = {
      SID: "https://rolselfcare-bcrm.magnaquest.com",
      UID: "https://orbitbss.race.net.bd/customer/login",
      CID: "https://racebss.race.net.bd/customer/login",
    };

    const url = urls[val];

    if (url) {
      window.open(url, "_blank");
      setShow(false);
    }
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg main-nav'>
        <div className='container'>
          <LogoComponent />
          <button
            className='navbar-toggler'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-controls='navbarNavAltMarkup'
            aria-expanded={isOpen}
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id='navbarNavAltMarkup'>
            <div className='navbar-nav m-auto'>
              {navItems.map((item, index) =>
                item.path.startsWith("http") ? (
                  <a
                    key={index}
                    href={item.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={() => setIsOpenSubNav(item.title)}>
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsOpenSubNav(item.title)}
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}>
                    {item.title}
                  </Link>
                )
              )}
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                type='button'
                className='avater px-3 py-1 d-flex align-items-center justify-content-center gap-2'
                onClick={() => setShow(!show)}>
                <i
                  className='bi bi-person-fill fs-2'
                  style={{ color: "rgba(80, 175, 66, 1)" }}></i>
                <h6 className='fw-bold m-0 text start'>
                  Orbit <br />
                  Selfcare
                </h6>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {subNavData?.length === 0 ? (
        <div className='linebar'></div>
      ) : (
        <SubNav subNavData={subNavData} />
      )}
      {show && (
        <>
          <div className='modal-backdrop fade show'></div>
          <div
            className='modal fade show d-block'
            tabIndex='-1'
            role='dialog'
            aria-labelledby='orbitSelfcareModalLabel'
            aria-modal='true'>
            <div className='modal-dialog modal-md modal-dialog-centered'>
              <div className='modal-content'>
                <div
                  className='modal-header text-white'
                  style={{ background: "var(--background-gradient-color)" }}>
                  <h5 className='modal-title' id='orbitSelfcareModalLabel'>
                    Orbit Selfcare
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    aria-label='Close'
                    onClick={() => setShow(false)}></button>
                </div>
                <div className='modal-body my-3 text-center'>
                  <h6 className='fw-bold mb-4'>
                    Select your billable ID{" "}
                    <small className='fw-bold'>
                      ( আপনার আইডি কি দিয়ে শুরু? )
                    </small>
                  </h6>
                  <div className='d-flex justify-content-center gap-3 flex-wrap'>
                    <button
                      style={{ width: "140px" }}
                      type='button'
                      onClick={() => handleSelfCare("SID")}
                      className='book-now-button border-0'>
                      SID
                    </button>
                    <button
                      style={{ width: "140px" }}
                      type='button'
                      onClick={() => handleSelfCare("CID")}
                      className='book-now-button border-0'>
                      CID
                    </button>
                    <button
                      style={{ width: "140px" }}
                      type='button'
                      onClick={() => handleSelfCare("UID")}
                      className='book-now-button border-0'>
                      UID
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
