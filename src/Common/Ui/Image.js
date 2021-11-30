import React from "react";

const Images = ({ src, alt, extraClass }) => {
  return (
    <img
      className={`fit-to-div-image ${extraClass && extraClass}`}
      src={src && src}
      alt={alt ? alt : "img"}
    />
  );
};

export default Images;
