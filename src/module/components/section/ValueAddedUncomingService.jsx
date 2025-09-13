import React from "react";
import { NewOrbitCard } from "./../common/NewOrbitCard";
import { upcommingServiceData } from "../../static/data";
import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";

export const ValueAddedUncomingService = () => {
  return (
    <section className='whats-new-orbit-section'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <HeadingTitle
              text='Upcomming Services'
              style={{ marginBottom: "15px" }}
            />
            <SubTitle
              text='Orbit has included a number of new VAS for your unparalleled digital life experience.'
              style={{ marginBottom: "40px" }}
            />
          </div>
        </div>

        <NewOrbitCard data={upcommingServiceData} />
      </div>
    </section>
  );
};
