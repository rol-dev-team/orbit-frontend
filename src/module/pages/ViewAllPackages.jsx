import React from "react";
import { Package } from "../components/Package";
import { packageData } from "../static/data";
import { HeadingTitle } from "../components/common/HeadingTitle";

const ViewAllPackages = () => {
  return (
    <section className='package-section'>
      <div className='container'>
        <HeadingTitle text='All Packages' style={{ marginBottom: "25px" }} />
        <Package data={packageData} />
      </div>
    </section>
  );
};

export default ViewAllPackages;
