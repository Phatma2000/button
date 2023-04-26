import React from "react";

const Button = ({
  width,
  height,
  padding,
  bgColor,
  radius,
  margin,
  color,
  text,
  value,
  mTop,
  border,
  bColor,
  bStyle,
  mBottom,
}) => {
  return (
    <>
      <button
        className="btn_left_right"
        style={{
          width: width + "px",
          height: height + "px",
          padding: padding + "px",
          backgroundColor: bgColor,
          borderRadius: radius,
          margin: margin,
          color: color,
          text: value,
          border: border,
          marginTop: mTop + "px",
          borderColor: bColor,
          borderStyle: bStyle,
          marginBottom: mBottom + "px",
          id:"signIn"
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
