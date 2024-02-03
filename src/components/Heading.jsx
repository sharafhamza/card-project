import React from "react";

const Heading = (props) => {
  return (
    <props.tag className={props.className}>
      {props.text === "" ? (
        <span className="font-semibold text-lg text-red-500">
          there is no text. you have to write text
        </span>
      ) : (
        props.text
      )}
    </props.tag>
  );
};

export default Heading;
