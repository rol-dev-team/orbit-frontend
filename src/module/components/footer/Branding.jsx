import React from "react";

export const Branding = ({ data }) => {
  return (
    <div className='branding'>
      <small>
        <span>Trade Licence No.</span>{" "}
        <span>
          {data.tradeLicense.year}
          {data.tradeLicense.reference}
          {data.tradeLicense.number}
        </span>
      </small>
    </div>
  );
};
