import { packageTypeData } from '../../../static/data';
import { useState } from "react";
import { Package } from "../../Package"
import { Link } from 'react-router-dom';
import { HeadingTitle } from "../../common/HeadingTitle";
import { packageData } from '../../../static/data';
export const SupportPackage = ({bg}) => {
    const [activeTab, setActiveTab] = useState("Popular");
    const filteredData = packageTypeData.filter((item) =>
      activeTab === "Popular"
        ? item.type === "popular"
        : item.type === "exclusive"
    );
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <section className={`package-section ${bg}`}>
    
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='switch-wrapper'>
                <button
                  className={`orbit-tab ${
                    activeTab === "Popular" ? "activee" : ""
                  }`}
                  onClick={() => handleTabClick("Popular")}>
                  Popular
                </button>
                <button
                  className={`orbit-tab ${
                    activeTab === "Exclusive" ? "activee" : ""
                  }`}
                  onClick={() => handleTabClick("Exclusive")}>
                  Exclusive
                </button>
                <div
                  className='orbit-tab-indicator'
                  style={{
                    left: activeTab === "Popular" ? "3%" : "50%",
                    width: "47%",
                  }}></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <HeadingTitle text='Popular OrbiTalk Packs' style={{ marginBottom: "40px" }} />
            </div>
          </div>
          <Package data={filteredData} />
          <div className='d-flex justify-content-center my-5'>
            <Link to='#' className='link-button'>
              View all packages
            </Link>
          </div>

          <div className='row'>
            <div className='col'>
              <HeadingTitle text='Mega Minute Bundles' style={{ marginBottom: "40px" }} />
            </div>
          </div>
          <Package data={packageData} />
        </div>
      </section>
  )
}
