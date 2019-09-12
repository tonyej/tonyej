import React from "react";
import BodyAnimate from "./BodyAnimate";

const Introduction = () => {
  return (
    <BodyAnimate isDark={true}>
      <div className="text-wrapper">
        <h1>Tony E. Johnson</h1>
        <p>
          Thanks for your patience while I rebuild my portfolio and update it to
          reflect my most recent work.
        </p>
      </div>
    </BodyAnimate>
  );
};

export default Introduction;
