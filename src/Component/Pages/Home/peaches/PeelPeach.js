import React from "react";
import "./peach.css";

import peachImg from "../../../../Assets/Homepage/Peeches/peech.webp";

const PeelPeach = () => {
  return (
    <div>
      <div className="peach-page">
        <div className="peach-pic-card">
          <img src={peachImg} alt="HOW TO PEEL PEACHES" />
        </div>
        <div className="peach-description-card">
          <p>COLLECTION</p>
          <h3>HOW TO PEEL PEACHES,3 WAYS</h3>
          <p className="peach-description">
            There’s more than one way to peel a peach! Here are three ways to
            get the job done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeelPeach;
