import { useLocation } from "react-router-dom";
import { whatsNewOrbitData } from "../../static/data";
import { HeadingTitle } from "../common/HeadingTitle";
import { NewOrbitCard } from "../common/NewOrbitCard";
import { SubTitle } from "../common/SubTitle";

function WhatsNewOrbit() {
  const location = useLocation();
  const isOffersPage =
    location.pathname === "/offers" ||
    location.pathname === "/news-gallery/gallery";

  const containerStyle = {
    marginBottom: isOffersPage ? "50px" : "0px",
    transition: "margin-bottom 0.3s ease",
  };
  return (
    <section className='whats-new-orbit-section' style={containerStyle}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <HeadingTitle
              text='News & Blogs'
              style={{ marginBottom: "15px" }}
            />
            <SubTitle
              text='Orbit has included number of new VAS for your unparallel digital life experience.'
              style={{ marginBottom: "40px" }}
            />
          </div>
        </div>
        <NewOrbitCard data={whatsNewOrbitData} />
      </div>
    </section>
  );
}

export default WhatsNewOrbit;
