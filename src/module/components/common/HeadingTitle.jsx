import React from "react";

export const HeadingTitle = ({ text, style }) => {
  return (
    <h1 className='heading-title' style={style}>
      {text}
    </h1>
  );
};
