import { useState, useRef, useEffect } from "react";
import { Package } from "../Package"; // Assuming these are correctly imported
import { packageData } from "../../static/data"; // Assuming packageTypeData is not used or imported elsewhere if needed
import { Link } from "react-router-dom";
import { HeadingTitle } from "../common/HeadingTitle";

// Make sure to import your CSS file if it's separate
// import './PackageSection.css'; // Or your chosen CSS file name

function PackageSection({ bg }) {
  const [activeTab, setActiveTab] = useState("Popular");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
    opacity: 0, // Start hidden, reveal on first calculation for smooth appearance
  });

  const popularTabRef = useRef(null);
  const specialOffersTabRef = useRef(null);
  const switchWrapperRef = useRef(null); // Ref for the parent wrapper

  // Original data filtering logic
  const filteredData = packageData.filter((item) => {
    if (activeTab === "Popular") {
      return item.popular === true;
    } else if (activeTab === "Special Offers") {
      return item.specialOffer === true;
    }
    return true; // Fallback from original code
  });

  const numberOfMegaPackItems = 3;
  const sortedPackages = [...packageData].sort((a, b) => b.price - a.price);
  const megaPackData = sortedPackages.slice(0, numberOfMegaPackItems);

  useEffect(() => {
    let activeEl = null;
    if (activeTab === "Popular") {
      activeEl = popularTabRef.current;
    } else if (activeTab === "Special Offers") {
      activeEl = specialOffersTabRef.current;
    }

    if (activeEl && switchWrapperRef.current) {
      const wrapperRect = switchWrapperRef.current.getBoundingClientRect();
      const activeTabRect = activeEl.getBoundingClientRect();

      // Calculate left position relative to the switchWrapper
      const newLeft = activeTabRect.left - wrapperRect.left;
      const newWidth = activeTabRect.width;

      setIndicatorStyle({
        left: `${newLeft}px`,
        width: `${newWidth}px`,
        opacity: 1, // Make it visible
      });
    }
  }, [activeTab]); // Re-run when activeTab changes (refs don't need to be in deps for this logic)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={`package-section ${bg}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            {/* Add ref to switch-wrapper */}
            <div className='switch-wrapper' ref={switchWrapperRef}>
              <button
                ref={popularTabRef} // Add ref
                className={`orbit-tab ${
                  activeTab === "Popular" ? "activee" : ""
                }`}
                onClick={() => handleTabClick("Popular")}>
                Popular
              </button>
              <button
                ref={specialOffersTabRef} // Add ref
                className={`orbit-tab ${
                  activeTab === "Special Offers" ? "activee" : ""
                }`}
                onClick={() => handleTabClick("Special Offers")}>
                Special Offers
              </button>
              <div
                className='orbit-tab-indicator'
                style={indicatorStyle} // Apply dynamic style
              ></div>
            </div>
          </div>
        </div>
        <Package data={filteredData} />
        <div className='d-flex justify-content-center my-5'>
          <Link to='/view-all-packages' className='link-button'>
            View all packages
          </Link>
        </div>

        <div className='row'>
          <div className='col'>
            <HeadingTitle text='Mega Pack' style={{ marginBottom: "40px" }} />
          </div>
        </div>
        <Package data={megaPackData} />
      </div>
    </section>
  );
}

export default PackageSection;
