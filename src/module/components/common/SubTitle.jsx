import React from "react";

export const SubTitle = ({ text, style }) => {
  return (
    <p className='sub-title' style={style}>
      {text}
    </p>
  );
};
