import { HeadingTitle } from "../common/HeadingTitle";
import { SubTitle } from "../common/SubTitle";
import { weAreOnlineData } from "../../static/data";
import weAreOnline from "../../../assets/images/sections/we_are_online/we-are-online.png";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { MapPinned } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
function WeAreOnline() {
  const location = useLocation();
  const isOffersPage = location.pathname === "/support/call-up";

  const containerStyle = {
    marginTop: isOffersPage ? "50px" : "0px",
    transition: "margin-top 0.3s ease",
  };

  const iconMap = {
    Phone: <Phone className='me-2' />,
    MessageCircleQuestion: <MessageCircleQuestion className='me-2' />,
    MapPinned: <MapPinned className='me-2' />,
  };
  return (
    <section className='we-are-online-section' style={containerStyle}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={weAreOnline}
                  className='img-fluid'
                  alt='we are online'
                />
              </div>
              <div className='content'>
                <HeadingTitle
                  text='We are online, always!'
                  style={{ marginBottom: "25px", color: "white" }}
                />
                <SubTitle
                  text='Our customer support agents are active 24 hours a day, 7 days a week'
                  style={{ marginBottom: "25px", color: "white" }}
                />
                <ul>
                  {weAreOnlineData.map((item, index) => (
                    <li key={index} className='transparent-btn'>
                      <Link to={item.link}>
                        {iconMap[item.icon]}
                        {item.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeAreOnline;
