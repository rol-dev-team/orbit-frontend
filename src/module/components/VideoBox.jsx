import React from "react";
import playButton from "../../assets/play.png";

export const VideoBox = ({ data }) => {
  const handleVideoLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className='row'>
      {data.map((item, index) => (
        <div className='col-12 col-md-4 mb-4' key={index}>
          <div
            onClick={() => handleVideoLink(item.link)}
            className='video-box'
            style={{
              background: `url(${item.image})`,
              backgroundOrigin: "content-box",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
            <img src={playButton} alt='video-icon' />
            <div
              className='align-self-start '
              style={{ marginTop: "6rem", marginLeft: "1rem" }}>
              <h6
                className='fw-bold text-white ms-3 mt-5 fs-4'
                style={{ lineHeight: "10px" }}>
                {item.title}
              </h6>
              <p className='fw-bold ms-3'>{item.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
