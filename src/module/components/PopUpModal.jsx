import React from "react";
import neeramoy from "../../assets/chorki-logo.png";
import chorki from "../../assets/chorki-logo.png";
import bongo from "../../assets/bongo-logo.png";

const PopUpModal = ({ modalId, title, body }) => {
  // Inline styles for demonstration. In a real application, consider using a CSS module or a separate CSS file.
  const modalContentStyle = {
    borderRadius: "30px",
    border: "1px solid #c8e6c9", // Slightly darker green border
    boxShadow: "var( --color-lime-green",
    padding: "30px", // Add padding to the content itself
    position: "relative", // For absolute positioning of the close button
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "-16px",
    right: "0",
    fontSize: "3.8rem",
    color: "var( --color-lime-green)",
    padding: 0,
  };

  const logoContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const logoStyle = {
    maxHeight: "50px",
  };

  const mainTextStyle = {
    color: "#28a745",
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "30px",
  };

  const callTextStyle = {
    color: "#343a40",
    fontSize: "1.1rem",
    textAlign: "center",
  };

  const callNumberStyle = {
    color: "#28a745",
    fontSize: "1.6rem",
    fontWeight: "bold",
    // marginTop: "5px",
    // display: "block",
  };

  const contentMapping = {
    neeramoy: {
      logo: neeramoy,
    },
  };
  return (
    <>
      {/* You'll typically have a button elsewhere in your app to trigger this modal */}
      {/* Example trigger button (uncomment and use in your main component if needed): */}
      {/* <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target={`#${modalId}`}>
                Launch Neeramoy Info
            </button> */}

      {/* Modal */}
      <div
        className='modal fade'
        id={modalId}
        tabIndex='-1'
        aria-labelledby={`${modalId}Label`}
        aria-hidden='true'>
        <div
          className='modal-dialog modal-dialog-centered'
          style={{ maxWidth: "600px" }}>
          <div className='modal-content' style={modalContentStyle}>
            <div style={{ position: "relative", width: "100%" }}>
              <button
                style={closeButtonStyle}
                type='button'
                className='btn'
                data-bs-dismiss='modal'
                aria-label='Close'>
                &times;
              </button>
              <div style={logoContainerStyle}>
                {title && (
                  <img src={title} alt='Neeramoy Logo' style={logoStyle} />
                )}
              </div>
            </div>

            <div className='modal-body' style={{ padding: "0px" }}>
              <p style={mainTextStyle}>{body}</p>
              <p style={callTextStyle}>
                For any query regarding this service activation,
                <br />
                please call <span style={callNumberStyle}>16590</span>
              </p>
            </div>

            {/* Modal Footer removed as per design */}
            {/* <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
