import React from "react";

const Dots = ({ className = "top-[340px]", position = "right" }) => {
  return (
    <div className={`absolute ${position}-0 ${className} lg:block hidden`}>
      <svg
        width="181"
        height="247"
        viewBox="0 0 181 247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <circle cx="9.5" cy="9.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="47.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="85.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="123.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="161.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="199.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="9.5" r="9.5" fill="#767676" />
          <circle cx="9.5" cy="237.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="47.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="85.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="123.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="161.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="9.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="199.5" r="9.5" fill="#767676" />
          <circle cx="47.5" cy="237.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="47.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="85.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="123.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="9.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="161.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="199.5" r="9.5" fill="#767676" />
          <circle cx="85.5" cy="237.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="47.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="85.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="9.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="123.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="161.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="199.5" r="9.5" fill="#767676" />
          <circle cx="123.5" cy="237.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="47.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="85.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="123.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="161.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="199.5" r="9.5" fill="#767676" />
          <circle cx="161.5" cy="237.5" r="9.5" fill="#767676" />
        </g>
      </svg>
    </div>
  );
};

export default Dots;
