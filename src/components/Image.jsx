import React from "react";

const Image = ({ imageValue, alt }) => {
  return <img src={`../media/${imageValue}`} alt={alt} />;
};

export default Image;
