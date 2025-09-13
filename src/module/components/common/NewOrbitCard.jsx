import React from "react";
import { Link } from "react-router-dom";
import neeramoy from "../../../assets/niramoy-logo.png";
import chorki from "../../../assets/chorki-logo.png";
import bongo from "../../../assets/bongo-logo.png";

import { Button } from "./Button";
import PopUpModal from "../PopUpModal";

export const NewOrbitCard = ({ data }) => {
  return (
    <div className='row d-flex justify-content-center'>
      {data.map((item, index) => {
        const modalId = `orbitModal${index}`;

        return (
          <div className='col-12 col-md-4 mb-3 mb-sm-0' key={index}>
            <div className='card' style={{ height: "410px" }}>
              <img
                src={item.image}
                className='card-img-top'
                height='250px'
                alt={item.title}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>{item.desc}</p>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <button
                    type='button'
                    className='btn'
                    style={{
                      background: "var(--color-primary)",
                      color: "white",
                      padding: "5px 20px",
                      borderRadius: "20px",
                    }}
                    data-bs-toggle='modal'
                    data-bs-target={`#${modalId}`}>
                    {item.buttonText}
                  </button>

                  <Link
                    to='#'
                    className='link-button'
                    style={{ marginRight: "2em" }}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <PopUpModal
              modalId={modalId}
              title={item.logo}
              body={<p>{item.modalContent || "More info goes here."}</p>}
              onSave={() => alert(`Saved from ${item.title}`)}
            />
          </div>
        );
      })}
    </div>
  );
};
