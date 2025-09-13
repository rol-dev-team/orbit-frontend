import React from "react";
import WeAreOnline from "../components/section/WeAreOnline";
import PaymentGateway from "../components/section/PaymentGateway";
import { HeadingTitle } from "../components/common/HeadingTitle";

const About = () => {
  return (
    <>
      <section className='about-us-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-8 offset-2'>
              <div className=''>
                <HeadingTitle
                  text='About Orbit Internet'
                  style={{
                    color: "var(  --color-lime-green)",
                    marginBottom: "60px",
                    textAlign: "center",
                    lineHeight: "1",
                  }}
                />
                <p className='mb-0'>
                  Orbit, a leading brand under Race Online Limited, is dedicated
                  to delivering innovative and reliable internet solutions that
                  empower customers with top-notch quality, exceptional service,
                  and unmatched comfort. As a trusted internet service provider
                  (ISP), Orbit has quickly become a leader in home connectivity,
                  offering
                </p>
                <p className='text-center fst-italic'>
                  fast, secure, and uninterrupted internet services.
                </p>
                <p className='mb-0'>
                  Founded in 2018, Orbit was established with a clear mission:
                  to enhance the digital experience for home users by providing
                  seamless connectivity that keeps families and homes connected,
                  entertained, and informed. We offer some of the best internet
                  speeds and home broadband services available, ensuring
                  customers
                </p>
                <p className='text-center fst-italic'>
                  have a reliable and hassle-free experience.
                </p>
                <p className='mb-0'>
                  Orbit’s journey began with a strong commitment to offering
                  secure, reliable, and high-performance internet services.
                  Thanks to our dedicated team and technical expertise, Orbit
                  now serves over 230,000 active connections across 64
                  districts, with more than 1.5 million satisfied customers. Our
                  customers enjoy round-the-clock support with 24/7 customer
                  service to ensure their internet needs
                </p>
                <p className='text-center fst-italic'>
                  are met without delays.
                </p>

                <p>
                  We take great pride in our reputation as the best home
                  internet service provider. With consistent internet speeds,
                  high-quality service, and no compromises in performance, Orbit
                  continues to set the standard for exceptional home internet
                  services. Our customer-first approach ensures we lead the way
                  in providing reliable, secure, and fast internet to every
                  home, every day.
                </p>
                <p className='text-center'>
                  <strong>
                    Choose Orbit for the ultimate internet experience—because at
                    Orbit, your <br />
                    satisfaction is our priority.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
};

export default About;
