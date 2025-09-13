import React from "react";
import { HeadingTitle } from "../common/HeadingTitle";
function PricingSeperator() {
  return (
    <>
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--active-border-color), transparent)",
          margin: "0 auto",
          width: "90%",
        }}></div>
      <HeadingTitle
        text='Pricing & Plans'
        style={{ marginBottom: "0px", padding: "10px" }}
      />
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--active-border-color), transparent)",
          margin: "0 auto",
          width: "90%",
        }}></div>
    </>
  );
}

export default PricingSeperator;
