import React from "react";

export const Button = ({
  type,
  text = "Button",
  padding = "5px 10px",
  borderRadius = "5px",
  border = "1px solid transparent",
  onClick,
  className = "",
  ...props
}) => {
  const buttonStyle = {
    padding,
    borderRadius,
    border,
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    transition: "0.3s",
    ...props.style,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      className={`custom-button ${className}`}
      {...props}>
      {text}
    </button>
  );
};
