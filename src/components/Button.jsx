import React from "react";

const Button = ({ buttonText, className, iconAlignment, icon }) => {
  // let align = "";
  // if (iconAlignment === "left") align = "left";
  // else if (iconAlignment === "right") align = "right";
  // else if (iconAlignment === "both") align = "both";

  return (
    <button className={className}>
      <span
        className={`flex gap-2 items-center ${
          iconAlignment === "left" && "flex-row-reverse"
        } `}
      >
        {iconAlignment === "both" ? (
          <>
            {icon}
            {buttonText}
            {icon}
          </>
        ) : (
          <>
            {buttonText}
            {icon}
          </>
        )}
      </span>
    </button>
  );
};

export default Button;
