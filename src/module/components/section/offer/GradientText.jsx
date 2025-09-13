import React from "react";
import { SubTitle } from "../../common/SubTitle";

function GradientText() {
  return (
    <>
      <div
        className='container py-5' // Added padding for better visibility
        style={{
          background: "linear-gradient(to right, #87c645, #43daa7)", // Example gradient: light green to dark green
          color: "white",
          textAlign: "center",
        }}>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-7'>
            <SubTitle
              text='Connected living made delightful with Orbit Internet plans. As you enjoy
           superfast internet with symmetrical upload and download speeds, unlimited
            data and longer validity make it all the more exciting.'
              style={{
                color: "white",
                marginBottom: "30px",
                textAlign: "center",
                fontSize: "var(--font-size-medium)",
              }}
            />
            <SubTitle
              text="What's more, users with Orbit Internet Free Installation also GET FREE subscriptions to top OTT apps on selected plans."
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "30px",
                fontSize: "var(--font-size-medium)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GradientText;
